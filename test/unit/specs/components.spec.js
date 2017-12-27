import Vue from 'vue'
import Buefy from 'buefy'

import assert from 'assert'
import { mount } from 'vuenit'

import Field from 'src/components/form/field'
import Input from 'src/components/form/input'
import Select from 'src/components/form/select'

Vue.use(Buefy)

const props = () => ({
  form: {},
  model: {},
  field: {},
  to: {}
})

describe('Field.Wrapper', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Field.Default, {
      props: Object.assign({}, props(), {
        wrappedComponent: Input,
        form: {
          $errors: {
            name: {
              boom: 'Fill out this field!'
            }
          },
          $valid: false,
          name: {
            $dirty: false,
            $active: false
          }
        },
        model: {
          name: 'John'
        },
        field: {
          key: 'name',
          type: 'input-with-field',
          validators: {
            boom: {
              expression: 'model[field.key].length > 5',
              message: 'Fill out this field!'
            }
          }
        }
      })
    })
  })

  describe('props', function () {
    it('should define wrappedComponent props', function () {
      assert.deepEqual(vm.wrappedComponent, Input)
    })
  })

  describe('computed', function () {
    it('should insert validation state into field properties', function () {
      assert.strictEqual('type' in vm.extendedProperties, true)
      assert.strictEqual('message' in vm.extendedProperties, true)
    })
  })

  describe('getValidationState()', function () {
    it('should return correct validation state', function () {
      // Check validation state on a virgin field
      assert.strictEqual(vm._dirty, false)
      assert.deepEqual(vm.getValidationState(), [undefined, undefined])
      // Check validation state on the dirty field
      vm.form[vm.field.key].$dirty = true
      assert.strictEqual(vm._dirty, true)
      const correctErrorState = ['is-danger', 'Fill out this field!']
      assert.deepEqual(vm.getValidationState(), correctErrorState)
    })
  })
})

describe('Select', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Select, {
      props: Object.assign({}, props(), {
        to: {
          options: [
            { label: 'A', options: ['a', 'b']},
            { label: 'B', options: ['c', 'd']}
          ]
        }
      })
    })
  })

  describe('computed', function () {
    it('should return correct template type', function () {
      assert.equal(vm.templateType, vm.templateTypes.COMBINED)
    })
  })
})
