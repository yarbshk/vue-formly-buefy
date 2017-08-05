<template>
  <button class="button" v-bind="properties">
    <span v-text="label"></span>
    <b-icon v-if="icon" :icon="icon"></b-icon>
  </button>
</template>

<script>
  export default {
    name: 'vfbButton',
    props: {
      label: String,
      icon: {
        type: String,
        default: ''
      },
      properties: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
