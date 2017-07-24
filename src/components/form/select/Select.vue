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
   * Implements a usual select field (a dropdown list with options)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/select}
   */
  import WrappedFormlyFieldMixin from 'src/mixins/wrapped-formly-field.mixin'

  export default {
    mixins: [WrappedFormlyFieldMixin],
    data: () => ({
      templateTypes: {
        PLAIN: 'plain',
        COMBINED: 'combined'
      }
    }),
    computed: {
      options () {
        return this.getFieldValueOf('options', [])
      },
      templateType () {
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
