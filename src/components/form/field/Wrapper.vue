<template>
  <vfb-field :controls="controls" :properties="extendedProperties">
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
  import BaseFormlyWrapperMixin from 'src/mixins/base-formly-wrapper.mixin'
  import WrappedFieldMixin from 'src/mixins/wrapped-field.mixin'
  import Field from './Field.vue'

  export default {
    mixins: [BaseFormlyWrapperMixin],
    components: {
      'vfb-field': Field
    },
    data () {
      return {
        controls: this.getToValueOf('wrapper/controls', {}),
        properties: this.getToValueOf('wrapper/properties', {})
      }
    },
    computed: {
      extendedProperties () {
        let [type, message] = this.getValidationState()
        return Object.assign({}, this.properties, {
          type: type,
          message: message
        })
      },
      /**
       * Forced to extend a wrapped component to mask it under the Field.
       * Input and Select components check parent $data option
       * for extending own functionality. The structure of the wrapper
       * doesn't allow communication between parent and children directly
       * (because contains intermediate component), therefore it's
       * necessary to transfer parent options for children manually.
       */
      extendedWrappedComponent () {
        return {
          extends: this.wrappedComponent,
          mixins: [WrappedFieldMixin]
        }
      }
    },
    methods: {
      /**
       * Define type and message properties for a Buefy field component.
       * It's necessary condition of a Formly form validation rules.
       */
      getValidationState () {
        let type, message
        if (!this._active && this._dirty) {
          if (Object.values(this._errors).filter(x => x).length) {
            type = 'is-danger'
            message = this.getErrorMessage()
          } else {
            type = 'is-success'
            message = this.getToValueOf('wrapper/properties/message')
          }
        }
        return [type, message]
      }
    }
  }
</script>
