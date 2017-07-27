<template>
  <b-radio-group v-model="model[field.key]"
                 v-bind="properties"
                 @change="handleChangeEvent">
    <b-radio-button v-for="(option, index) in options"
                    v-bind:key="index"
                    :value="option.value"
                    v-bind="option.properties">
      <b-icon v-if="option.icon" :icon="option.icon"></b-icon>
      <span v-text="option.text"></span>
    </b-radio-button>
  </b-radio-group>
</template>

<script>
  /**
   * Implements a radio group of radio button fields.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import BaseFieldMixin from 'src/mixins/base-field.mixin'

  export default {
    mixins: [BaseFieldMixin],
    data () {
      return {
        options: this.getFieldValueOf('options', [])
      }
    }
  }
</script>
