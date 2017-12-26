import { addTypes, wrapComponent } from './utils'

import Autocomplete from './components/form/autocomplete'
import Datepicker from './components/form/datepicker'
import Input from './components/form/input'
import Checkbox from './components/form/checkbox'
import Radio from './components/form/radio'
import Select from './components/form/select'
import Switch from './components/form/switch'
import Taginput from './components/form/taginput'
import Timepicker from './components/form/timepicker'
import Upload from './components/form/upload'

import MultiBlock from './components/wrappers/block'
import Field from './components/wrappers/field'

const VueFormlyBuefy = {
  install (Vue, options) {
    addTypes(Vue.$formly, {
      'autocomplete': Autocomplete,
      'autocomplete-with-field': wrapComponent(Autocomplete, Field.Default),
      'checkbox': Checkbox.Default,
      'checkbox-with-block': wrapComponent(Checkbox.Default, MultiBlock),
      'checkbox-with-field': wrapComponent(Checkbox.Default, Field.MultiField),
      'checkbox-button': wrapComponent(Checkbox.CheckboxButton, Field.MultiField),
      'datepicker': Datepicker,
      'datepicker-with-field': wrapComponent(Datepicker, Field.Default),
      'input': Input,
      'input-with-field': wrapComponent(Input, Field.Default),
      'radio': Radio.Default,
      'radio-with-block': wrapComponent(Radio.Default, MultiBlock),
      'radio-with-field': wrapComponent(Radio.Default, Field.MultiField),
      'radio-button': wrapComponent(Radio.RadioButton, Field.MultiField),
      'select': Select,
      'select-with-field': wrapComponent(Select, Field.Default),
      'switch': Switch,
      'taginput': Taginput,
      'taginput-with-field': wrapComponent(Taginput, Field.Default),
      'timepicker': Timepicker,
      'timepicker-with-field': wrapComponent(Timepicker, Field.Default),
      'upload': Upload.Default,
      'upload-drag-drop': Upload.DragDrop
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy
