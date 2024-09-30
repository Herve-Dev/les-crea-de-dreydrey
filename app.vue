<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage/>
    <Footer />
  </div>
</template>

<script setup>
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
      htmlAttrs: {
          lang: 'fr' 
      }
    })
</script>