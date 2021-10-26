<template>
    <div class="recommended">
        <div class="card">
            <div class="card-title">{{ product.name }}</div>
            <div class="card-body">
                <i class="icofont-10x icofont-{{ product.icon }}"></i>
                <form>
                    <div class="row">
                        <div class="cell">
                            <label>Type:</label>
                        </div>
                        <div class="cell">
                            <em>{{ product.type }}</em>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <label>Price:</label>
                        </div>
                        <div class="cell">$ {{ product.price.usd }}</div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <label>Quantity:</label>
                        </div>
                        <div class="cell">
                            <input type="number" v-model.number="quantity" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <button
                    @click="addToCart(product.name, quantity)"
                    class="btn btn-light"
                >
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    data() {
        return {
            quantity: 0,
        };
    },
    props: ['product', 'index', 'name', 'addToCart'],
};
</script>
