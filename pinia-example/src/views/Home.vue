<template>
  <div class="home">
    <input v-model="newName" type="text">
    <br/>
    <button @click="rename(newName)">Change Name</button>
    <br/>
    <h3>Counter: {{counter}} - {{ name }} </h3>
    <br/>
    <button @click="addOne">Increment</button>
    <br/>
    <button @click="addValue(val)">Increment by value</button>
    <br/>
    <input v-model="val" type="number">
    <br/>
    <button @click="store.$reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'Home',
  components: {},
  data: (() => ({
    val: 0,
    newName: ''
  })),
  setup() {
    const store = useCounterStore();
    const { counter, name } = storeToRefs(store)
    const { addOne, addValue } = store

    function rename(value: string) {
      store.$patch({
        name: value
      })
    }

    store.$subscribe((mutation, state) => {
      console.log('mutation', mutation);
      console.log('state', state)
    })
    
    return {
      store,
      name,
      counter,
      addOne,
      addValue,
      rename
    }
  }
});
</script>
