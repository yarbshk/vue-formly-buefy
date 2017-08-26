<template>
  <b-datepicker v-bind="properties"
                v-model="model[field.key]">
  </b-datepicker>
</template>

<script>
  /**
   * Implements an input or textarea field.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin]
  }
</script>

