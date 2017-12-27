<template>
  <button class="button" v-bind="properties">
    <span>{{ label }}</span>
    <b-icon v-if="icon" :icon="icon"></b-icon>
  </button>
</template>

<script>
  import ButtonControlMixin from '@/mixins/controls/button'

  export default {
    name: 'vfbButtonDefault',
    mixins: [ButtonControlMixin]
  }
</script>
