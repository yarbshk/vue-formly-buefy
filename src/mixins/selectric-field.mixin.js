import { wrapElement } from 'src/utils'

export default {
  data () {
    return {
      // Determines whether a component can wrap children
      canWrapChildren: false,
      options: this.getTemplateOption('options', [])
    }
  },
  mounted () {
    if (this.canWrapChildren) {
      // Wrap child nodes of a selectric when wrapper exists
      const wrapper = this.getTemplateOption('childWrapper')
      if (typeof wrapper === 'string' && wrapper) {
        this.$el.childNodes.forEach(node => wrapElement(node, wrapper))
      }
    }
  },
  /**
   * Helps to avoid code redundancy when extract value from an option.
   */
  methods: {
    getOptionAttr (option, key, defaultVal = undefined) {
      return typeof option === 'object'
        ? key in option
          ? option[key]
          : defaultVal
        : option.toString()
    }
  }
}
