import BaseFormlyFieldMixin from './base-formly-field.mixin'

export default {
  mixins: [BaseFormlyFieldMixin],
  props: {
    // Should be overridden by using a child wrapper
    wrappedComponent: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    // Override created() method of BaseFormlyFieldMixin.
    // Prevent to the reinitialisation by a wrapped component.
    created () {},
  }
}
