import { removeIntermediateElement, wrapElement } from '@/utils'

export default {
  data () {
    return {
      defaultWrapper: '<div class="block"></div>'
    }
  },
  mounted () {
    if (this.$children.length) {
      const wrapper = wrapElement(this.$el, this.defaultWrapper)
      removeIntermediateElement(wrapper, this.$el)
    }
  }
}
