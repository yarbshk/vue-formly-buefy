<template>
  <b-input :v-model="getFieldValueOf('properties/vModel')"
           :type="getFieldValueOf('properties/type', 'text')"
           :size="getFieldValueOf('properties/size')"
           :expanded="getFieldValueOf('properties/expanded', false)"
           :password-reveal="getFieldValueOf('properties/passwordReveal', false)"
           :loading="getFieldValueOf('properties/loading', false)"
           :icon="getFieldValueOf('properties/icon')"
           :icon-pack="getFieldValueOf('properties/iconPack', 'mdi')"
           :autocomplete="getFieldValueOf('properties/autocomplete', 'on')"
           :required="getFieldValueOf('properties/required', false)"
           :disabled="getFieldValueOf('properties/disabled', false)"
           :readonly="getFieldValueOf('properties/readonly', false)"
           :min="getFieldValueOf('properties/min')"
           :max="getFieldValueOf('properties/max')"
           :step="getFieldValueOf('properties/step')"
           :minlength="getFieldValueOf('properties/minlength')"
           :maxlength="getFieldValueOf('properties/maxlength')"
           :name="getFieldValueOf('properties/name')"
           :pattern="getFieldValueOf('properties/pattern')"
           :placeholder="getFieldValueOf('properties/placeholder')"
           :rows="getFieldValueOf('properties/rows')"
           @blur="handleEvent('events/onBlur')"
           @focus="handleEvent('events/onFocus')"
           @change="handleEvent('events/onChange')"
  ></b-input>
</template>

<script>
  /**
   * Implements usual input field of type text (including textarea)
   * Look at API section (the link below) for the reference
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import BuefyFormFieldMixin from '../../mixins/buefy-form-field.mixin'

  export default {
    mixins: [BuefyFormFieldMixin]
  }
</script>