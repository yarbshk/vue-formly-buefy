<template>
  <b-field v-bind="clearProperties">
    <vfb-control v-for="(control, index) in filterControls('before')"
                 :key="index"
                 :options="control.options"
                 :type="control.type">
    </vfb-control>
    <component v-for="(option, index) in to.options"
               :key="index"
               :is="wrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="option">
    </component>
    <vfb-control v-for="(control, index) in filterControls('after')"
                 :key="index"
                 :options="control.options"
                 :type="control.type">
    </vfb-control>
  </b-field>
</template>

<script>
  /**
   * The wrapper for components with multiple children (e.g. CheckboxButton, Radio).
   * Add additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import FieldWrapperMixin from '@/mixins/wrappers/field'
  import VFBControl from './Control.vue'

  export default {
    name: 'vfbMultiFieldWrapper',
    mixins: [FieldWrapperMixin],
    components: {
      [VFBControl.name]: VFBControl
    }
  }
</script>
