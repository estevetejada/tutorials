<template>
    <Nav />
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoApp />
    <Parent />
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component'
    import TodoApp from './components/TodoApp.vue'
    import Nav from '@/components/Nav.vue'
    import Parent from '@/components/Parent.vue'

    @Options({
        components: {
            TodoApp,
            Nav,
            Parent,
        },
    })
    export default class App extends Vue {}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
