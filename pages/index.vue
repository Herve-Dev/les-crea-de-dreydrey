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
                <CardPreview 
                    v-for="post in posts"
                    :key="post.id"
                    :title="getFirstThreeWords(post.title)"
                    @click="openModal(post)"
                />
            </section>

            <Modal
                v-if="selectedPost"
                :title="selectedPost.title"
                :body="selectedPost.body"
                :isVisible="isModalVisible"
                @close="closeModal"
            />
        </article>
    </main>
</template>

<script setup >
    import BtnBanner from '~/components/Button.vue'; 
    import CardPreview from '~/components/Card.vue';
    import Modal from '~/components/Modal.vue';

    // Variables de contrôle de la modal
    let selectedPost = ref(null);  // Le post sélectionné pour la modal
    let isModalVisible = ref(false);  // Contrôle de la visibilité de la modal

    // Fonction pour ouvrir la modal et définir le post sélectionné
    const openModal = (post) => {
    selectedPost.value = post;
    isModalVisible.value = true;
    };

    // Fonction pour fermer la modal
    const closeModal = () => {
    isModalVisible.value = false;
    selectedPost.value = null;
    };

    const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=6');

    // Fonction pour récupérer les 3 premiers mots du titre
    function getFirstThreeWords(title) {
        return title.split(' ').slice(0, 3).join(' ');
    }
</script>