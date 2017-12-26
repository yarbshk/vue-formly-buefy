<template>
  <b-checkbox-button v-bind="properties"
                     v-model="model[field.key]"
                     :native-value="nativeValue">
    <b-icon v-if="to.hasOwnProperty('icon')" :icon="to.icon"></b-icon>
    <span>{{ to.label }}</span>
  </b-checkbox-button>
</template>

<script>
  /**
   * Permits the user to make a binary choice.
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbCheckboxButton',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin, SelectricFieldMixin]
  }
</script>
