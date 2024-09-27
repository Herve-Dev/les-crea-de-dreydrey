<template>
    <main>
        <article class="banner">
            <section class="banner__logo-section">
                <img src="/assets/images/logo_les_crea_de_dreydrey.webp" alt="Logo les Créa de DreyDrey"
                    class="banner__logo-image">
            </section>

            <section class="banner__title-section">
                <h1 class="banner__title">Bienvenue sur mon site !</h1>
            </section>

            <section class="banner__text-section">
                <p class="banner__description">
                    Je m'appelle Audrey et je suis passionnée par la création artistique à base de résine époxy. <br><br>

                    Mon travail consiste à couler cette résine dans des moules soigneusement choisis, pour donner vie à des
                    pièces uniques et originales. <br><br>

                    Que ce soit pour des objets décoratifs, des bijoux ou des œuvres d'art, chaque création est le résultat
                    d'une attention minutieuse aux détails et d'une grande dose de créativité. <br><br>

                    Je mets tout mon savoir-faire et ma passion dans chaque réalisation, pour vous offrir des pièces qui
                    allient esthétisme et originalité. <br><br>

                    Explorez mon univers et découvrez des créations uniques, faites avec passion <br><br>
                </p>
            </section>
            <section class="banner__button-section">
                <BtnBanner buttonText="Découvrir mes créations" class="banner__button" />
            </section>
        </article>

        <article class="preview">
            <section class="preview__header">
                <h2 class="preview__title">Aperçu de mes créations</h2>
            </section>
            <section class="preview__content">
                <CardPreview v-for="n in 6" :key="n"/>
            </section>
        </article>
    </main>
</template>

<script setup>
    import BtnBanner from '~/components/Button.vue'; 
    import CardPreview from '~/components/Card.vue';
    import {useHead} from '@unhead/vue'

    useHead({
        title: 'Les Créa de DreyDrey',
        meta: [
            { name: 'description', content: 'Découvrez les créations uniques en résine époxy.' },
            { name: 'keywords', content: 'résine époxy, art, créations, bijoux' },
            { name: 'author', content: 'Audrey' },
            { property: 'og:title', content: 'Accueil - Les Créa de DreyDrey' },
            { property: 'og:description', content: 'Découvrez des pièces uniques en résine époxy.' },
            { property: 'og:image', content: '/assets/images/logo_les_crea_de_dreydrey.webp' },
        ],
    })
</script>