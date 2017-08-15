import { addTypes, wrapComponent } from './utils'

import Autocomplete from './components/form/autocomplete'
import Field from './components/form/field'
import Input from './components/form/input'
import Checkbox from './components/form/checkbox'
import Radio from './components/form/radio'
import Select from './components/form/select'
import Switch from './components/form/switch'

const VueFormlyBuefy = {
  install (Vue, options) {
    addTypes(Vue.$formly, {
      // Plain
      Autocomplete,
      Checkbox,
      Input,
      Select,
      Switch,
      // Combined
      'autocomplete-with-field': wrapComponent(Autocomplete, Field.Wrapper),
      'checkbox-group': Checkbox.CheckboxGroup,
      'input-with-field': wrapComponent(Input, Field.Wrapper),
      'radio': Radio.Radio,
      'radio-button': Radio.RadioButton,
      'select-with-field': wrapComponent(Select, Field.Wrapper)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy
