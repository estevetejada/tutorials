<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
            <ProductCard
                v-for="(product, i) in inventory.slice(0, 6)"
                :key="product.id"
                :index="i"
                :product="product"
                :addToCart="addToCart"
                class="card"
            />
        </div>
    </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
    name: ['Products'],
    props: ['inventory', 'addToCart'],
    components: { ProductCard },
};
</script>
