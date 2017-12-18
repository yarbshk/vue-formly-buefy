<template>
  <div v-bind="properties">
    <b-radio v-for="(option, index) in options"
             v-bind:key="index"
             v-bind="option.properties"
             v-model="model[field.key]"
             :native-value="getOptionAttr(option, 'value', option.text)"
             @input="handleInputEvent">
      {{ getOptionAttr(option, 'text') }}
    </b-radio>
  </div>
</template>

<script>
  /**
   * Implements a radio group of radio fields.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbRadio',
    mixins: [BaseFormlyFieldMixin, SelectricFieldMixin],
    data () {
      return {
        canWrapChildren: true
      }
    }
  }
</script>
