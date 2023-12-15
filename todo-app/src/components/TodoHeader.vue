<script lang="ts">

export default {

}
</script>

<template>
    <header>
        <h1>TODO</h1>
        <label for="darkModeToggle" class="darkmode-switch">
            <input type="checkbox" id="darkModeToggle">
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
    margin-top: 70px;
    margin-bottom: 50px;
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
    background-image: url("../images/icon-sun.svg");
    background-repeat: no-repeat;
    background-position: center;
}

.darkmode-switch input:checked+.checkbox-icon {
    background-image: url("../images/icon-moon.svg");
}
</style>