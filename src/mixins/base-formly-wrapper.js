import BaseFormlyMixin from './base-formly'

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
