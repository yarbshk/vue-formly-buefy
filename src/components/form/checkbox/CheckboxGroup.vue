<template>
  <b-checkbox-group v-model="model[field.key]"
                    v-bind="properties"
                    @change="handleChangeEvent">
    <b-checkbox v-for="(option, index) in options"
                v-bind:key="index"
                :custom-value="getOptionAttr(option, 'value', option.text)"
                v-bind="option.properties">
      {{ getOptionAttr(option, 'text') }}
    </b-checkbox>
  </b-checkbox-group>
</template>

<script>
  /**
   * Implements a checkbox group to combine multiple checkboxes with one model.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/checkbox}
   */
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

  export default {
    mixins: [SelectricFieldMixin],
    data () {
      return {
        canWrapChildren: true
      }
    }
  }
</script>
