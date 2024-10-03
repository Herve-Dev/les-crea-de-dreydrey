<template>
    <article class="card">
        <MyCardCarousel :autoplay="3000" :autoplayTimeout="3000" :perPage="1">
            <MyCardSlide v-for="(image, index) in images" :key="index">
                <img :src="image" class="card__img" alt="Image de la carte" />
                <MyCardNavigation>-></MyCardNavigation>
            </MyCardSlide>
        </MyCardCarousel>
        <h3 class="card__title">{{title}}</h3>
        <BtnBanner buttonText="En savoir plus" class="card__btn-preview"/>
    </article>
</template>

<script setup lang="ts">
    import BtnBanner from '~/components/Button.vue'; 
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        images: {
            type: Array as () => string[], // Spécifiez que c'est un tableau de chaînes
            required: true
        }
    });
</script>