<template>
  <wrapper :is-wrapped="isWrapped" :properties="wrapperProperties">
    <b-input v-bind="properties"
             v-model="model[field.key]"
             @blur="handleBlurEvent"
             @focus="handleFocusEvent"
             @change="handleChangeEvent">
    </b-input>
  </wrapper>
</template>

<script>
  /**
   * Implements usual input field of type text (including textarea)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import WrappedFormlyFieldMixin from '../../../mixins/wrapped-formly-field.mixin'

  export default {
    mixins: [WrappedFormlyFieldMixin]
  }
</script>