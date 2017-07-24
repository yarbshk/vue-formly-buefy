<template>
  <b-field v-bind="properties">
    <vfb-control v-if="controls.hasOwnProperty('before')"
                 v-for="(control, index) in controls.before"
                 :type="control.type"
                 :options="control.options"
                 v-bind:key="index">
    </vfb-control>
    <slot></slot>
    <vfb-control v-if="controls.hasOwnProperty('after')"
                 v-for="(control, index) in controls.after"
                 :type="control.type"
                 :options="control.options"
                 v-bind:key="index">
    </vfb-control>
  </b-field>
</template>

<script>
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
