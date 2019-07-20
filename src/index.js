import { addTypes, wrapComponent } from './utils'

import Autocomplete from './components/controls/autocomplete'
import Datepicker from './components/controls/datepicker'
import Input from './components/controls/input'
import Checkbox from './components/controls/checkbox'
import Radio from './components/controls/radio'
import Select from './components/controls/select'
import Switch from './components/controls/switch'
import Taginput from './components/controls/taginput'
import Timepicker from './components/controls/timepicker'
import Upload from './components/controls/upload'

import Area from './components/control-sidecars/area'
import Button from './components/control-sidecars/button'
import Span from './components/control-sidecars/span'
import Control from './components/control-sidecars/control'
import Link from './components/control-sidecars/link'
import UploadList from './components/control-sidecars/upload-list'

import MultiBlock from './components/control-wrappers/block'
import Field from './components/control-wrappers/field'

const VueFormlyBuefy = {
  install (Vue, options) {
    addTypes(Vue.$formly, {
      'autocomplete': Autocomplete,
      'autocomplete-with-field': wrapComponent(Autocomplete, Field.Default),
      'checkbox': Checkbox.Default,
      'checkbox-with-block': wrapComponent(Checkbox.Default, MultiBlock),
      'checkbox-with-field': wrapComponent(Checkbox.Default, Field.MultiField),
      'checkbox-button': Checkbox.CheckboxButton,
      'checkbox-button-with-field': wrapComponent(Checkbox.CheckboxButton, Field.MultiField),
      'datepicker': Datepicker,
      'datepicker-with-field': wrapComponent(Datepicker, Field.Default),
      'input': Input,
      'input-with-field': wrapComponent(Input, Field.Default),
      'radio': Radio.Default,
      'radio-with-block': wrapComponent(Radio.Default, MultiBlock),
      'radio-with-field': wrapComponent(Radio.Default, Field.MultiField),
      'radio-button': Radio.RadioButton,
      'radio-button-with-field': wrapComponent(Radio.RadioButton, Field.MultiField),
      'select': Select,
      'select-with-field': wrapComponent(Select, Field.Default),
      'switch': Switch,
      'taginput': Taginput,
      'taginput-with-field': wrapComponent(Taginput, Field.Default),
      'timepicker': Timepicker,
      'timepicker-with-field': wrapComponent(Timepicker, Field.Default),
      'upload': Upload,
      'upload-with-field': wrapComponent(Upload, Field.Default)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyBuefy)
}

export default VueFormlyBuefy

export { Area, Button, Control, Link, Span, UploadList }
