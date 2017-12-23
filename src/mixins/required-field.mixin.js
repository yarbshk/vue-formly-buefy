export default {
  data () {
    return {
      // Extend properties with the required flag
      properties: {
        required: this.getField('required')
      }
    }
  }
}
