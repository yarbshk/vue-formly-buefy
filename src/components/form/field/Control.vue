<template>
  <p class="control">
    <component v-bind:is="type" v-bind="options"></component>
  </p>
</template>

<script>
  export default {
    props: {
      type: Object,
      options: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
