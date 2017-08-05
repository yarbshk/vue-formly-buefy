import { addTypes, wrapComponent } from './utils'

import Autocomplete from './components/form/autocomplete'
import Field from './components/form/field'
import Input from './components/form/input'
import Checkbox from './components/form/checkbox'
import Radio from './components/form/radio'
import Select from './components/form/select'
import Switch from './components/form/switch'

import Button from './components/general/button'
import Span from './components/general/span'

const pluginInstance = {
  plainControls: {
    Button,
    Span
  }
}

const VueFormlyBuefy = {
  install (Vue, options) {
    addTypes(Vue.$formly, {
      // Plain
      Autocomplete,
      Input,
      'checkbox': Checkbox.Checkbox,
      'radio': Radio.Radio,
      Select,
      Switch,
      // Combined
      'autocomplete-with-field': wrapComponent(Autocomplete, Field.Wrapper),
      'input-with-field': wrapComponent(Input, Field.Wrapper),
      'checkbox-group': Checkbox.CheckboxGroup,
      'radio-button': Radio.RadioButton,
      'select-with-field': wrapComponent(Select, Field.Wrapper)
    })
    Vue.prototype.$formlyBuefy = pluginInstance
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
  window.Vue.prototype.$formlyBuefy = pluginInstance
}

export default VueFormlyBuefy
