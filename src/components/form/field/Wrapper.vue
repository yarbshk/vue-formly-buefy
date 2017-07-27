<template>
  <vfb-field :controls="controls" :properties="fieldProperties">
    <component v-bind:is="wrappedComponent"
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
  import Field from './Field.vue'

  export default {
    mixins: [BaseFieldWrapperMixin],
    components: {
      'vfb-field': Field
    },
    data () {
      return {
        controls: this.getToValueOf('field/controls', {}),
        properties: this.getToValueOf('field/properties', {})
      }
    },
    computed: {
      fieldProperties () {
        [this.properties['type'],
          this.properties['message']] = this.getValidationState()
        return this.properties
      }
    }
  }
</script>
