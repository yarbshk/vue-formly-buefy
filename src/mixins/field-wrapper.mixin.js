export default {
  data () {
    return {
      ...this.$parent.$data
    }
  },
  watch: {
    '$parent.$data': {
      handler (data) {
        /**
         * Manually update $data option values. A child component watch
         * for parent $data option, therefore it's not possible to use
         * computed properties.
         */
        const _this = this
        Object.keys(data).forEach(key => {
          _this.$data[key] = data[key]
        })
      },
      // Mass observation of values
      deep: true
    }
  }
}
