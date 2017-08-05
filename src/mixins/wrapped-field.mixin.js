export default {
  data () {
    return {
      ...this.$parent.$data
    }
  },
  watch: {
    /**
     * Manually update $data option values. A child component watch
     * for parent $data option, therefore it's not possible to use
     * computed properties.
     */
    '$parent.$data': {
      handler (data) {
        Object.keys(data).forEach(key => {
          this.$data[key] = data[key]
        })
      },
      // Mass observation of values
      deep: true
    }
  }
}
