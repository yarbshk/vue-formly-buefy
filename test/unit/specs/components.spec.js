import Vue from 'vue'
import VueFormly from 'vue-formly'
import assert from 'assert'
import { mount } from 'vuenit'

import VueFormlyBuefy from 'src'
import Button from 'src/components/general/button'

Vue.use(VueFormly)
Vue.use(VueFormlyBuefy)

const FormComponent = {
  props: ['form', 'model', 'fields'],
  template: '<formly-form :form="form" :model="model" :fields="fields"></formly-form>'
}

describe('FormlyForm', function () {
  const props = () => ({
    form: {},
    model: {
      input: 'John Doe',
      select: [1, 2, 3],
      switch: true
    },
    fields: [
      {
        key: 'input',
        type: 'input-with-field',
        templateOptions: {
          field: {
            controls: {
              before: [
                {
                  type: Button,
                  options: {
                    label: 'Button label',
                    icon: 'add'
                  }
                }
              ]
            }
          },
          properties: {
            'label': 'Input'
          }
        }
      },
      {
        key: 'switch',
        type: 'switch',
        templateOptions: {
          properties: {
            'label': 'Switch'
          }
        }
      },
      {
        key: 'select',
        type: 'select',
        options: [
          { label: 'A', options: [{ text: 'A', value: 'a' }]},
          { label: 'B', options: [{ text: 'B', value: 'b' }]}
        ]
      }
    ]
  })

  let vm = null

  beforeEach(function () {
    vm = mount(FormComponent, {
      props: props()
    })
  })
})
