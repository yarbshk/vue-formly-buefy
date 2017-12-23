<template>
  <div class="block">
    <b-radio v-for="(option, index) in options"
             v-bind="option.properties"
             v-model="model[field.key]"
             :key="index"
             :native-value="getOptionAttr(option, 'value', option.text)"
             @input="handleInputEvent">
      {{ getOptionAttr(option, 'text') }}
    </b-radio>
  </div>
</template>

<script>
  /**
   * Select an option from a set.
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
