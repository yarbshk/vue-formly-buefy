import { addTypes, wrapComponent } from './utils'

import Field from './components/form/field'
import Input from './components/form/input'
import Switch from './components/form/switch'

const VueFormlyBuefy = {
  install (Vue, options) {
    addTypes(Vue.$formly, {
      // Straightforward
      Input,
      Switch,
      // Combined
      'input-with-field': wrapComponent(Input, Field.Wrapper)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy
