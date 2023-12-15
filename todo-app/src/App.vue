<script lang="ts">
import TodoItem from './components/TodoItem.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoAdder from './components/TodoAdder.vue';
export default {

  data() {
    return {
      todoList: [
        { label: "todo one", completed: true },
        { label: "todo two", completed: false },
      ]
    }
  },
  components: {
    TodoItem: TodoItem,
    TodoFooter: TodoFooter,
    TodoHeader: TodoHeader,
    TodoAdder: TodoAdder,
  },
  methods: {
    handleAddTodo(todo) {
      this.todoList.push(todo)
    }
  }
}
</script>

<template>
  <div class="app">
    <TodoHeader />
    <div class="todo-input">
      <TodoAdder @AddTodo="handleAddTodo" />
    </div>
    <div class="todo-list">
      <div v-for="(, i) in todoList">
        <TodoItem v-model="todoList[i]" />
      </div>
      <TodoFooter />
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 480px;
  margin: 0 auto;
}

.todo-input .todo-item {
  border-radius: 5px;
  border: none;
}

.todo-input {
  margin-bottom: 30px;
}

.todo-list> :first-child {
  border-radius: 5px 5px 0 0;
}
</style>
