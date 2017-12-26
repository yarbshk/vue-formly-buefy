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
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbRadioButton',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin, SelectricFieldMixin]
  }
</script>
