<template>
  <b-dropdown v-bind="properties">
    <vfb-button slot="trigger" :label="label" :icon="icon"></vfb-button>
    <vfb-dropdown-option v-for="(option, index) in options"
                         v-bind="option"
                         v-bind:key="index">
    </vfb-dropdown-option>
  </b-dropdown>
</template>

<script>
  import VfbButton from 'src/components/general/button/Button.vue'
  import VfbDropdownOption from './DropdownOption.vue'

  export default {
    props: {
      label: String,
      options: Array,
      icon: {
        type: String,
        default: 'arrow_drop_down'
      },
      properties: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      VfbButton,
      VfbDropdownOption
    }
  }
</script>
