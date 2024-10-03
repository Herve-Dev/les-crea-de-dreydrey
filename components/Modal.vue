<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-body" aria-modal="true">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal" aria-label="Fermer la modal">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
        <img class="modal-img" src="/assets/images/pot_graphique.webp" alt="Photo d'un pot graphique en blanc et or">
        <h2 id="modal-title">{{ title }}</h2>
        <p> <u>Description:</u> </p>
        <p id="modal-body">
          {{ body }} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque delectus quibusdam praesentium necessitatibus laboriosam consectetur ipsam vel porro quo consequatur fuga doloremque eius officiis, molestias deserunt? Debitis soluta minus illo sed, in ratione impedit nulla dolor, iste aut repellat? Aperiam odio repudiandae, modi vitae rerum deleniti veritatis, amet reiciendis voluptatem nam dignissimos velit? Exercitationem aliquid esse aliquam facilis ipsa reiciendis at, inventore libero cupiditate quidem. Consequatur reprehenderit atque voluptatibus est quae sint debitis voluptate omnis fugit numquam illum ex nostrum amet, sit blanditiis tempora cumque sequi! Tempore in laboriosam mollitia, ea id, deleniti fugiat aperiam quae eum, eaque placeat?
        </p>
        <p> 
          <u>Prix:</u> 
          49euro 
        </p>
      </div>
    </div>
</template>

<script setup>
    const props = defineProps({
            title: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            },
            isVisible: {
                type: Boolean,
                required: true
            }
        });

            const emit = defineEmits(['close']);

            const closeModal = () => {
            emit('close');
        };

    // Focus automatique sur la modal à son ouverture
    import { onMounted, onBeforeUnmount } from 'vue';
        onMounted(() => {
            document.body.style.overflow = 'hidden'; // Désactiver le scroll en arrière-plan
        });
        onBeforeUnmount(() => {
            document.body.style.overflow = ''; // Réactiver le scroll
        });
</script>
