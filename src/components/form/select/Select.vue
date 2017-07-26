<template>
  <b-select v-bind="properties"
            v-model="model[field.key]"
            @blur="handleBlurEvent"
            @focus="handleFocusEvent"
            @change="handleChangeEvent">
    <template v-if="options.length">
      <!-- Render an optgroup select -->
      <template v-if="templateType === templateTypes.COMBINED">
        <optgroup v-for="(optgroup, i) in options"
                  v-bind:key="i"
                  :label="optgroup.label">
          <option v-for="(option, j) in optgroup.options"
                  v-bind:key="j"
                  v-text="typeof option == 'object' ? option.text : option"
                  :value="typeof option == 'object' ? option.value : option">
          </option>
        </optgroup>
      </template>
      <!-- Render an options select -->
      <template v-else>
        <option v-for="(option, i) in options"
                v-bind:key="i"
                v-text="typeof option == 'object' ? option.text : option"
                :value="typeof option == 'object' ? option.value : option">
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

  export default {
    mixins: [BaseFormlyFieldMixin],
    data () {
      return {
        options: this.getFieldValueOf('options', []),
        templateTypes: {
          PLAIN: 'plain',
          COMBINED: 'combined'
        }
      }
    },
    computed: {
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
    }
  }
</script>
