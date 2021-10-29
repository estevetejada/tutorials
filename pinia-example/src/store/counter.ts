import { defineStore } from 'pinia'

interface MainCounter {
    counter: number,
    name: string
}

export const useCounterStore = defineStore('counter', {
    state: (): MainCounter => ({
        counter: 0,
        name: 'esteve'
    }),
    actions: {
        addOne() {
            this.counter++
        },
        addValue(value: number) {
            this.counter += value
        },
        rename(name: string) {
            this.name = name
        }
    },
    getters: {
        getCounter:(state) => {
            return state.counter
        }
    }
})