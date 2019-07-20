<template>
  <a class="button" v-bind="properties">
    <b-icon v-if="icon" :icon="icon"></b-icon>
    <span>{{ label }}</span>
  </a>
</template>

<script>
  import ClickableControlSidecarMixin from '@/mixins/control-sidecars/clickable'

  export default {
    name: 'vfbLink',
    mixins: [ClickableControlSidecarMixin]
  }
</script>
