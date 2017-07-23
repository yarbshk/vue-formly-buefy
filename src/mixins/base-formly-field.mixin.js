export default {
  props: {
    form: Object,
    field: Object,
    model: Object,
    to: Object
  },
  computed: {
    properties () {
      return this.getToValueOf('properties', {})
    }
  },
  created () {
    /**
     * Onetime initialisation of a field.
     */
    this.$set(this.form, this.field.key, {
      '$dirty': false,
      '$active': false
    })
  },
  methods: {
    // Core access function
    _getValue (obj, path, defaultVal = undefined) {
      /**
       * Gets values from objects and sets defaults by relative path.
       * Used to bind elements from Formly config object to a tag attribute.
       * @example
       * // returns 1
       * _getValue({a: {b: {c: 1}}}, 'a/b/c')
       * @example
       * // returns null
       * _getValue({a: {b: {c: 1}}}, 'a/b/x', null)
       */
      let value = defaultVal
      path.split('/').some(function (elem, i, arr) {
        if (!obj.hasOwnProperty(elem)) return true
        if (++i === arr.length) {
          value = obj[elem]
        } else {
          obj = obj[elem]
        }
      })
      return value
    },
    // Shortcuts. Quick access to field's props
    getErrors () {
      return this._getValue(this.form, '$errors/' + this.field.key, {})
    },
    getForm () {
      return this.form[this.field.key]
    },
    getModel () {
      return this.model[this.field.key]
    },
    getFormValueOf (path, defaultVal = undefined) {
      return this._getValue(this.getForm(), path, defaultVal)
    },
    getFieldValueOf (path, defaultVal = undefined) {
      return this._getValue(this.field, path, defaultVal)
    },
    getToValueOf (path, defaultVal = undefined) {
      return this._getValue(this.to, path, defaultVal)
    },
    // Handling errors
    getReadableErrorMessage () {
      /**
       * Get first readable message from a current field's errors stack.
       * Formly provide boolean errors when error message doesn't set,
       * therefore it's necessary manually choose the human readable messages.
       */
      const errors = this.getErrors()
      Object.keys(errors).forEach(key => {
        const error = errors[key]
        if (typeof error !== 'boolean') {
          return error
        }
      })
    },
    getValidationState () {
      /**
       * Define type and message properties for a Buefy field component.
       * It's necessary condition of a Formly form validation rules.
       */
      let type, message
      if (!this.getFieldValueOf('$active') && !this.getFieldValueOf('$dirty')) {
        if (Object.keys(this.getErrors()).length) {
          type = 'is-danger'
          message = this.getReadableErrorMessage()
        } else {
          type = 'is-success'
        }
      }
      return [type, message]
    },
    // Event handling
    defineDirtyState () {
      /**
       * Take virgin of a field by using a blur or change event.
       * It's there only for user reference. Sets it once.
       */
      if (!this.getFormValueOf('$dirty')) {
        this.$set(this.form[this.field.key], '$dirty', false)
      }
    },
    toggleActiveState () {
      /**
       * Representation of a focus event.
       */
      const isActive = !this.getFormValueOf('$active')
      this.$set(this.form[this.field.key], '$active', isActive)
    },
    callCustomEventHandler (name, args) {
      /**
       * Search for implementation of a custom event handler.
       * Call the handler if it exists, in other case ignore.
       */
      this.getToValueOf('events/' + name, () => {})(args)
    },
    handleBlurEvent (event) {
      this.defineDirtyState()
      this.callCustomEventHandler('blur', event)
    },
    handleFocusEvent (event) {
      this.toggleActiveState()
      this.callCustomEventHandler('focus', event)
    },
    handleChangeEvent (value) {
      this.defineDirtyState()
      this.callCustomEventHandler('change', value)
    }
  }
}
