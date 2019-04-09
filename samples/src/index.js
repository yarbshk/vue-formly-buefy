import Buefy from 'buefy'
import Vue from 'vue'
import VueFormly from 'vue-formly'
import VueFormlyBuefy from 'vue-formly-buefy'

import SampleBlock from './components/SampleBlock.vue'
import AutocompleteForm from './components/forms/AutocompleteForm.vue'
import CheckboxForm from './components/forms/CheckboxForm.vue'
import DatepickerForm from './components/forms/DatepickerForm.vue'
import InputForm from './components/forms/InputForm.vue'
import RadioForm from './components/forms/RadioForm.vue'
import SelectForm from './components/forms/SelectForm.vue'
import SwitchForm from './components/forms/SwitchForm.vue'
import TaginputForm from './components/forms/TaginputForm.vue'
import TimepickerForm from './components/forms/TimepickerForm.vue'
import UploadForm from './components/forms/UploadForm.vue'

import 'buefy/lib/buefy.css'
import '@/scss/index.scss'

Vue.use(Buefy)
Vue.use(VueFormly)
Vue.use(VueFormlyBuefy)

Vue.$formly.addValidationMessage('required', 'This field is required')

new Vue({
  el: '#app',
  components: {
    SampleBlock,
    AutocompleteForm,
    CheckboxForm,
    DatepickerForm,
    InputForm,
    RadioForm,
    SelectForm,
    SwitchForm,
    TaginputForm,
    TimepickerForm,
    UploadForm
  }
})
