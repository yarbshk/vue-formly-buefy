import BaseFormlyMixin from './base-formly.mixin'

export default {
  mixins: [BaseFormlyMixin],
  props: {
    // Should be overridden by using a child wrapper
    wrappedComponent: {
      type: Object,
      default: () => ({})
    }
  }
}
