<template>
  <b-field v-bind="properties">
    <b-radio-button v-for="(option, index) in options"
                    v-bind:key="index"
                    v-bind="option.properties"
                    v-model="model[field.key]"
                    :native-value="getOptionAttr(option, 'value', option.text)">
      <b-icon v-if="option.icon" :icon="option.icon"></b-icon>
      <span v-text="getOptionAttr(option, 'text')"></span>
    </b-radio-button>
  </b-field>
</template>

<script>
  /**
   * Implements a radio group of radio button fields.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbRadioButton',
    mixins: [BaseFormlyFieldMixin, SelectricFieldMixin]
  }
</script>
