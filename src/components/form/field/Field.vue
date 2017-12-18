<template>
  <b-field v-bind="extendedProperties">
    <template v-if="controls.hasOwnProperty('before')">
      <vfb-control v-for="(control, index) in controls.before"
                  :type="control.type"
                  :options="control.options"
                  v-bind:key="index">
      </vfb-control>
    </template>
    <component v-bind:is="wrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="to">
    </component>
    <template v-if="controls.hasOwnProperty('after')">
      <vfb-control v-for="(control, index) in controls.after"
                  :type="control.type"
                  :options="control.options"
                  v-bind:key="index">
      </vfb-control>
    </template>
  </b-field>
</template>

<script>
  /**
   * Implements a wrapper for Input, Select or Autocomplete form types.
   * This component add additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyWrapperMixin from 'src/mixins/base-formly-wrapper.mixin'
  import VfbControl from './Control.vue'

  export default {
    name: 'vfbFieldWrapper',
    mixins: [BaseFormlyWrapperMixin],
    components: {
      [VfbControl.name]: VfbControl
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
      }
    },
    methods: {
      /**
       * Define type and message properties for a Buefy field component.
       * It's necessary condition of a Formly form validation rules.
       */
      getValidationState () {
        if (!this._dirty) return [undefined, undefined]
        return Object.values(this._errors).filter(x => x).length
           ? ['is-danger', this.getErrorMessage()]
           : ['is-success', this.getToValueOf('wrapper/properties/message')]
      }
    }
  }
</script>
