<template>
  <b-checkbox-button v-bind="properties"
                     v-model="model[field.key]"
                     :native-value="nativeValue">
    <b-icon v-if="to.hasOwnProperty('icon')" :icon="to.icon"></b-icon>
    <span>{{ to.label }}</span>
  </b-checkbox-button>
</template>

<script>
  /**
   * Permits the user to make a binary choice.
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'
  import SelectableControlMixin from '@/mixins/controls/selectable'

  export default {
    name: 'vfbCheckboxButton',
    mixins: [BaseControlMixin, RequirableControlMixin, SelectableControlMixin]
  }
</script>
