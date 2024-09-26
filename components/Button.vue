<template>
    <button>
      {{ buttonText }}
    </button>
</template>

<script setup>
  const props = defineProps({
    buttonText: {
      type: String,
      required: true,
    },
  });
</script>