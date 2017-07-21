<template>
  <wrapper :is-wrapped="isWrapped" :properties="wrapperProperties">
    <b-switch v-bind="properties"
              v-model="model[field.key]"
              @change="handleChangeEvent">
    </b-switch>
  </wrapper>
</template>

<script>
  /**
   * Implements usual input field of type text (including textarea)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import WrappedFormlyFieldMixin from '../../mixins/wrapped-formly-field.mixin'

  export default {
    mixins: [WrappedFormlyFieldMixin]
  }
</script>