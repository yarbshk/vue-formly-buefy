<template>
  <b-taglist v-bind="properties">
    <b-tag v-for="(file, index) in files"
           v-bind="tag.properties"
           :key="index"
           @close="dropFile(index)">
      {{ file.name }}
    </b-tag>
  </b-taglist>
</template>

<script>
  export default {
    name: 'vfbUploadList',
    props: {
      tag: {
        type: Object,
        default: () => ({})
      },
      properties: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      /**
       * Search for the upload component to be able to modify model.
       */
      files () {
        const children = this.$parent.$parent.$children.filter((child) => {
          return child.$vnode.tag.match(/vue-component-\d+-vfbUpload/)
        })
        return children.length ? children[0]._model : []
      }
    },
    methods: {
      dropFile (index) {
        this.files.splice(index, 1)
      }
    }
  }
</script>

