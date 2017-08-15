<template>
  <b-field v-bind="wrapper">
    <b-upload v-bind="extendedProperties"
              v-model="model[field.key]"
              @input="handleInputEvent">
      <a :class="['button', type]">
        <b-icon v-if="Object.keys(icon).length" v-bind="icon"></b-icon>
        <span v-text="label"></span>
      </a>
    </b-upload>
    <div v-if="_model && _model.length">
      <span class="file-name" v-text="_model[0].name"></span>
    </div>
  </b-field>
</template>

<script>
  /**
   * Implements a file uploader field (without drag and drop abilities)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import UploadFieldMixin from 'src/mixins/upload-field.mixin'

  export default {
    mixins: [BaseFormlyFieldMixin, UploadFieldMixin],
    data () {
      return {
        type: this.getToValueOf('type', 'is-primary')
      }
    },
    computed: {
      extendedProperties () {
        return Object.assign({}, this.properties, {
          'drag-drop': false
        })
      }
    }
  }
</script>
