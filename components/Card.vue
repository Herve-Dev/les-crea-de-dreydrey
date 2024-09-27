<template>
    <article class="card">
        <img class="card__img" src="/assets/images/pot_graphique.webp" alt="Photo d'un pot graphique en blanc et or">
        <h3 class="card__title">Titre</h3>
        <BtnBanner buttonText="En savoir plus" class="card__btn-preview"/>
    </article>
</template>

<script setup>
    import BtnBanner from '~/components/Button.vue'; 
</script>