import assert from 'assert'
import { mount } from 'vuenit'

import BaseFieldMixin from 'src/mixins/base-field.mixin'
import BaseFieldWrapperMixin from 'src/mixins/base-field-wrapper.mixin'

const props = () => ({
  form: {
    $errors: {
      name: {
        required: 'Fill out this field!'
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
    required: true
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
    vm = mount(prepareComponent(BaseFieldMixin), {
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
      assert.strictEqual(vm._dirty, false)
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
      assert.equal(vm.getReadableErrorMessage(), 'Fill out this field!')
    })

    it('should return correct validation state', function () {
      // Check validation state on a virgin field
      assert.strictEqual(vm._dirty, false)
      assert.deepEqual(vm.getValidationState(), [undefined, undefined])
      // Check validation state on the dirty field
      vm.defineDirtyState()
      assert.strictEqual(vm._dirty, true)
      const correctErrorState = ['is-danger', 'Fill out this field!']
      assert.deepEqual(vm.getValidationState(), correctErrorState)
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
      assert.strictEqual(vm._dirty, false)
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

    it('should change dirty state on change event', function () {
      assert.strictEqual(vm._dirty, false)
      vm.handleChangeEvent()
      assert.strictEqual(vm._dirty, true)
    })
  })
})

describe('BaseFieldWrapperMixin', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(prepareComponent(BaseFieldWrapperMixin), {
      props: props()
    })
  })

  describe('props', function () {
    it('should return default props value', function () {
      assert.deepEqual(vm.wrappedComponent, {})
    })
  })
})
