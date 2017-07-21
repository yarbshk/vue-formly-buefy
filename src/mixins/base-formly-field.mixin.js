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
    // Shortcuts. Quick access to field's props
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
    // Event handling
    defineDirtyState () {
      /**
       * Take virgin of a field by using a blur or change event.
       * It's there only for user reference. Sets it once.
       */
      if (!Boolean(this.getFormValueOf('$dirty'))) {
        this.$set(this.form[this.field.key], '$dirty', false)
      }
    },
    toggleActiveState () {
      /**
       * Representation of a focus event.
       */
      const isActive = !Boolean(this.getFormValueOf('$active'))
      this.$set(this.form[this.field.key], '$active', isActive)
    },
    handleBlurEvent (event) {
      this.defineDirtyState()
      this.$emit('blur', event)
    },
    handleFocusEvent (event) {
      this.toggleActiveState()
      this.$emit('focus', event)
    },
    handleChangeEvent (value) {
      this.defineDirtyState()
      this.$emit('change', value)
    }
  }
}
