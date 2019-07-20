<template>
  <b-switch v-bind="properties"
            v-model="model[field.key]"
            @input="handleInputEvent">
    {{ label }}
  </b-switch>
</template>

<script>
  /**
   * Switch between two opposing states.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseControlMixin from '@/mixins/base-control'

  export default {
    name: 'vfbSwitch',
    mixins: [BaseControlMixin],
    computed: {
      label () {
        return this.getTemplateOption('label', this._model.toString())
      }
    }
  }
</script>
