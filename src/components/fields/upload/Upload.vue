<template>
  <b-upload v-bind="properties"
            v-model="model[field.key]"
            @input="handleInputEvent">
    <component :is="button.type" v-bind="button.options"></component>
  </b-upload>
</template>

<script>
  /**
   * Upload one or more files.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'

  export default {
    name: 'vfbUpload',
    mixins: [BaseFormlyFieldMixin],
    computed: {
      button () {
        return this.getTemplateOption('button', {})
      }
    }
  }
</script>
