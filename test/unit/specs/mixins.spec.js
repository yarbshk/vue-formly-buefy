import assert from 'assert'
import { mount } from 'vuenit'

import BaseFormlyMixin from 'Sources/mixins/base-formly.mixin'
import BuefyFormFieldMixin from 'Sources/mixins/buefy-form-field.mixin'

const props = () => ({
  form: {
    name: {
      $dirty: true,
      $active: false,
    }
  },
  model: {
    name: 'John Doe'
  },
  field: {
    key: 'name',
    type: 'input',
    properties: {
      position: 'is-centered'
    }
  },
  to: {}
})

function prepareComponent(component) {
  // Tested mixins are not sterling vue components
  // therefore it's necessary complement a mixin
  // by fake render function to be able to mount one as a component
  return Object.assign(component, {
    render: h => h()
  })
}

describe('BaseFormlyMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BaseFormlyMixin), {
      props: props()
    })
  })

  describe('methods / _getValue()', function () {
    it('should return info from a formly object to a field', function (done) {
      vm.$nextTick(() => {
        assert.strictEqual(vm.getFormValueOf('$dirty'), true)
        assert.equal(vm.getModelValueOf(), 'John Doe')
        assert.equal(vm.getFieldValueOf('properties/position'), 'is-centered')
        done()
      })
    })

    it('should return default values for non existing properties', function (done) {
      delete vm.model.name
      assert.equal(vm.getModelValueOf(), undefined)
      vm.$nextTick(() => {
        assert.equal(vm.getFormValueOf('fake'), undefined)
        assert.equal(vm.getFormValueOf('fake', null), null)
        assert.equal(vm.getFieldValueOf('fake'), undefined)
        assert.equal(vm.getFieldValueOf('fake', null), null)
        done()
      })
    })
  })
})

describe('BuefyFormFieldMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BuefyFormFieldMixin), {
      props: props()
    })
  })

  describe('methods / initialize()', function () {
    it('should override form state', function () {
      assert.strictEqual(vm.getFormValueOf('$dirty'), false)
      assert.strictEqual(vm.getFormValueOf('$active'), false)
    })
  })
})
