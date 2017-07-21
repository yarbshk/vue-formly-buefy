import assert from 'assert'
import { mount } from 'vuenit'

import BaseFormlyFieldMixin from 'Sources/mixins/base-formly-field.mixin'
import WrappedFormlyFieldMixin from 'Sources/mixins/wrapped-formly-field.mixin'

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
  },
  to: {
    properties: {
      position: 'is-centered'
    }
  }
})

function prepareComponent(component) {
  // Tested mixins are not sterling vue components
  // therefore it's necessary complement a mixin
  // by fake render function to be able to mount one as a component
  return Object.assign(component, {
    render: h => h()
  })
}

describe('BaseFormlyFieldMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BaseFormlyFieldMixin), {
      props: props()
    })
  })

  describe('created()', function () {
    it('should override form state', function () {
      assert.strictEqual(vm.getFormValueOf('$dirty'), false)
      assert.strictEqual(vm.getFormValueOf('$active'), false)
    })
  })

  describe('methods / _getValue()', function () {
    it('should return info from a formly object to a field', function () {
      assert.equal(vm.getModelValueOf(), 'John Doe')
      assert.equal(vm.getFieldValueOf('type'), 'input')
      assert.equal(vm.getToValueOf('properties/position'), 'is-centered')
    })

    it('should return defaults for non existing values', function () {
      delete vm.model.name
      assert.equal(vm.getModelValueOf(), undefined)
      assert.equal(vm.getFormValueOf('fake'), undefined)
      assert.equal(vm.getFormValueOf('fake', null), null)
      assert.equal(vm.getFieldValueOf('fake'), undefined)
      assert.equal(vm.getFieldValueOf('fake', null), null)
      assert.equal(vm.getToValueOf('fake'), undefined)
      assert.equal(vm.getToValueOf('fake', null), null)
    })
  })
})

describe('WrappedFormlyFieldMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(WrappedFormlyFieldMixin), {
      props: props()
    })
  })
})
