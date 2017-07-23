<template>
  <b-select v-bind="properties"
            v-model="model[field.key]"
            @blur="handleBlurEvent"
            @focus="handleFocusEvent"
            @change="handleChangeEvent">
    <!-- TODO: Add options listing -->
  </b-select>
</template>

<script>
  /**
   * Implements a usual select field (a dropdown list with options)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/select}
   */
  import WrappedFormlyFieldMixin from 'src/mixins/wrapped-formly-field.mixin'

  export default {
    mixins: [WrappedFormlyFieldMixin]
  }
</script>
