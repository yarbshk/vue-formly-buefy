<template>
  <b-radio-group v-model="model[field.key]"
                 v-bind="properties"
                 @change="handleChangeEvent">
    <b-radio v-for="(option, index) in options"
             v-bind:key="index"
             :value="getOptionAttr(option, 'value', option.text)"
             v-bind="option.properties">
      {{ getOptionAttr(option, 'text') }}
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
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    mixins: [BaseFormlyFieldMixin, SelectricFieldMixin],
    data () {
      return {
        canWrapChildren: true
      }
    }
  }
</script>
