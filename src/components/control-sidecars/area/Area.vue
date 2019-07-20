<template>
  <section class="section">
    <div class="content has-text-centered">
      <p><b-icon :icon="icon" :size="size"></b-icon></p>
      <p>{{ label }}</p>
    </div>
  </section>
</template>

<script>
  export default {
      name: 'vfbArea',
      props: {
        label: String,
        icon: {
          type: String,
          default: 'upload'
        },
        size: {
          type: String,
          default: 'is-large'
        }
      }
    }
</script>

