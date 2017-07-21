<template>
  <b-field v-if="isWrapped" v-bind="properties">
    <slot></slot>
  </b-field>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      isWrapped: {
        type: Boolean,
        default: false
      },
      properties: Object
    }
  }
</script>
