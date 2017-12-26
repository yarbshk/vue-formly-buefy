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
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

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
