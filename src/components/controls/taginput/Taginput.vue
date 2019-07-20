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
  import BaseControlMixin from '@/mixins/base-control'
  import RequirableControlMixin from '@/mixins/controls/requirable'
  import FilterableControlMixin from '@/mixins/controls/filterable'

  export default {
    name: 'vfbTaginput',
    mixins: [BaseControlMixin, RequirableControlMixin, FilterableControlMixin],
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
