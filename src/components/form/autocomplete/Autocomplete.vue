<template>
  <b-autocomplete v-bind="properties"
                  v-model="model[field.key]"
                  :data="filteredData"
                  @blur="handleBlurEvent"
                  @focus="handleFocusEvent"
                  @input="handleInputEvent"
                  @selected="handleSelectedEvent">
  </b-autocomplete>
</template>

<script>
  /**
   * Extended input that provide suggestions while the user types.
   * {@link https://buefy.github.io/#/documentation/autocomplete}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import FilteredFieldMixin from 'src/mixins/filtered-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'
  
  export default {
    name: 'vfbAutocomplete',
    mixins: [BaseFormlyFieldMixin, FilteredFieldMixin, RequiredFieldMixin],
    methods: {
      handleInputEvent (...args) {
        this.getFilteredData(args[0])
        this.callCustomEventHandler('input', args)
      },
      handleSelectedEvent (...args) {
        this.callCustomEventHandler('selected', args)
      }
    }
  }
</script>
