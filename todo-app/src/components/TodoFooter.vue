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
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

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


.todo-footer.footer-mobile {
    display: none;
    grid-template-columns: 1fr;
    margin-top: 20px;
    border-radius: 5px;
}


@media screen and (max-width: 425px) {
    .todo-footer {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .todo-footer .filter {
        visibility: hidden;
    }

    .todo-footer.footer-mobile {
        display: grid;
    }

    .todo-footer.footer-mobile .filter {
        visibility: visible;
    }
}
</style>