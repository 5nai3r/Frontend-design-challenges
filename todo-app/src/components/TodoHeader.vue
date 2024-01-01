<script lang="ts">

export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>

<template>
    <header>
        <h1>TODO</h1>
        <label for="darkModeToggle" class="darkmode-switch">
            <input aria-label="switch-theme" type="checkbox" id="darkModeToggle" :checked="modelValue"
                @change="$emit('update:modelValue', ($event.target as HTMLInputElement)?.checked)">
            <span class="checkbox-icon"></span>
        </label>
    </header>
</template>

<style scoped>
header {
    display: grid;
    grid-template-columns: auto 40px;
    grid-template-rows: 40px;
    height: 30px;
    padding-top: 70px;
    padding-bottom: 45px;
}

.darkmode-switch {
    position: relative;
    cursor: pointer;
}

.darkmode-switch input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.darkmode-switch .checkbox-icon {
    position: absolute;
    inset: 0;
    background-image: url("/icon-sun.svg");
    background-repeat: no-repeat;
    background-position: center;
}

.darkmode-switch input:checked+.checkbox-icon {
    background-image: url("/icon-moon.svg");
}
</style>