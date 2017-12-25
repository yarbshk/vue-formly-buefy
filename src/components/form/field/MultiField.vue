<script>
  /**
   * The wrapper for components with multiple children (e.g. CheckboxButton, Radio).
   * Add additional functionality to foregoing components.
   * {@link https://buefy.github.io/#/documentation/field}
   */
  import VFBField from './Field.vue'
  import { removeIntermediateElement } from '@/utils'

  export default {
    name: 'vfbMultiFieldWrapper',
    extends: VFBField,
    mounted () {
      // Move all elements of the child component into the parent node
      // then remove an intermediate node for the correct work of the component
      if (this.$children.length) {
        removeIntermediateElement(this.$el, this.$children[0].$el)
      }
    }
  }
</script>
