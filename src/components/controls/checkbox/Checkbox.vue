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
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'
  import SelectableControlMixin from '@/mixins/controls/selectable'

  export default {
    name: 'vfbCheckbox',
    mixins: [BaseControlMixin, RequirableControlMixin, SelectableControlMixin],
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
