<script lang="ts">

export default {
    props: ["itemData"],
    emits: ["delete"],

    data() {
        return {

        }
    },
    methods: {
        emitDelete() {
            this.$emit("delete", this.itemData)
        },
        unfocus() {
            (document.activeElement as HTMLElement).blur()
        }
    }

}
</script>

<template>
    <div class="todo-item">
        <label class="checkbox">
            <input aria-label="toggle" type="checkbox" v-model="itemData.completed">
            <span class="checkbox-icon"></span>
        </label>
        <input aria-label="todo-text" type="text" inputmode="text" class="text" v-model="itemData.label"
            @keyup.enter="unfocus">
        <button aria-label="delete" class="delete" @click="emitDelete"></button>
    </div>
</template>

<style scoped>
.todo-item {
    width: 100%;
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

.todo-item .delete {
    background-image: url("/icon-cross.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    visibility: hidden;
    transition: all 150ms ease-in;
}

.todo-item:hover .delete {
    visibility: visible;
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