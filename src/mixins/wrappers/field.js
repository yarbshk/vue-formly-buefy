import BaseFormlyWrapperMixin from '@/mixins/base-formly-wrapper'

export default {
  mixins: [BaseFormlyWrapperMixin],
  computed: {
    controls () {
      return this.getTemplateOption('wrapper/controls', [])
    },
    properties () {
      return this.getTemplateOption('wrapper/properties', {})
    },
    clearProperties () {
      const [type, message] = this.getValidationState()
      return type && message
        ? Object.assign({}, this.properties, { type, message })
        : this.properties
    }
  },
  methods: {
    /**
     * Define the type and message properties for the field.
     */
    getValidationState () {
      if (!this._formField.$dirty) return [undefined, undefined]
      return this.hasValidationErrors()
        ? ['is-danger', this.getFirstValidationErrorMessage()]
        : ['is-success', this.getValidationSuccessMessage()]
    },
    /**
     * Filter controls of the wrapper by position.
     * @param {String} position
     */
    filterControls (position) {
      const filter = control => control.position === position
      return this.controls.filter(filter)
    }
  }
}
