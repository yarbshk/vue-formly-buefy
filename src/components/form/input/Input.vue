<template>
  <b-input v-bind="properties"
           v-model="model[field.key]"
           @blur="handleBlurEvent"
           @focus="handleFocusEvent"
           @change="handleChangeEvent">
  </b-input>
</template>

<script>
  /**
   * Implements an input or textarea field.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFieldMixin from 'src/mixins/base-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    mixins: [BaseFieldMixin, RequiredFieldMixin]
  }
</script>
