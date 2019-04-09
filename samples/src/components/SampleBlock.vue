<template>
  <div class="example" :id="id">
    <h2 class="title is-2">
      <span v-text="title"></span>
      <a :href="'#' + id" class="anchor-link" title="Get anchor link"><b-icon icon="link"></b-icon></a>
      <a :href="sourceLink" class="anchor-link" target="_blank" title="View sources"><b-icon icon="code-tags"></b-icon></a>
    </h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      id: String,
      sourceLink: String
    }
  }
</script>
