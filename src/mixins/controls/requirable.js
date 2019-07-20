export default {
  created () {
    const required = this.getField('required')
    // Extend properties with the required flag
    if (required && this.properties) this.properties.required = true
  }
}
