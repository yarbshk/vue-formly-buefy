import { wrapElement } from '@/utils'

export default {
  mounted () {
    const wrapper = this.getPropertyValue(this.field, 'wrapper')
    if (typeof wrapper === 'string' && wrapper) {
      this.$el.childNodes.forEach(node => wrapElement(node, wrapper))
    }
  }
}
