<template>
  <section>
    <b-field v-bind="wrapper">
      <b-upload v-bind="extendedProperties"
                v-model="model[field.key]"
                @input="handleInputEvent">
        <section class="section">
          <div class="content has-text-centered">
            <p><b-icon v-bind="icon"></b-icon></p>
            <p v-text="label"></p>
          </div>
        </section>
      </b-upload>
    </b-field>
    <div class="tags">
      <span v-for="(file, index) in _model"
            v-bind:key="index"
            v-bind="tag"
            class="tag">
        {{ file.name }}
        <button class="delete"
                type="button"
                @click="deleteDropFile(index)">
        </button>
      </span>
    </div>
  </section>
</template>

<script>
  /**
   * Implements a file uploader field (with drag and drop abilities)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import UploadFieldMixin from 'src/mixins/upload-field.mixin'

  export default {
    name: 'vfbDragDrop',
    mixins: [BaseFormlyFieldMixin, UploadFieldMixin],
    data () {
      return {
        tag: this.getTemplateOption('tag', {})
      }
    },
    computed: {
      extendedProperties () {
        return Object.assign({}, this.properties, {
          'drag-drop': true
        })
      }
    },
    methods: {
      deleteDropFile(index) {
        this.model[this.field.key].splice(index, 1)
      }
    }
  }
</script>
