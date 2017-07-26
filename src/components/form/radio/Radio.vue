<template>
  <b-radio-group v-model="model[field.key]"
                 v-bind="properties"
                 @change="handleChangeEvent">
    <b-radio v-for="(option, index) in options"
             v-bind:key="index"
             v-text="option.text"
             :value="option.value"
             v-bind="option.properties">
    </b-radio>
  </b-radio-group>
</template>

<script>
  /**
   * Implements a radio group of radio fields.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import { wrapElement } from 'src/utils'

  export default {
    mixins: [BaseFormlyFieldMixin],
    data () {
      return {
        options: this.getFieldValueOf('options', [])
      }
    },
    mounted () {
      // Wrap child nodes of a radio group when wrapper exists
      const wrapper = this.getFieldValueOf('childWrapper')
      if (typeof wrapper === 'object') {
        this.$el.childNodes.forEach(node => wrapElement(node, wrapper))
      }
    }
  }
</script>
