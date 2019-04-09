<template>
  <div class="columns">
    <div class="column is-6">
      <div class="content">
        <slot></slot>
      </div>
      <form class="form is-sample" :action="action" :method="method">
        <formly-form :form="form" :model="model" :fields="fields"></formly-form>
      </form>
    </div>
    <div class="column is-6">
      <div class="content code">
        <pre v-text="$data"></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      action: {
        type: String,
        default: ''
      },
      method: {
        type: String,
        default: 'post'
      }
    }
  }
</script>
