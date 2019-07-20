<template>
  <b-radio-button v-bind="properties"
                  v-model="model[field.key]"
                  :native-value="nativeValue">
    <b-icon v-if="to.icon" :icon="to.icon"></b-icon>
    <span>{{ to.label }}</span>
  </b-radio-button>
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
    name: 'vfbRadioButton',
    mixins: [BaseControlMixin, RequirableControlMixin, SelectableControlMixin]
  }
</script>
