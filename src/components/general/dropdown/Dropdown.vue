<template>
  <b-dropdown v-bind="properties">
    <vfb-button class="button"
                slot="trigger"
                v-bind="button">
    </vfb-button>
    <vfb-dropdown-option v-for="(option, index) in options"
                         v-bind="option"
                         v-bind:key="index">
    </vfb-dropdown-option>
  </b-dropdown>
</template>

<script>
  import VfbButton from '../button/Button.vue'
  import VfbDropdownOption from './DropdownOption.vue'
  export default {
    props: {
      button: Object,
      options: Array,
      properties: {
        type: Object,
        default: {}
      }
    },
    components: {
      VfbButton,
      VfbDropdownOption
    }
  }
</script>
