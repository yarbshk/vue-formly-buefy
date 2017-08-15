import RequiredFieldMixin from 'src/mixins/required-field.mixin'

export default {
  mixins: [RequiredFieldMixin],
  data () {
    return {
      label: this.getToValueOf('label'),
      wrapper: this.getToValueOf('wrapper', {})
    }
  },
  computed: {
    icon () {
      let icon = this.getToValueOf('icon', 'file_upload')
      if (typeof icon === 'string') icon = { icon }
      return icon
    }
  }
}
