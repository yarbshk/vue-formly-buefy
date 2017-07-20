<template>
  <b-field :type="getToValueOf('properties/type')"
           :label="getToValueOf('properties/label')"
           :message="getToValueOf('properties/message')"
           :grouped="getToValueOf('properties/grouped', false)"
           :position="getToValueOf('properties/position', 'is-left')"
  ></b-field>
</template>

<script>
  /**
   * Implements a wrapper for input, select and autocomplete fields
   * Look at API section (the link below) for the reference
   * https://buefy.github.io/#/documentation/field
   */
  import BaseFormlyMixin from '../../mixins/base-formly.mixin'

  export default {
    mixins: [BaseFormlyMixin]
  }
</script>
