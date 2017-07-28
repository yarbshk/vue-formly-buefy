<template>
  <b-radio-group v-model="model[field.key]"
                 v-bind="properties"
                 @change="handleChangeEvent">
    <b-radio-button v-for="(option, index) in options"
                    v-bind:key="index"
                    :value="getOptionAttr(option, 'value', option.text)"
                    v-bind="option.properties">
      <b-icon v-if="option.icon" :icon="option.icon"></b-icon>
      {{ getOptionAttr(option, 'text') }}
    </b-radio-button>
  </b-radio-group>
</template>

<script>
  /**
   * Implements a radio group of radio button fields.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/radio}
   */
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    mixins: [SelectricFieldMixin]
  }
</script>
