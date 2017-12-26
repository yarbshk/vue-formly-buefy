export default {
  data () {
    return {
      filteredData: [],
      userInput: ''
    }
  },
  methods: {
    getFilteredData (text) {
      const filter = this.getTemplateOption('filter', this.defaultFilter)
      this.userInput = text
      this.filteredData = this.getTemplateOption('properties/data', []).filter(filter)
    },
    defaultFilter (option) {
      // Extract an option (object property)
      if (typeof option === 'object') {
        const path = this.getTemplateOption('properties/field', '')
        path.split('.').forEach((cell) => { option = option[cell] })
      }
      // Search for occurrences
      return option
        .toString()
        .toLowerCase()
        .indexOf(this.userInput.toLowerCase()) !== -1
    }
  }
}
