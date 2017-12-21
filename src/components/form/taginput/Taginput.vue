<template>
  <b-taginput v-bind="properties"
              v-model="model[field.key]"
              :data="filteredData"
              @blur="onBlur"
              @focus="onFocus"
              @add="handleAddEvent"
              @input="handleInputEvent"
              @remove="handleRemoveEvent"
              @typing="handleTypingEvent">
  </b-taginput>
</template>

<script>
  /**
   * Implements an taginput field.
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/taginput}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import FilteredFieldMixin from 'src/mixins/filtered-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    name: 'vfbTaginput',
    mixins: [BaseFormlyFieldMixin, FilteredFieldMixin, RequiredFieldMixin],
    methods: {
      handleTypingEvent (...args) {
        this.getFilteredData(args[0])
        this.callCustomEventHandler('typing', args)
      },
      handleAddEvent (...args) {
        this.callCustomEventHandler('add', args)
      },
      handleRemoveEvent (...args) {
        this.callCustomEventHandler('remove', args)
      }
    }
  }
</script>
