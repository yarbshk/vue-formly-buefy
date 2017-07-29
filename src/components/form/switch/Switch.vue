<template>
  <b-switch v-bind="properties"
            v-model="model[field.key]"
            @change="handleChangeEvent">
    {{ label }}
  </b-switch>
</template>

<script>
  /**
   * Implements usual input field of type text (including textarea)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
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
