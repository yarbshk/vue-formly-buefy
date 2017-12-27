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
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'
  import RequiredFieldMixin from '@/mixins/fields/required'

  export default {
    name: 'vfbInput',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin]
  }
</script>
