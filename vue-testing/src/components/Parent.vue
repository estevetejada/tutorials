<template>
    <div>
        <Child />
    </div>
</template>

<script lang="ts">
import Child from '@/components/Child.vue';
export default {
    name: 'Parent',
    components: {
        Child
    }
};
</script>
