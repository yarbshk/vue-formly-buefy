<template>
  <b-checkbox v-model="model[field.key]"
              v-bind="properties"
              @change="handleChangeEvent">
    {{ label }}
  </b-checkbox>
</template>

<script>
  /**
   * Implements a checkbox field.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseFieldMixin from 'src/mixins/base-field.mixin'

  export default {
    mixins: [BaseFieldMixin],
    data () {
      return {
        label: this.getToValueOf('label', this._model.toString())
      }
    }
  }
</script>
