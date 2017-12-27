import { addTypes, wrapComponent } from './utils'

import Autocomplete from './components/fields/autocomplete'
import Datepicker from './components/fields/datepicker'
import Input from './components/fields/input'
import Checkbox from './components/fields/checkbox'
import Radio from './components/fields/radio'
import Select from './components/fields/select'
import Switch from './components/fields/switch'
import Taginput from './components/fields/taginput'
import Timepicker from './components/fields/timepicker'
import Upload from './components/fields/upload'

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

export default VueFormlyBuefy
