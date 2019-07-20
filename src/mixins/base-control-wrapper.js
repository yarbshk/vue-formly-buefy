import BaseMixin from './base'

export default {
  mixins: [BaseMixin],
  props: {
    // Should be overridden by using a child wrapper
    wrappedComponent: {
      type: Object,
      default: () => ({})
    }
  }
}
