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
   * Implements an autocomplete field (input with select).
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/autocomplete}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin],
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
        if (typeof option === 'object') {
          const path = this.getToValueOf('properties/field', '')
          path.split('.').forEach(cell => option = option[cell])
        }
        return option
          .toString()
          .toLowerCase()
          .indexOf(this._model.toLowerCase()) !== -1
      }
    }
  }
</script>
