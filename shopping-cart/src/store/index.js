import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products:[],
        cart: [],
        checkoutStatus: null
    },

    getters: {
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        },
        cartProducts(state, getters) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },
        cartTotal(state, getters) {
            let total = 0
            getters.cartProducts.forEach(product => {
                total += product.price * product.quantity
            });
            return total
            //return getters.cartProducts.reduce((total,product) => total + product.price * product.quantity, 0)
        },
        productIsInStock() {
            return (product) => {
                return product.inventory > 0
            }
        }
    },

    actions: {
        fetchProducts({commit}) {
            return new Promise((resolve, reject) => {
                //make the call
                //run setProducts mutation
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve()
                })
            })
        },
        addProductToCart({state, getters, commit}, product) {
            if(getters.productIsInStock(product)) {
                const cartItem = state.cart.find(item => item.id === product.id)
                if(!cartItem) {
                    commit('pushProductToCart', product.id)
                } else {
                    commit('incrementItemQuantity', cartItem)
                }
                commit('decrementProductInventory', product)
            }
        },
        checkout(context) {
            shop.buyProducts(
                context.state.cart,
                () => {
                    context.commit('emptyCart')
                    context.commit('setCheckoutStatus', 'success')
                },
                () => {
                    context.commit('setCheckoutStatus', 'fail')
                }
            )
        }
    },

    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        pushProductToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem) {
            //cartItem.quantity++
            const index = state.cart.findIndex(p => p.id === cartItem.id)
            state.cart[index].quantity++
        },
        decrementProductInventory(state, product) {
            //product.inventory--
            const index = state.products.findIndex(p => p.id === product.id)
            state.products[index].inventory--
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },
        emptyCart(state) {
            state.cart = []
        }
    }
})