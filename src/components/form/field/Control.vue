<template>
  <div class="control">
    <component v-bind:is="type" v-bind="options"></component>
  </div>
</template>

<script>
  export default {
    name: 'vfbControl',
    props: {
      type: Object,
      options: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
