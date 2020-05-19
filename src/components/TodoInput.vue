<template>
  <div>
    <h1>Todo input</h1>
    <input type="text" v-model="value" @keyup.enter="addItem" />
    <button @click="addItem">add</button>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal v-if="showModal" @close="showModal = false">
      <!-- override -->
      <h3 slot="header">경고</h3>
      <h3 slot="body">입력창에 값을 입력해주세요!</h3>
      <div slot="footer">
        copy right
        <button
          class="modal-default-button closeModalBtn"
          @click="showModal = false"
        >
          OK
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue';
export default {
  components: { Modal },
  data() {
    return {
      value: '',
      showModal: false,
    };
  },
  methods: {
    addItem() {
      const item = this.value.trim();
      if (!item) {
        this.showModal = !this.showModal;
        return false;
      }

      this.$store.commit('addItem', item);
      this.clearInput();
    },
    clearInput() {
      this.value = '';
    },
  },
};
</script>

<style lang="scss">
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  input {
    border-style: none;
    font-size: 0.9rem;
  }
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #43b923;
}
</style>
