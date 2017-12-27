<template>
  <span v-text="label" v-bind="properties"></span>
</template>

<script>
  export default {
    name: 'vfbSpan',
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
