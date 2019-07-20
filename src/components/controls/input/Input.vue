<template>
  <b-input v-bind="properties"
           v-model="model[field.key]"
           @blur="handleBlurEvent"
           @focus="handleFocusEvent"
           @input="handleInputEvent">
  </b-input>
</template>

<script>
  /**
   * Get user Input.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'

  export default {
    name: 'vfbInput',
    mixins: [BaseControlMixin, RequirableControlMixin]
  }
</script>
