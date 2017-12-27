<template>
  <a class="button" v-bind="properties">
    <span>{{ label }}</span>
    <b-icon v-if="icon" :icon="icon"></b-icon>
  </a>
</template>

<script>
  import ButtonControlMixin from '@/mixins/controls/button'

  export default {
    name: 'vfbButtonLink',
    mixins: [ButtonControlMixin]
  }
</script>
