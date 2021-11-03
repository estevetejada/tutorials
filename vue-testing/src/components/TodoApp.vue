<template>
    <div>
        <div
            v-for="todo in todos"
            :key="todo.id"
            data-test="todo"
            :class="[todo.completed ? 'completed' : '']"
        >
            {{ todo.text }}
            <input
                type="checkbox"
                v-model="todo.completed"
                data-test="todo-checkbox"
            />
        </div>
        <form data-test="form" @submit.prevent="createTodo">
            <input data-test="new-todo" v-model="newTodo" />
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'TodoApp',
        data() {
            return {
                newTodo: '',
                todos: [
                    {
                        id: 1,
                        text: 'Learn Vue Testing',
                        completed: false,
                    },
                ],
            }
        },
        methods: {
            createTodo() {
                this.todos.push({
                    id: 2,
                    text: this.newTodo,
                    completed: false,
                })
                this.newTodo = ''
            },
        },
    })
</script>

<style>
    .completed {
        text-decoration: line-through;
        color: green;
    }
</style>
