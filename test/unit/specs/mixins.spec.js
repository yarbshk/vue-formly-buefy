import assert from 'assert'
import { mount } from 'vuenit'

import BaseFormlyFieldMixin from 'src/mixins/base-formly-field.mixin'
import BaseFormlyWrapperMixin from 'src/mixins/base-formly-wrapper.mixin'
import SelectricFieldMixin from 'src/mixins/selectric-field.mixin'

const props = () => ({
  form: {
    $errors: {
      name: {
        boom: 'Fill out this field!'
      }
    },
    $valid: false,
    name: {
      $dirty: true,
      $active: false
    }
  },
  model: {
    name: 'John Doe'
  },
  field: {
    key: 'name',
    type: 'input',
    validators: {
      boom: {
        expression: 'model[field.key].length > 5',
        message: 'Fill out this field!'
      }
    }
  },
  to: {
    events: {
      change (args) {
        return args
      }
    },
    properties: {
      position: 'is-centered'
    }
  }
})

function prepareComponent (component) {
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

  describe('computed', function () {
    it('should return field properties', function () {
      assert.deepEqual(vm.properties, props().to.properties)
    })
  })

  describe('created()', function () {
    it('should override form state', function () {
      assert.strictEqual(vm._dirty, true)
      assert.strictEqual(vm._active, false)
    })
  })

  describe('methods / _getValueOf()', function () {
    it('should return info from a formly object to a field', function () {
      assert.equal(vm._model, 'John Doe')
      assert.equal(vm.getFieldValueOf('type'), 'input')
      assert.equal(vm.getToValueOf('properties/position'), 'is-centered')
    })

    it('should return defaults for non existing values', function () {
      assert.equal(vm.getFieldValueOf('fake'), undefined)
      assert.equal(vm.getFieldValueOf('fake', null), null)
      assert.equal(vm.getToValueOf('fake'), undefined)
      assert.equal(vm.getToValueOf('fake', null), null)
    })
  })

  describe('errors handling', function () {
    it('should return readable error message', function () {
      assert.equal(vm.getErrorMessage(), 'Fill out this field!')
    })
  })

  describe('event handling', function () {
    it('should change active state of a field', function () {
      assert.strictEqual(vm._active, false)
      vm.toggleActiveState()
      assert.strictEqual(vm._active, true)
    })

    it('should return custom event handler', function () {
      const args = 'yeah!'
      assert.equal(vm.callCustomEventHandler('change', args), args)
    })

    it('should change dirty and active state on blur event', function () {
      vm.form[vm.field.key].$dirty = false
      vm.toggleActiveState()
      assert.strictEqual(vm._active, true)
      vm.handleBlurEvent()
      assert.strictEqual(vm._dirty, true)
      assert.strictEqual(vm._active, false)
    })

    it('should toggle active state on focus event', function () {
      assert.strictEqual(vm._active, false)
      vm.handleFocusEvent()
      assert.strictEqual(vm._active, true)
    })
  })
})

describe('BaseFormlyWrapperMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BaseFormlyWrapperMixin), {
      props: props()
    })
  })

  describe('props', function () {
    it('should return default props value', function () {
      assert.deepEqual(vm.wrappedComponent, {})
    })
  })
})

describe('SelectricFieldMixin', function () {
  let vm = null

  beforeEach(function () {
    const selectricFieldMixin = {
      extends: BaseFormlyFieldMixin,
      mixins: [SelectricFieldMixin]
    }
    vm = mount(prepareComponent(selectricFieldMixin), {
      props: props()
    })
  })

  describe('watch', function () {
    it('should return correct option value', function () {
      assert.equal(vm.getOptionAttr('foo'), 'foo')
      let option = {text: 'foo'}
      assert.equal(vm.getOptionAttr(option, 'text'), 'foo')
      assert.equal(vm.getOptionAttr(option, 'value', option.text), 'foo')
      option.value = 'bar'
      assert.equal(vm.getOptionAttr(option, 'value'), 'bar')
    })
  })
})
