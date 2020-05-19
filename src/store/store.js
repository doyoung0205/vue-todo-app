import Vue from 'vue';
import Vuex from 'vuex';

// 공식 플러그인 을 사용 - 전역으로 추가할 때
Vue.use(Vuex);

// Todo.vue 에서 this.$store 로 접근 가능 한 이유입니다.

const storage = {
  prefix: 'todo-',
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(this.prefix)) {
          const item = localStorage.getItem(key);
          arr.push(JSON.parse(item));
        }
      }
    }
    return arr;
  },
};

// 밖에서 store 라는 변수를 사용할 수 있다.
// import 해주면 된다.
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
    prefix: storage.prefix,
  },
  mutations: {
    addItem(state, value) {
      if (!value) {
        return false;
      }
      const item = {
        completed: false,
        item: value,
      };
      localStorage.setItem(this.state.prefix + value, JSON.stringify(item));
      this.state.todoItems.push(item);
    },
    removeAllTodoItem(state) {
      this.state.todoItems = [];
      localStorage.clear();
    },
    removeItem(state, payload) {
      const { todoItem, index } = payload;
      this.state.todoItems.splice(index, index + 1);
      localStorage.removeItem(this.state.prefix + todoItem.item);
    },
    toggleComplete(state, todoItem, index) {
      console.log('todoItem', todoItem);
      console.log('index', index);
      todoItem.completed = !todoItem.completed;

      const item = todoItem.item;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(this.state.prefix + item);
      localStorage.setItem(this.state.prefix + item, JSON.stringify(todoItem));
    },
  },
});
