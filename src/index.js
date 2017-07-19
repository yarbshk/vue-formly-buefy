import Fields from './fields'

let FormlyBuefy = Object()

FormlyBuefy.install = function (Vue, options) {
    Fields.keys().forEach(key => Vue.$formly.addType(key, Fields(key)))
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(FormlyBuefy)
}

return FormlyBuefy
