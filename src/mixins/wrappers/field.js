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
      return Object.assign({}, this.properties, { type, message })
    }
  },
  methods: {
    /**
     * Define the type and message properties for the field.
     */
    getValidationState () {
      if (!this._formField.$dirty) return [undefined, undefined]
      return Object.values(this._formErrors).filter(x => x).length
        ? ['is-danger', this.getErrorMessage()]
        : ['is-success', this.properties.message]
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
