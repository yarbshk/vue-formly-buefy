<template>
  <b-checkbox-group v-model="model[field.key]"
                    v-bind="properties"
                    @change="handleChangeEvent">
    <b-checkbox v-for="(option, index) in options"
                v-bind:key="index"
                v-text="option.text"
                :custom-value="option.value"
                v-bind="option.properties">
    </b-checkbox>
  </b-checkbox-group>
</template>

<script>
  /**
   * Implements a checkbox group to combine multiple checkboxes with one model.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseFieldMixin from 'src/mixins/base-field.mixin'
  import { wrapElement } from 'src/utils'

  export default {
    mixins: [BaseFieldMixin],
    data () {
      return {
        options: this.getFieldValueOf('options', [])
      }
    },
    mounted () {
      // Wrap child nodes of a checkbox group when wrapper exists
      const wrapper = this.getFieldValueOf('childWrapper')
      if (typeof wrapper === 'object') {
        this.$el.childNodes.forEach(node => wrapElement(node, wrapper))
      }
    }
  }
</script>
