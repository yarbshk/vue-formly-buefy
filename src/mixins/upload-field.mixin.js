import RequiredFieldMixin from 'src/mixins/required-field.mixin'

export default {
  mixins: [RequiredFieldMixin],
  data () {
    return {
      label: this.getTemplateOption('label'),
      wrapper: this.getTemplateOption('wrapper', {})
    }
  },
  computed: {
    icon () {
      let icon = this.getTemplateOption('icon', 'file_upload')
      if (typeof icon === 'string') icon = { icon }
      return icon
    }
  }
}
