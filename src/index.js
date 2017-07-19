import Fields from './fields'

const VueFormlyBuefy = {
  install (Vue, options) {
    Fields.keys().forEach(key => {
      Vue.$formly.addType(key, Fields(key))
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy
