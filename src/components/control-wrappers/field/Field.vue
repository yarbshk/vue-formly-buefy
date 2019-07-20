<template>
  <b-field v-bind="clearProperties">
    <vfb-control v-for="(control, index) in filterControls('before')"
                 :key="index"
                 :options="control.options"
                 :type="control.type">
    </vfb-control>
    <component :is="wrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="to">
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
   * The wrapper for components with a single child.
   * Adds additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import WrappableControlWrapperMixin from '@/mixins/control-wrappers/wrappable'
  import VFBControl from '@/components/control-sidecars/control'

  export default {
    name: 'vfbFieldWrapper',
    mixins: [WrappableControlWrapperMixin],
    components: {
      [VFBControl.name]: VFBControl
    }
  }
</script>
