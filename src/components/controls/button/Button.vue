<template>
  <button class="button" v-bind="properties">
    <b-icon v-if="icon" :icon="icon"></b-icon>
    <span>{{ label }}</span>
  </button>
</template>

<script>
  import ButtonControlMixin from '@/mixins/controls/button'

  export default {
    name: 'vfbButtonDefault',
    mixins: [ButtonControlMixin]
  }
</script>
