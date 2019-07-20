<template>
  <button class="button" v-bind="properties">
    <b-icon v-if="icon" :icon="icon"></b-icon>
    <span>{{ label }}</span>
  </button>
</template>

<script>
  import ClickableControlSidecarMixin from '@/mixins/control-sidecars/clickable'

  export default {
    name: 'vfbButton',
    mixins: [ClickableControlSidecarMixin]
  }
</script>
