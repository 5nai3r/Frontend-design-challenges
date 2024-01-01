<script lang="ts">

export default {
    props: ['remaining', 'filter'],
    emits: ["Filter"],
    methods: {
        emitFilter(filter: string) {
            this.$emit("Filter", filter)
        }
    }
}
</script>

<template>
    <div class="todo-footer footer-mobile">
        <div class="filter">
            <button @click="emitFilter('All')" :class="{ selected: filter === 'All' }">All</button>
            <button @click="emitFilter('Active')" :class="{ selected: filter === 'Active' }">Active</button>
            <button @click="emitFilter('Completed')" :class="{ selected: filter === 'Completed' }">Completed</button>
        </div>
    </div>
</template>

<style scoped>
.todo-footer {
    justify-items: center;
    align-items: center;
    grid-template-rows: 50px;
    background-color: var(--todo-bg);
    color: var(--text-color-secondary);
    font-size: 0.8rem;
    display: none;
    grid-template-columns: 1fr;
    margin-top: 20px;
    border-radius: 5px;
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

@media screen and (max-width: 425px) {
    .todo-footer.footer-mobile {
        display: grid;
    }
}
</style>