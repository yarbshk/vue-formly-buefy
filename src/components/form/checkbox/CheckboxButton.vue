<template>
  <div class="field has-addons">
    <b-checkbox-button v-for="(option, index) in options"
                       v-bind="Object.assign({}, option.properties, properties)"
                       v-model="model[field.key]"
                       :key="index"
                       :native-value="getOptionAttr(option, 'value', option.text)">
      <b-icon v-if="option.icon" :icon="option.icon"></b-icon>
      <span>{{ getOptionAttr(option, 'text') }}</span>
    </b-checkbox-button>
  </div>
</template>

<script>
  /**
   * Permits the user to make a binary choice.
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    name: 'vfbCheckboxButton',
    mixins: [BaseFormlyFieldMixin, SelectricFieldMixin]
  }
</script>
