import 'babel-polyfill' // https://github.com/babel/babel-brunch/issues/59#issuecomment-309039648

import assert from 'assert'
import { mount } from 'vuenit'

import BaseFormlyMixin from 'Sources/mixins/base-formly.mixin'
import BuefyFormFieldMixin from 'Sources/mixins/buefy-form-field.mixin'

const props = {
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
}

function prepareComponent(component) {
  // Tested mixins are not sterling vue components
  // therefore it's necessary complement an element
  // by fake render function to be able to mount ones
  return Object.assign(component, {
    render: h => h()
  })
}

describe('BaseFormlyMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BaseFormlyMixin), {
      props: props
    })
  })

  describe('methods / _getEl()', function () {
    it('should return info from formly object for a field', function (done) {
      vm.$nextTick(() => {
        assert.strictEqual(vm.getFormEl('$dirty'), true)
        assert.equal(vm.getModelEl(), 'John Doe')
        assert.equal(vm.getFieldEl('properties/position'), 'is-centered')
        done()
      })
    })

    it('should return default values for non existing properties', function (done) {
      delete vm.model.name
      assert.equal(vm.getModelEl(), undefined)
      vm.$nextTick(() => {
        assert.equal(vm.getFormEl('$fake'), undefined)
        assert.equal(vm.getFormEl('$fake', null), null)
        assert.equal(vm.getFieldEl('fake'), undefined)
        assert.equal(vm.getFieldEl('fake', null), null)
        done()
      })
    })
  })
})

describe('BuefyFormFieldMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BuefyFormFieldMixin), {
      props: props
    })
  })

  describe('methods / initialize()', function () {
    it('should override form state', function () {
      assert.strictEqual(vm.getFormEl('$dirty'), false)
      assert.strictEqual(vm.getFormEl('$active'), false)
    })
  })
})
