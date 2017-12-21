import BaseFormlyMixin from './base-formly.mixin'

export default {
  mixins: [BaseFormlyMixin],
  data () {
    return {
      properties: this.getTemplateOption('properties', {})
    }
  },
  computed: {
    _active () {
      return this.form[this.field.key].$active
    },
    _dirty () {
      return this.form[this.field.key].$dirty
    }
  },
  /**
   * Onetime initialization of a field.
   */
  created () {
    const field = Object(this.form[this.field.key])
    this.$set(this.form, this.field.key, {
      '$active': '$active' in field ? field.$active : false,
      '$dirty': '$dirty' in field ? field.$dirty : false
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
      return this.getTemplateOption('events/' + name, () => {})(args)
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
      this.callCustomEventHandler('blur', args)
    },
    handleFocusEvent (...args) {
      this.onFocus()
      this.callCustomEventHandler('focus', args)
    },
    handleInputEvent (...args) {
      this.defineDirtyState()
      this.callCustomEventHandler('input', args)
    }
  }
}
