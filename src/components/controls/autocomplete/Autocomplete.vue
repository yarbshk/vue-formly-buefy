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
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'
  import FilterableControlMixin from '@/mixins/controls/filterable'

  export default {
    name: 'vfbAutocomplete',
    mixins: [BaseControlMixin, RequirableControlMixin, FilterableControlMixin],
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
