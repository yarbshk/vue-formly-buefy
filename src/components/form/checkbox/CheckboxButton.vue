<template>
  <b-checkbox-button v-bind="properties"
                     v-model="model[field.key]"
                     :native-value="nativeValue">
    <b-icon v-if="to.icon" :icon="to.icon"></b-icon>
    <span>{{ label }}</span>
  </b-checkbox-button>
</template>

<script>
  /**
   * Permits the user to make a binary choice.
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbCheckboxButton',
    mixins: [BaseFormlyFieldMixin, SelectricFieldMixin],
    data () {
      return {
        canWrapChildNodes: true
      }
    },
    computed: {
      label () {
        return this.getTemplateOption('label', this.to.toString())
      },
      nativeValue () {
        return this.getTemplateOption('properties/native-value', this.label)
      }
    }
  }
</script>
