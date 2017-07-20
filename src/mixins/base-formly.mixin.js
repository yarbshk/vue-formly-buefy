export default {
  props: {
    form: Object,
    field: Object,
    model: Object,
    to: Object
  },
  methods: {
    // Core access function
    _getValue (obj, path, defaultVal = undefined) {
      /**
       * Gets values from objects and sets defaults by relative path
       * Used to bind elements from Formly config object to a tag attribute
       * @example
       * // returns 1
       * _getValue({a: {b: {c: 1}}}, 'a/b/c')
       * @example
       * // returns null
       * _getValue({a: {b: {c: 1}}}, 'a/b/x', null)
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
    getFormValueOf (path, defaultVal = undefined) {
      return this._getValue(this.form[this.field.key], path, defaultVal)
    },
    getModelValueOf () {
      return this.model[this.field.key]
    },
    getFieldValueOf (path, defaultVal = undefined) {
      return this._getValue(this.field, path, defaultVal)
    },
    getToValueOf (path, defaultVal = undefined) {
      return this._getValue(this.to, path, defaultVal)
    },
    handleEvent (eventPath) {
      // TODO: write universal event handler
      const eventHandler = this.getFieldValueOf(eventPath)
      if (typeof eventHandler === 'function') {
        eventHandler()
      }
    }
  }
}
