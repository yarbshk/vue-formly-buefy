<template>
  <b-input v-bind="properties"
           v-model="model[field.key]"
           @blur="handleBlurEvent"
           @focus="handleFocusEvent"
           @input="handleInputEvent">
  </b-input>
</template>

<script>
  /**
   * Get user Input.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    name: 'vfbInput',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin]
  }
</script>
