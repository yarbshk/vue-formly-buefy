import BaseFormlyMixin from './base-formly.mixin'

export default {
  mixins: [BaseFormlyMixin],
  props: {
    // Should be overridden by using a child wrapper
    wrappedComponent: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    _active () {
      return Object(this.form[this.field.key]).$active
    },
    _dirty () {
      return Object(this.form[this.field.key]).$dirty
    }
  }
}
