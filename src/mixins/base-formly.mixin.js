export default {
  props: {
    form: Object,
    field: Object,
    model: Object,
    to: Object
  },
  methods: {
    // Core access function
    _getEl (obj, path, defaultVal = undefined) {
      /**
       * Gets values from objects and sets defaults by relative path
       * Used to bind elements from Formly config object to a tag attribute
       * @example
       * // returns 1
       * _getEl({a: {b: {c: 1}}}, 'a/b/c')
       * @example
       * // returns null
       * _getEl({a: {b: {c: 1}}}, 'a/b/x', null)
       */
      let value = defaultVal
      path.split('/').forEach((elem, i, arr) => {
        if (obj.hasOwnProperty(elem)) {
          if (++i === arr.length) {
            value = obj[elem]
          } else {
            obj = obj[elem]
          }
        }
      })
      return value
    },
    // Shortcuts
    getFormEl (path, defaultVal = undefined) {
      return this._getEl(this.form[this.field.key], path, defaultVal)
    },
    getModelEl () {
      return this.model[this.field.key]
    },
    getFieldEl (path, defaultVal = undefined) {
      return this._getEl(this.field, path, defaultVal)
    },
    handleEvent (eventPath) {
      const eventHandler = this.getFieldEl(eventPath)
      if (typeof eventHandler === 'function') {
        eventHandler()
      }
    }
  },
  watch: {
    form () {
      /**
       * Force update DOM for a field when it's form changes
       * This is required because tag attributes of the field
       * which bind from Formly config object are not reactive
       */
      this.$forceUpdate()
    }
  }
}
