<template>
  <vfb-field :controls="wrapperControls" :properties="extendedWrapperProperties">
    <component v-bind:is="extendedWrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="to">
    </component>
  </vfb-field>
</template>

<script>
  /**
   * Implements a wrapper for Input, Select or Autocomplete form types.
   * This component add additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFieldWrapperMixin from 'src/mixins/base-field-wrapper.mixin'
  import WrappedFieldMixin from 'src/mixins/wrapped-field.mixin'
  import Field from './Field.vue'

  export default {
    mixins: [BaseFieldWrapperMixin],
    components: {
      'vfb-field': Field
    },
    data () {
      return {
        wrapperControls: this.getToValueOf('wrapper/controls', {}),
        wrapperProperties: this.getToValueOf('wrapper/properties', {})
      }
    },
    computed: {
      extendedWrapperProperties () {
        let [type, message] = this.getValidationState()
        return Object.assign({}, this.wrapperProperties, {
          type: type,
          message: message
        })
      },
      extendedWrappedComponent () {
        /**
         * Forced to extend a wrapped component to mask it under the Field.
         * Input and Select components check parent $data option
         * for extending own functionality. The structure of the wrapper
         * doesn't allow communication between parent and children directly
         * (because contains intermediate component), therefore it's
         * necessary to transfer parent options for children manually.
         */
        return {
          extends: this.wrappedComponent,
          mixins: [WrappedFieldMixin]
        }
      }
    }
  }
</script>
