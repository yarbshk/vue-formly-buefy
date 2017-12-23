import { wrapElement } from 'src/utils'

export default {
  data () {
    return {
      // Determines whether the component can wrap children
      canWrapChildren: false,
      options: this.getTemplateOption('options', [])
    }
  },
  mounted () {
    if (this.canWrapChildren) {
      // Wrap child nodes if wrapper exists
      const wrapper = this.getTemplateOption('childWrapper')
      if (typeof wrapper === 'string' && wrapper) {
        this.$el.childNodes.forEach(node => wrapElement(node, wrapper))
      }
    }
  },
  methods: {
    /**
     * Gets value from an option of the select widget.
     * This is a shortcut function.
     * @param {*} option
     * @param {String} key
     * @param {*} defaultVal
     */
    getOptionAttr (option, key, defaultVal = undefined) {
      return typeof option === 'object'
        ? key in option
          ? option[key]
          : defaultVal
        : option.toString()
    }
  }
}
