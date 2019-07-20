<template>
  <b-radio v-bind="properties"
           v-model="model[field.key]"
           :native-value="nativeValue"
           @input="handleInputEvent">
    {{ to.label }}
  </b-radio>
</template>

<script>
  /**
   * Select an option from a set.
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'
  import SelectableControlMixin from '@/mixins/controls/selectable'

  export default {
    name: 'vfbRadio',
    mixins: [BaseControlMixin, RequirableControlMixin, SelectableControlMixin],
    data () {
      return {
        canWrapChildNodes: true
      }
    }
  }
</script>
