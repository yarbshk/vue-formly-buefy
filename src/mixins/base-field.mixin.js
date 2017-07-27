export default {
  props: {
    form: Object,
    field: Object,
    model: Object,
    to: Object
  },
  data: function () {
    return {
      properties: this.getToValueOf('properties', {})
    }
  },
  computed: {
    _model () {
      return this.model[this.field.key]
    },
    _errors () {
      return this.form.$errors[this.field.key] || {}
    },
    _active () {
      return this.form[this.field.key].$active
    },
    _dirty () {
      return this.form[this.field.key].$dirty
    }
  },
  created () {
    /**
     * Onetime initialisation of a field.
     */
    this.$set(this.form, this.field.key, {
      '$active': false,
      '$dirty': false
    })
  },
  methods: {
    // Core access function
    _getValueOf (obj, path, defaultVal = undefined) {
      /**
       * Gets values from objects and sets defaults by relative path.
       * Used to bind elements from Formly config object to a tag attribute.
       * @example
       * // returns 1
       * _getValueOf({a: {b: {c: 1}}}, 'a/b/c')
       * @example
       * // returns null
       * _getValueOf({a: {b: {c: 1}}}, 'a/b/x', null)
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
    // Note: Provided values are not reactive!
    getFieldValueOf (path, defaultVal = undefined) {
      return this._getValueOf(this.field, path, defaultVal)
    },
    getToValueOf (path, defaultVal = undefined) {
      return this._getValueOf(this.to, path, defaultVal)
    },
    // Handling errors
    getReadableErrorMessage () {
      /**
       * Get first readable message from a current field's errors stack.
       * Formly provide boolean errors when error message doesn't set,
       * therefore it's necessary manually choose the human readable messages.
       */
      let error
      const errors = this._errors
      Object.keys(errors).some(key => {
        if (typeof errors[key] !== 'boolean') {
          error = errors[key]
          return true
        }
      })
      return error
    },
    getValidationState () {
      /**
       * Define type and message properties for a Buefy field component.
       * It's necessary condition of a Formly form validation rules.
       */
      let type, message
      if (!this._active && this._dirty) {
        if (Object.keys(this._errors).length) {
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
      if (!this.$dirty) {
        this.$set(this.form[this.field.key], '$dirty', true)
      }
    },
    toggleActiveState (forcedState) {
      /**
       * Representation of a focus event.
       */
      const isActive = typeof forcedState === 'undefined'
        ? !this._active
        : Boolean(forcedState)
      this.$set(this.form[this.field.key], '$active', isActive)
    },
    callCustomEventHandler (name, ...args) {
      /**
       * Search for implementation of a custom event handler.
       * Call the handler if it exists, in other case ignore.
       */
      return this.getToValueOf('events/' + name, () => {})(args)
    },
    handleBlurEvent (...args) {
      this.defineDirtyState()
      this.toggleActiveState(false)
      this.callCustomEventHandler('blur', args)
    },
    handleFocusEvent (...args) {
      this.toggleActiveState(true)
      this.callCustomEventHandler('focus', args)
    },
    handleChangeEvent (...args) {
      this.defineDirtyState()
      this.callCustomEventHandler('change', args)
    }
  }
}
