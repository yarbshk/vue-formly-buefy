<template>
  <b-select v-bind="properties"
            v-model="value"
            @blur="handleBlurEvent"
            @focus="handleFocusEvent"
            @input="handleInputEvent">
    <template v-if="options.length">
      <!-- Render an optgroup select -->
      <template v-if="templateType === templateTypes.combined">
        <optgroup v-for="(optgroup, i) in options"
                  :key="i"
                  :label="optgroup.label">
          <option v-for="(option, j) in optgroup.options"
                  :key="j"
                  :value="getOptionAttr(option, 'value', option.text)">
            {{ getOptionAttr(option, 'text') }}
          </option>
        </optgroup>
      </template>
      <!-- Render an options select -->
      <template v-else>
        <option v-for="(option, index) in options"
                :key="index"
                :value="getOptionAttr(option, 'value', option.text)">
          {{ getOptionAttr(option, 'text') }}
        </option>
      </template>
    </template>
  </b-select>
</template>

<script>
  /**
   * Select an item in a dropdown list.
   * {@link https://buefy.github.io/#/documentation/select}
   */
  import BaseFormlyFieldMixin from '@/mixins/base-formly-field'
  import RequiredFieldMixin from '@/mixins/fields/required'
  import SelectricFieldMixin from '@/mixins/fields/selectric'

  const TEMPLATE_TYPES = {
    plain: 10,
    combined: 20
  }

  export default {
    name: 'vfbSelect',
    mixins: [BaseFormlyFieldMixin, RequiredFieldMixin, SelectricFieldMixin],
    data () {
      return {
        templateTypes: TEMPLATE_TYPES
      }
    },
    methods: {
      /**
       * Gets value from an option of the select widget.
       * This is a shortcut function.
       * @param {*} option
       * @param {String} key
       * @param {*} defaultVal
       */
      getOptionAttr (option, key, defaultVal = undefined) {
        return typeof option === 'object'
          ? key in option
            ? option[key]
            : defaultVal
          : option.toString()
      }
    },
    computed: {
      // It's necessary to set an initial value to null when no option selected,
      // because placeholder is not visible when value different from null
      value: {
        get () {
          return this._model || null
        },
        set (newValue) {
          this.model[this.field.key] = newValue
        }
      },
      options () {
        return this.getTemplateOption('options', [])
      },
      /**
       * Define a template type for the children of the component.
       * {@link https://011.vuejs.org/guide/forms.html#Dynamic_Select_Options}
       */
      templateType () {
        if (this.options.length) {
          const option = Object(this.options[0])
          return ('label' in option && 'options' in option)
            ? this.templateTypes.combined
            : this.templateTypes.plain
        }
      }
    }
  }
</script>
