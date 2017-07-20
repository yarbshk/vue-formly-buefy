import Vue from 'vue'
import VueFormly from 'vue-formly'
import assert from 'assert'
import { mount } from 'vuenit'

import VueFormlyBuefy from 'Sources'
import BuefyFormField from 'Sources/components/form/BuefyFormField.vue'

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
      name: 'John Doe'
    },
    fields: [
      {
        key: 'name',
        type: 'buefy-form-field',
        templateOptions: {
          properties: {
            'label': 'Name',
            'position': 'is-centered'
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

    props().fields.forEach(function (field, index) {
      it('should reactive change attributes of ' + field.key, function (done) {
        const child = vm.$findOne(field.type)
        // Change some attribute then check it's value on next tick
        vm.fields[index].templateOptions.properties.position = 'is-left'
        assert.strictEqual(child.getAttribute('position'), 'is-centered')
        vm.$nextTick(() => {
          assert.strictEqual(child.getAttribute('position'), 'is-left')
          done()
        })
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
      type: 'buefy-form-field',
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
