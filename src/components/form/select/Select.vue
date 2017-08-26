<template>
  <b-select v-bind="properties"
            v-model="modelValue"
            @blur="handleBlurEvent"
            @focus="handleFocusEvent"
            @input="handleInputEvent">
    <template v-if="options.length">
      <!-- Render an optgroup select -->
      <template v-if="templateType === templateTypes.COMBINED">
        <optgroup v-for="(optgroup, i) in options"
                  v-bind:key="i"
                  :label="optgroup.label">
          <option v-for="(option, j) in optgroup.options"
                  v-bind:key="j"
                  :value="getOptionAttr(option, 'value', option.text)">
            {{ getOptionAttr(option, 'text') }}
          </option>
        </optgroup>
      </template>
      <!-- Render an options select -->
      <template v-else>
        <option v-for="(option, index) in options"
                v-bind:key="index"
                :value="getOptionAttr(option, 'value', option.text)">
          {{ getOptionAttr(option, 'text') }}
        </option>
      </template>
    </template>
  </b-select>
</template>

<script>
  /**
   * Implements a select field (dropdown list with options).
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/select}
   */
  import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
  import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'
  import RequiredFieldMixin from 'src/mixins/required-field.mixin'

  export default {
    mixins: [BaseFormlyFieldMixin, SelectricFieldMixin, RequiredFieldMixin],
    data () {
      return {
        templateTypes: {
          PLAIN: 'plain',
          COMBINED: 'combined'
        }
      }
    },
    computed: {
      // It's necessary to set an initial value to null when no option selected,
      // because placeholder is not visible when value different from null
      modelValue: {
        get () {
          return this._model || null
        },
        set (newValue) {
          this.model[this.field.key] = newValue
        }
      },
      templateType () {
        /**
         * Define a template type for child nodes of a select.
         * Templates come in two types:
         * 1) plain - for options
         * 2) combined - for optgroups
         * Follow the link below for the usage guide
         * {@link https://011.vuejs.org/guide/forms.html#Dynamic_Select_Options}
         */
        if (this.options.length) {
          const obj = this.options[0]
          if ('label' in obj && 'options' in obj) {
            return this.templateTypes.COMBINED
          } else {
            return this.templateTypes.PLAIN
          }
        }
      }
    },
    watch: {
      /**
       * Manually set model value when stub value has been changed.
       */
      modelValue (value) {
        this.$set(this.model, this.field.key, value)
      }
    }
  }
</script>
