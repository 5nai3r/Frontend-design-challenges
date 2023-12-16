<script lang="ts">

export default {
    props: ['remaining', 'filter'],
    emits: ["Filter", "ClearCompleted"],
    methods: {
        emitFilter(filter: string) {
            this.$emit("Filter", filter)
        }
    }
}
</script>

<template>
    <div class="todo-footer">
        <span>{{ remaining }} items left</span>
        <div class="filter">
            <button @click="emitFilter('All')" :class="{ selected: filter === 'All' }">All</button>
            <button @click="emitFilter('Active')" :class="{ selected: filter === 'Active' }">Active</button>
            <button @click="emitFilter('Completed')" :class="{ selected: filter === 'Completed' }">Completed</button>
        </div>
        <button @click="$emit('ClearCompleted')">Clear completed</button>
    </div>
</template>

<style scoped>
.todo-footer {
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 50px;

    background-color: var(--todo-bg);
    border-radius: 0 0 5px 5px;

    color: var(--text-color-secondary);
    font-size: 0.8rem;
}

.todo-footer .filter {
    display: flex;
    justify-content: space-evenly;
    width: 75%;
    font-weight: 700;
}

.todo-footer * {
    background-color: transparent;
    all: unset;
}

.filter .selected {
    color: var(--text-color-selected);
}

.todo-footer button {
    cursor: pointer;
}

.todo-footer button:hover {
    color: var(--text-color-hover);
}
</style>