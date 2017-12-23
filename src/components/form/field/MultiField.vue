<script>
  /**
   * The wrapper for components with multiple children (e.g. CheckboxButton, Radio).
   * Add additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import VFBField from './Field.vue'

  export default {
    name: 'vfbMultiFieldWrapper',
    extends: VFBField,
    data () {
      return {
        defaultWrapper: '<div class="field has-addons"></div>'
      }
    },
    mounted () {
      const wrapper = this.getPropertyValue(this.field, 'wrapper', this.defaultWrapper)
      this.$el.querySelector()
      if (typeof wrapper === 'string' && wrapper) {
        while (wrapper.hasChildNodes()) field.appendChild(wrapper.firstChild)
        wrapper.remove()
      }
    }
  }
</script>
