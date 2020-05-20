const addItem = (state, value) => {
  if (!value) {
    return false;
  }
  const item = {
    completed: false,
    item: value,
  };
  localStorage.setItem(this.state.prefix + value, JSON.stringify(item));
  this.state.todoItems.push(item);
};

const removeAllTodoItem = state => {
  this.state.todoItems = [];
  localStorage.clear();
};

const removeItem = (state, payload) => {
  const { todoItem, index } = payload;
  this.state.todoItems.splice(index, index + 1);
  localStorage.removeItem(this.state.prefix + todoItem.item);
};

const toggleComplete = (state, payload) => {
  const { todoItem, index } = payload;
  console.log('todoItem', todoItem);
  console.log('index', index);
  todoItem.completed = !todoItem.completed;

  const item = todoItem.item;
  // 로컬 스토리지의 데이터를 갱신
  localStorage.removeItem(this.state.prefix + item);
  localStorage.setItem(this.state.prefix + item, JSON.stringify(todoItem));
};

export { addItem, removeAllTodoItem, removeItem, toggleComplete };
