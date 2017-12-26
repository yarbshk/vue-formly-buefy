<template>
  <b-datepicker v-bind="properties"
                v-model="modelValue"
                @blur="onBlur"
                @focus="onFocus"
                @input.native="handleInputNativeEvent">
  </b-datepicker>
</template>

<script>
  /**
   * An input with a simple dropdown/modal for selecting a date, 
   * uses native datepicker for mobile.
   * {@link https://buefy.github.io/#/documentation/datepicker}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    name: 'vfbDatepicker',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin],
    computed: {
      // It's important to set initial value to null when no option selected,
      // because the placeholder is not visible when the value different from null
      modelValue: {
        get () {
          return this._model || null
        },
        set (newValue) {
          this.model[this.field.key] = newValue || ''
        }
      },
    },
    methods: {
      handleInputNativeEvent (event) {
        const date = new Date(event.target.value)
        if (!date.getTime()) this.modelValue = null
      }
    }
  }
</script>
