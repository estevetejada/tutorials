<template>
    <nav>
        <a id="home">Home</a>
        <a v-if="isLoggedIn" id="profile">My Profile</a>
    </nav> 
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Nav',
    data() {
        return {
            isLoggedIn: false
        }
    }
});
</script>
