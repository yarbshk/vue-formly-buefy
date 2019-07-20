<template>
  <b-timepicker v-bind="properties"
                v-model="model[field.key]"
                @blur="onBlur"
                @focus="onFocus">
  </b-timepicker>
</template>

<script>
  /**
   * An input with a simple dropdown/modal for selecting a time,
   * uses native timepicker for mobile.
   * {@link https://buefy.github.io/#/documentation/timepicker}
   */
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'

  export default {
    name: 'vfbTimepicker',
    mixins: [BaseControlMixin, RequirableControlMixin]
  }
</script>
