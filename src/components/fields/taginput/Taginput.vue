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
   * A simple tag input field that can have autocomplete functionality.
   * {@link https://buefy.github.io/#/documentation/taginput}
   */
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'
  import FilteredFieldMixin from '@/mixins/fields/filtered'
  import RequiredFieldMixin from '@/mixins/fields/required'

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
