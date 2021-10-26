<template>
    <div class="home">
        <div class="splash-container">
            <div class="splash">
                <h1>Splendid Food</h1>
            </div>
        </div>

        <main class="wrapper">
            <h2>Recommended</h2>

            <div class="recommended">
                <ProductCard
                    v-for="(product, i) in inventory.slice(0, 3)"
                    :key="product.id"
                    :index="i"
                    :product="product"
                    :addToCart="addToCart"
                    class="card"
                />
            </div>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'Home',
    props: ['inventory', 'addToCart'],
    components: { ProductCard },
};
</script>
