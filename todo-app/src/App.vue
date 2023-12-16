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
      ],
      filter: "All",
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
    },
    handleDeleteTodo(i: number) {
      this.todoList.splice(i, 1)
    },
    clearCompleted() {
      this.todoList = this.todoList.filter(item => !item.completed);
    },
    handleFilter(filter: string) {
      this.filter = filter
    },
    isShown(i: number) {
      if (this.filter == 'Completed') {
        return this.todoList[i].completed
      } else if (this.filter == 'Active') {
        return !this.todoList[i].completed
      } else {
        return true
      }
    }


  },

  computed: {
    remainingTodo() {
      return this.todoList.filter(item => !item.completed).length;
    },
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
      <div v-for="(todo, i) in todoList" :key="i">
        <TodoItem v-model="todoList[i]" v-if="isShown(i)" :item-index="i" @delete="handleDeleteTodo" />
      </div>
      <TodoFooter :remaining="remainingTodo" @ClearCompleted="clearCompleted" :filter="filter" @Filter="handleFilter" />
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
