import { createDocumentFragment } from '@/utils'

export default {
  data () {
    return {
      defaultWrapper: '<div class="field has-addons"></div>'
    }
  },
  mounted () {
    // Extend a root tag of the component
    if (this.$children.length) {
      const wrapper = this.getField('wrapper', this.defaultWrapper)
      const node = createDocumentFragment(wrapper, true)
      console.log(this, node)
      Object.assign(this.$el, node)
    }
  }
}
