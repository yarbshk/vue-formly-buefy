import BaseFormlyMixin from './base-formly'

export default {
  mixins: [BaseFormlyMixin],
  computed: {
    properties () {
      return this.getTemplateOption('properties', {})
    }
  },
  methods: {
    /**
     * Registers the initial user's interaction with the field.
     */
    defineDirtyState () {
      if (!this.$dirty) this.$set(this._formField, '$dirty', true)
    },
    /**
     * Toggle the switch when a user interact with the field.
     * @param {Boolean} forcedState
     */
    toggleActiveState (forcedState) {
      const isActive = typeof forcedState !== 'undefined'
        ? !!forcedState
        : !this._formField.$active
      this.$set(this._formField, '$active', isActive)
    },
    /**
     * Search for an implementation of the custom event handler.
     * @param {String} name
     * @param {*} args
     */
    callCustomEventHandler (name, ...args) {
      return this.getTemplateOption('events/' + name, () => {})(...args)
    },
    onBlur () {
      this.defineDirtyState()
      this.toggleActiveState(false)
    },
    onFocus () {
      this.toggleActiveState(true)
    },
    handleBlurEvent (...args) {
      this.onBlur()
      this.callCustomEventHandler('blur', ...args)
    },
    handleFocusEvent (...args) {
      this.onFocus()
      this.callCustomEventHandler('focus', ...args)
    },
    handleInputEvent (...args) {
      this.defineDirtyState()
      this.callCustomEventHandler('input', ...args)
    }
  },
  created () {
    const formField = this._formField
    // Initialize the form property of the field
    this.$set(this.form, this.field.key, {
      '$active': '$active' in formField ? formField.$active : false,
      '$dirty': '$dirty' in formField ? formField.$dirty : false
    })
  }
}
