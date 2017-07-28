import BaseFieldMixin from 'src/mixins/base-field.mixin'
import { wrapElement } from 'src/utils'

export default {
  mixins: [BaseFieldMixin],
  data () {
    return {
      // Determines whether a component can wrap children
      canWrapChildren: false,
      options: this.getToValueOf('options', [])
    }
  },
  mounted () {
    if (this.canWrapChildren) {
      // Wrap child nodes of a selectric when wrapper exists
      const wrapper = this.getToValueOf('childWrapper')
      if (typeof wrapper === 'object') {
        this.$el.childNodes.forEach(node => wrapElement(node, wrapper))
      }
    }
  },
  methods: {
    /**
     * Helps to avoid code redundancy when extract value from an option.
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