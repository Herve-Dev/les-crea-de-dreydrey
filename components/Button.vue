<template>
    <button :class="buttonClass">
        Découvrire mes créations
    </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    buttonClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import "/assets/scss/_button.scss"; 
button {
  @include button(); 
}
</style>