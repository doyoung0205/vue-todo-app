<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in todoItems"
        :key="'todoId_' + index"
        class="shadow "
      >
        <div class="list-item">
          <!-- 아래 삭제 버튼을 눌렀을 떄 동작하게 코드를 변경하세요 -->
          <span v-bind:class="{ textCompleted: todoItem.completed }">
            {{ todoItem.item }}</span
          >
          <button class="checkBtn" @click="toggleComplete({ todoItem, index })">
            check
          </button>
          <button class="removeBtn" @click="removeItem({ todoItem, index })">
            remove
          </button>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['removeItem', 'toggleComplete']), // 암묵적으로 { todoItem, index } 를 넘김
    // removeItem(todoItem, index) {
    //   this.$store.commit('removeItem', { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleComplete', {
    //     todoItem,
    //     index,
    //   });
    // },
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },
    // ...mapGetters(['storedTodoItems']), // 이름이 같을 때
    // 이름이 다를 때
    ...mapGetters({
      todoItems: 'storedTodoItems',
    }),
  },
};
</script>

<style>
.textCompleted {
  color: coral;
  text-decoration: line-through;
}

/* 리스트 아이템 프랜지션 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
