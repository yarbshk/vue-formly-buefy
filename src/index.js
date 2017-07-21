import FormComponents from './components/form'

const VueFormlyBuefy = {
  install (Vue, options) {
    Object.keys(FormComponents).forEach(key => {
      Vue.$formly.addType(
        // Convert title case into kebab case
        key.split(/(?=[A-Z])/).map(x => x.toLowerCase()).join('-'),
        FormComponents[key]
      )
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy
