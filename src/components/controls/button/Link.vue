<template>
  <a class="button" v-bind="properties">
    <b-icon v-if="icon" :icon="icon"></b-icon>
    <span>{{ label }}</span>
  </a>
</template>

<script>
  import ButtonControlMixin from '@/mixins/controls/button'

  export default {
    name: 'vfbButtonLink',
    mixins: [ButtonControlMixin]
  }
</script>
