<template>
  <b-radio v-bind="properties"
           v-model="model[field.key]"
           :native-value="nativeValue"
           @input="handleInputEvent">
    {{ to.label }}
  </b-radio>
</template>

<script>
  /**
   * Select an option from a set.
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'
  import RequiredFieldMixin from '@/mixins/fields/required'
  import SelectricFieldMixin from '@/mixins/fields/selectric'

  export default {
    name: 'vfbRadio',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin, SelectricFieldMixin],
    data () {
      return {
        canWrapChildNodes: true
      }
    }
  }
</script>
