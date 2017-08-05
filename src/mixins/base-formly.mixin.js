export default {
  props: {
    form: Object,
    field: Object,
    model: Object,
    to: Object
  },
  computed: {
    _model () {
      return this.model[this.field.key]
    },
    _errors () {
      return this.form.$errors[this.field.key]
    }
  },
  methods: {
    // Core access function
    /**
     * Gets value from object or its default value by relative path.
     * Used to get cached value of Formly field props (field, to).
     * @example
     * // returns 1
     * _getValueOf({a: {b: {c: 1}}}, 'a/b/c')
     * @example
     * // returns null
     * _getValueOf({a: {b: {c: 1}}}, 'a/b/x', null)
     */
    _getValueOf (obj, path, defaultVal = undefined) {
      let value = defaultVal
      path.split('/').some(function (elem, i, arr) {
        if (!obj.hasOwnProperty(elem)) return true
        if (++i === arr.length) value = obj[elem]
        else obj = obj[elem]
      })
      return value
    },
    // Shortcuts. Quick access to field's props
    // Note: Provided values are not reactive!
    getFieldValueOf (path, defaultVal = undefined) {
      return this._getValueOf(this.field, path, defaultVal)
    },
    getToValueOf (path, defaultVal = undefined) {
      return this._getValueOf(this.to, path, defaultVal)
    },
    // Handling errors
    /**
     * Get first readable message from a current field's errors stack.
     * Formly provide boolean errors when error message doesn't set,
     * therefore it's necessary manually choose the human readable messages.
     */
    getErrorMessage (name) {
      const errors = this._errors
      const errorMessages = Object
        .values(errors[name] ? { x: errors[name] } : errors)
        .filter(x => typeof x === 'string' && x)
      if (errorMessages.length) return errorMessages[0]
    }
  }
}
