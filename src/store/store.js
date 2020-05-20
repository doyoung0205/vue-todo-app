import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
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
  getters,
  mutations,
});
