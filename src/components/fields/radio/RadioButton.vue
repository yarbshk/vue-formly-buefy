<template>
  <b-radio-button v-bind="properties"
                  v-model="model[field.key]"
                  :native-value="nativeValue">
    <b-icon v-if="to.icon" :icon="to.icon"></b-icon>
    <span>{{ to.label }}</span>
  </b-radio-button>
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
    name: 'vfbRadioButton',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin, SelectricFieldMixin]
  }
</script>
