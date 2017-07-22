<template>
  <b-dropdown-option v-bind="properties">
    <b-icon v-if="icon" :icon="icon"></b-icon>
    <span>{{ label }}</span>
  </b-dropdown-option>
</template>

<script>
  export default {
    props: {
      label: String,
      icon: {
        type: String,
        default: ''
      },
      properties: {
        type: Object,
        default: {}
      }
    }
  }
</script>
