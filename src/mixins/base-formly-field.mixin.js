import BaseFormlyMixin from './base-formly.mixin'

export default {
  mixins: [BaseFormlyMixin],
  data: function () {
    return {
      properties: this.getToValueOf('properties', {})
    }
  },
  /**
   * Onetime initialisation of a field.
   */
  created () {
    this.$set(this.form, this.field.key, {
      '$active': false,
      '$dirty': false
    })
  },
  methods: {
    /**
     * Take virgin of a field by using a blur or change event.
     * It's there only for user reference. Sets it once.
     */
    defineDirtyState () {
      if (!this.$dirty) {
        this.$set(this.form[this.field.key], '$dirty', true)
      }
    },
    /**
     * Change an active flag on focus event.
     */
    toggleActiveState (forcedState) {
      const isActive = typeof forcedState === 'undefined'
        ? !this._active
        : Boolean(forcedState)
      this.$set(this.form[this.field.key], '$active', isActive)
    },
    /**
     * Search for implementation of a custom event handler.
     * Call the handler if it exists, in other case ignore.
     */
    callCustomEventHandler (name, ...args) {
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
    },
    handleInputEvent (...args) {
      this.callCustomEventHandler('input', args)
    },
    handleSelectEvent (...args) {
      this.callCustomEventHandler('select', args)
    }
  }
}
