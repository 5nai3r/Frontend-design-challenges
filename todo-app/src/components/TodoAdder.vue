<script lang="ts">
import { TodoItemType } from '../types';
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
            todo: {
                label: "",
                completed: false,
            }

        }
    },
    methods: {
        emitAddTodo() {
            if (this.todo.label.length == 0) return;
            const newTodo: TodoItemType = { id: uuidv4(), ...this.todo };
            this.$emit('AddTodo', JSON.parse(JSON.stringify(newTodo)))
            this.todo.label = "";
            this.todo.completed = false;
            (document.activeElement as HTMLElement).blur()
        }
    }

}
</script>

<template>
    <div class="todo-item">
        <label class="checkbox">
            <input aria-label='toggle' type="checkbox" v-model="todo.completed">
            <span class="checkbox-icon"></span>
        </label>
        <input aria-label="add" type="text" class="text" inputmode="text" v-model="todo.label" @keyup.enter="emitAddTodo">
    </div>
</template>

<style scoped>
.todo-item {
    width: 100%;
    margin-top: 45px;
    display: grid;
    grid-template-columns: 13% auto 13%;
    grid-template-rows: 60px;
    background-color: var(--todo-bg);
    border-bottom: 1px solid var(--todo-border);
    color: var(--todo-text);
}


.todo-item:has(input:checked) {
    color: var(--text-color-secondary);
    text-decoration-line: line-through;
}



.todo-item .checkbox {
    position: relative;
    cursor: pointer;
}

.todo-item .checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.todo-item .checkbox-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 100%;
    background-clip: padding-box;
    background: var(--todo-border);
}

.todo-item .checkbox-icon:hover {
    background: linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.todo-item .checkbox-icon:after {
    content: '';
    position: absolute;
    inset: 0;
    margin: 1px;
    border-radius: inherit;
    background: var(--todo-bg);
}

.todo-item .checkbox input:checked+.checkbox-icon:after {
    background: url('/icon-check.svg'), linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-repeat: no-repeat;
    background-position: center;
}

.todo-item>* {
    background-color: transparent;
    all: unset;
}
</style>