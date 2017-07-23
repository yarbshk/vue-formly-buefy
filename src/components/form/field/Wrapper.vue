<template>
  <vfb-field :controls="fieldControls" :properties="fieldProperties">
    <component v-bind:is="wrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="to">
    </component>
  </vfb-field>
</template>

<script>
  import WrappedFormlyFieldMixin from 'src/mixins/wrapped-formly-field.mixin'
  import Field from './Field.vue'

  export default {
    mixins: [WrappedFormlyFieldMixin],
    components: {
      'vfb-field': Field
    },
    computed: {
      fieldControls () {
        return this.getToValueOf('field/controls', {})
      },
      fieldProperties () {
        const properties = this.getToValueOf('field/properties', {})
        // Forced use Standard JS style to avoid interpreter's errors
        ;[properties['type'], properties['message']] = this.getValidationState()
        return properties
      }
    }
  }
</script>
