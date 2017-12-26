<template>
  <b-checkbox v-bind="properties"
              v-model="model[field.key]"
              @input="handleInputEvent">
    {{ label }}
  </b-checkbox>
</template>

<script>
  /**
   * Permits the user to make a binary choice (also accept grouping).
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbCheckbox',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin, SelectricFieldMixin],
    data () {
      return {
        canWrapChildNodes: true
      }
    },
    computed: {
      label () {
        return this.getTemplateOption('label', this._model.toString())
      }
    }
  }
</script>
