<script lang="ts">
import TodoItem from './components/TodoItem.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoAdder from './components/TodoAdder.vue';
import draggable from 'vuedraggable';
import { v4 as uuidv4 } from 'uuid';
import { TodoItemType } from './types'


export default {

  data() {
    return {
      todoList: [
        { id: uuidv4(), label: "todo one", completed: true },
        { id: uuidv4(), label: "todo two", completed: false },
      ],
      filter: "All",
      lightTheme: false,
    }
  },
  components: {
    TodoItem: TodoItem,
    TodoFooter: TodoFooter,
    TodoHeader: TodoHeader,
    TodoAdder: TodoAdder,
    draggable: draggable,
  },
  methods: {
    handleAddTodo(todo: TodoItemType) {
      this.todoList.push(todo)
    },
    handleDeleteTodo(todo: TodoItemType) {
      const findIndex = this.todoList.findIndex(a => a.id === todo.id)
      findIndex !== -1 && this.todoList.splice(findIndex, 1)
    },
    clearCompleted() {
      this.todoList = this.todoList.filter(item => !item.completed);
    },
    handleFilter(filter: string) {
      this.filter = filter
    },
    isShown(todo: TodoItemType) {
      if (this.filter == 'Completed') {
        return todo.completed
      } else if (this.filter == 'Active') {
        return !todo.completed
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
  <div :data-theme="lightTheme ? 'light' : 'dark'">
    <div class="app">
      <TodoHeader v-model="lightTheme" />
      <div class="todo-input">
        <TodoAdder @AddTodo="handleAddTodo" />
      </div>

      <div class="todo-list">
        <draggable v-model="todoList" item-key="id">
          <template #item="{ element: todo }">
            <TodoItem :item-data="todo" v-if="isShown(todo)" @delete="handleDeleteTodo" />
          </template>
        </draggable>
        <TodoFooter :remaining="remainingTodo" @ClearCompleted="clearCompleted" :filter="filter" @Filter="handleFilter" />
      </div>
    </div>
  </div>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="mailto:ismail.monsieur495@aleeas.com">C. ismail</a>.
  </div>
</template>

<style scoped>
.app {
  max-width: 530px;
  padding-inline: 25px;
  margin: 0 auto;
}

.todo-input .todo-item {
  border-radius: 5px;
  border: none;
}

.todo-input {
  margin-bottom: 30px;
}


.todo-list {
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.todo-list> :first-child {
  border-radius: 5px 5px 0 0;
}
</style>
