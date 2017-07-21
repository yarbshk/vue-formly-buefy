<template>
  <wrapper :is-wrapped="isWrapped" :properties="wrapperProperties">
    <b-select v-bind="properties"
              v-model="model[field.key]"
              @blur="handleBlurEvent"
              @focus="handleFocusEvent"
              @change="handleChangeEvent">
    </b-select>
  </wrapper>
</template>

<script>
  /**
   * Implements usual select field (a dropdown list with options)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/select}
   */
  import WrappedFormlyFieldMixin from '../../mixins/wrapped-formly-field.mixin'

  export default {
    mixins: [WrappedFormlyFieldMixin]
  }
</script>