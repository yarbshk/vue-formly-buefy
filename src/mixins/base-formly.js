/**
 * Base mixin for the form fields and wrappers.
 * Keep common properties of the form fields and wrappers.
 */
export default {
  props: {
    form: Object,
    field: Object,
    model: Object,
    to: Object
  },
  computed: {
    _formField () {
      return Object(this.form[this.field.key])
    },
    _formErrors () {
      return Object(this.form.$errors[this.field.key])
    },
    _model () {
      return this.model[this.field.key]
    },
    _active () {
      return this._formField.$active
    },
    _dirty () {
      return this._formField.$dirty
    }
  },
  methods: {
    /**
     * Gets first readable message from a current errors stack of the field.
     * @param {String} name - The name of a validator function.
     * @returns {String} errorMessage
     */
    getErrorMessage (name) {
      let errorMessage = this._formErrors[name]
      if (!errorMessage) {
        const clearErrorMessages = Object
          .values(this._formErrors)
          .filter(x => typeof x === 'string' && x)
        if (clearErrorMessages.length) errorMessage = clearErrorMessages[0]
      }
      return errorMessage
    },
    /**
     * Gets a native or default value of an object by relative path.
     * Usually is using to get a value from the property.
     * @example
     * // returns 1
     * getPropertyValue({a: {b: {c: 1}}}, 'a/b/c')
     * @param {Object} obj
     * @param {String} path
     * @param {*} defaultVal
     * @returns {*} value
     */
    getPropertyValue (obj, path, defaultVal = undefined) {
      let value = defaultVal
      path.split('/').some((elem, i, arr) => {
        if (!obj.hasOwnProperty(elem)) return true
        if (++i === arr.length) value = obj[elem]
        else obj = obj[elem]
      })
      return value
    },
    /**
     * Gets a value of the field property.
     * This is a shortcut function.
     * @param {String} path
     * @param {*} defaultVal
     */
    getField (path, defaultVal = undefined) {
      return this.getPropertyValue(this.field, path, defaultVal)
    },
    /**
     * Gets a value of the templateOptions property.
     * This is a shortcut function.
     * @param {String} path
     * @param {*} defaultVal
     */
    getTemplateOption (path, defaultVal = undefined) {
      return this.getPropertyValue(this.to, path, defaultVal)
    }
  }
}
