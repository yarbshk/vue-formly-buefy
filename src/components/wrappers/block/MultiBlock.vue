<template>
  <div class="block" v-bind="properties">
    <component v-for="(option, index) in to.options"
               :key="index"
               :is="wrappedComponent"
               :form.sync="form"
               :model="model"
               :field="field"
               :to="option">
    </component>
  </div>
</template>

<script>
  /**
   * The wrapper for components with multiple children (e.g. CheckboxButton, Radio).
   */
  import BaseFormlyWrapperMixin from '@/mixins/base-formly-wrapper'

  export default {
    mixins: [BaseFormlyWrapperMixin],
    computed: {
      properties () {
        return this.getTemplateOption('wrapper/properties', {})
      }
    }
  }
</script>
