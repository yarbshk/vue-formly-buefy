<template>
  <div class="form-field-wrapper">
    <b-field v-if="isWrapped" v-bind="properties">
      <slot></slot>
    </b-field>
    <slot v-else></slot>
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
