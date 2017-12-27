import { wrapElement } from '@/utils'

export default {
  data () {
    return {
      // Determines whether the component can wrap children
      canWrapChildNodes: false
    }
  },
  computed: {
    nativeValue () {
      const label = this.getTemplateOption('label')
      return this.getTemplateOption('properties/native-value', label)
    }
  },
  mounted () {
    // Wrap child nodes if wrapper exists
    if (this.canWrapChildNodes) {
      const wrapper = this.getField('templateOptions/childNodesWrapper')
      if (wrapper) wrapElement(this.$el, wrapper.toString())
    }
  }
}
