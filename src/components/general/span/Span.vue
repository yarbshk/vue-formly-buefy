<template>
  <span v-text="label" v-bind="properties"></span>
</template>

<script>
  export default {
    props: {
      label: {
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
