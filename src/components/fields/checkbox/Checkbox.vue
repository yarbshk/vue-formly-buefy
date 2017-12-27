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
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'
  import RequiredFieldMixin from '@/mixins/fields/required'
  import SelectricFieldMixin from '@/mixins/fields/selectric'

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
