export default {
  props: {
    label: String,
    icon: {
      type: String,
      default: ''
    },
    properties: {
      type: Object,
      default: () => ({})
    }
  }
}
