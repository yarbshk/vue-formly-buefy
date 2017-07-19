import BaseFormlyMixin from './base-formly.mixin'

export default {
  mixins: [BaseFormlyMixin],
  data: () => ({
    state: {
      '$dirty': false,
      '$active': false
    }
  }),
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.$set(this.form, this.field.key, this.state)
    }
  }
}
