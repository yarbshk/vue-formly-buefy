<template>
  <b-timepicker v-bind="properties"
                v-model="model[field.key]">
  </b-timepicker>
</template>

<script>
  /**
   * Implements an timepicker field.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/timepicker}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    name: 'vfbTimepicker',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin]
  }
</script>
