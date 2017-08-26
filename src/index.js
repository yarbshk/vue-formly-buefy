import { addTypes, wrapComponent } from './utils'

import Autocomplete from './components/form/autocomplete'
import Field from './components/form/field'
import Input from './components/form/input'
import Checkbox from './components/form/checkbox'
import Radio from './components/form/radio'
import Select from './components/form/select'
import Switch from './components/form/switch'
import Upload from './components/form/upload'

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
      'input-with-field': wrapComponent(Input, Field.Wrapper),
      'radio': Radio.Radio,
      'radio-button': Radio.RadioButton,
      'select-with-field': wrapComponent(Select, Field.Wrapper),
      'upload': Upload.Upload,
      'upload-drag-drop': Upload.DragDrop
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy
