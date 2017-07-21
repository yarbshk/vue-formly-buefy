import Vue from 'vue'
import VueFormly from 'vue-formly'
import assert from 'assert'
import { mount } from 'vuenit'

import VueFormlyBuefy from 'Sources'

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
        type: 'b-input',
        templateOptions: {
          properties: {
            'label': 'Input'
          }
        }
      },
      {
        key: 'select',
        type: 'b-select',
        templateOptions: {
          wrapper: {
            'type': 'is-black'
          },
          properties: {
            'label': 'Select',
          }
        }
      },
      {
        key: 'switch',
        type: 'b-switch',
        templateOptions: {
          properties: {
            'label': 'Switch',
          }
        }
      }
    ]
  })

  let vm = null

  beforeEach (function () {
    vm = mount(FormComponent, {
      props: props()
    })
  })

  describe('bulk testing of fields', function () {
    props().fields.forEach(function (field, index) {
      it('should return just created field', function () {
        assert.notStrictEqual(vm.$findOne(field.type), null)
      })
    })
  })
})

describe('BuefyFormField', function () {
  const props = () => ({
    form: {},
    model: {
      name: 'John Doe'
    },
    field: {
      key: 'name',
      type: 'b-field',
    },
    to: {
      properties: {
        label: 'Name',
        position: 'is-centered'
      }
    }
  })

  let vm = null

  beforeEach(function () {
    vm = mount(BuefyFormField, {
      props: props()
    })
  })
})
