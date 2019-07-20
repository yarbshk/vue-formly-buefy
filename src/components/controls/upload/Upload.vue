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
  import BaseControlMixin from '@/mixins/base-control'

  export default {
    name: 'vfbUpload',
    mixins: [BaseControlMixin],
    computed: {
      button () {
        return this.getTemplateOption('button', {})
      }
    }
  }
</script>
