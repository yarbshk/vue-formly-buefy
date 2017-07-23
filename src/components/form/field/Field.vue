<template>
  <b-field v-bind="properties">
    <vfb-control v-if="controls.hasOwnProperty('before')"
                 v-for="(control, index) in controls.before"
                 :config="control"
                 v-bind:key="index">
    </vfb-control>
    <slot></slot>
    <vfb-control v-if="controls.hasOwnProperty('after')"
                 v-for="(control, index) in controls.after"
                 :config="control"
                 v-bind:key="index">
    </vfb-control>
  </b-field>
</template>

<script>
  /**
   * Implements a wrapper for Input, Select or Autocomplete form types.
   * This component add additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import VfbControl from './Control.vue'

  export default {
    props: {
      controls: {
        type: Object,
        default: () => ({})
      },
      properties: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      VfbControl
    }
  }
</script>
