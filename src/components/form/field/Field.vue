<template>
  <b-field v-bind="extendedProperties">
    <template v-if="controls.hasOwnProperty('before')">
      <vfb-control v-for="(control, index) in controls.before"
                   :key="index"
                   :options="control.options"
                   :type="control.type">
      </vfb-control>
    </template>
    <component :is="wrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="to">
    </component>
    <template v-if="controls.hasOwnProperty('after')">
      <vfb-control v-for="(control, index) in controls.after"
                   :key="index"
                   :options="control.options"
                   :type="control.type">
      </vfb-control>
    </template>
  </b-field>
</template>

<script>
  /**
   * The wrapper for components with a single child.
   * Adds additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyWrapperMixin from 'src/mixins/base-formly-wrapper.mixin'
  import VFBControl from './Control.vue'

  export default {
    name: 'vfbFieldWrapper',
    mixins: [BaseFormlyWrapperMixin],
    components: {
      [VFBControl.name]: VFBControl
    },
    data () {
      return {
        controls: this.getTemplateOption('wrapper/controls', {}),
        properties: this.getTemplateOption('wrapper/properties', {})
      }
    },
    computed: {
      extendedProperties () {
        let [type, message] = this.getValidationState()
        return Object.assign({}, this.properties, { type, message })
      }
    },
    methods: {
      /**
       * Define the type and message properties for the field.
       */
      getValidationState () {
        if (!this._formField.$dirty) return [undefined, undefined]
        return Object.values(this._formErrors).filter(x => x).length
           ? ['is-danger', this.getErrorMessage()]
           : ['is-success', this.getTemplateOption('wrapper/properties/message')]
      }
    }
  }
</script>
