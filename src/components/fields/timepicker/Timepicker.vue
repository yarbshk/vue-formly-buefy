<template>
  <b-timepicker v-bind="properties"
                v-model="model[field.key]"
                @blur="onBlur"
                @focus="onFocus">
  </b-timepicker>
</template>

<script>
  /**
   * An input with a simple dropdown/modal for selecting a time, 
   * uses native timepicker for mobile.
   * {@link https://buefy.github.io/#/documentation/timepicker}
   */
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'
  import RequiredFieldMixin from '@/mixins/fields/required'

  export default {
    name: 'vfbTimepicker',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin]
  }
</script>
