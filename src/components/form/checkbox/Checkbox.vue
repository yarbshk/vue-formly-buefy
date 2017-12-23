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

  export default {
    name: 'vfbCheckbox',
    mixins: [BaseFormlyFieldMixin],
    computed: {
      label () {
        return this.getTemplateOption('label', this._model.toString())
      }
    }
  }
</script>
