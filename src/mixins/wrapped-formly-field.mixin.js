import BaseFormlyFieldMixin from './base-formly-field.mixin'
import Wrapper from '../components/form/Wrapper.vue'

export default {
  mixins: [BaseFormlyFieldMixin],
  computed: {
    isWrapped () {
      return Boolean(this.getToValueOf('wrapper'))
    },
    wrapperProperties () {
      return this.getToValueOf('wrapper', {})
    }
  },
  components: {
    Wrapper
  }
}
