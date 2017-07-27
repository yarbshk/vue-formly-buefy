<template>
  <b-autocomplete v-bind="properties"
                  v-model="model[field.key]"
                  :data="filteredData"
                  @blur="handleBlurEvent"
                  @focus="handleFocusEvent"
                  @input="handleInputEvent"
                  @select="handleSelectEvent">
  </b-autocomplete>
</template>

<script>
  /**
   * Implements an autocomplete field (input with select).
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/autocomplete}
   */
  import BaseFieldMixin from 'src/mixins/base-field.mixin'

  export default {
    mixins: [BaseFieldMixin],
    data () {
      return {
        data: this.getToValueOf('data', [])
      }
    },
    computed: {
      filteredData () {
        const customFilter = this.getToValueOf('filter')
        return this.data.filter(customFilter || this.defaultFilter)
      }
    },
    methods: {
      defaultFilter (option) {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this._model.toLowerCase()) !== -1
      }
    }
  }
</script>
