import assert from 'assert'
import { mount } from 'vuenit'

import Field from 'src/components/form/field'
import Input from 'src/components/form/input'
import Checkbox from 'src/components/form/checkbox'
import Radio from 'src/components/form/radio'
import Select from 'src/components/form/select'
import Switch from 'src/components/form/switch'

const props = () => ({
  form: {},
  model: {},
  field: {},
  to: {}
})

function onBlur(vm, ...args) {
  vm.form[vm.field.key].$dirty = false
  vm.toggleActiveState(true)
  assert.strictEqual(vm.getFormValueOf('$dirty'), false)
  assert.strictEqual(vm.getFormValueOf('$active'), true)
  vm.$trigger('blur', args)
  assert.strictEqual(vm.getFormValueOf('$dirty'), true)
  assert.strictEqual(vm.getFormValueOf('$active'), false)
}

function onFocus(vm, ...args) {
  vm.toggleActiveState(false)
  assert.strictEqual(vm.getFormValueOf('$active'), false)
  vm.$trigger('focus', args)
  assert.strictEqual(vm.getFormValueOf('$active'), true)
}

function onChange(vm, ...args) {
  vm.form[vm.field.key].$dirty = false
  assert.strictEqual(vm.getFormValueOf('$dirty'), false)
  vm.$trigger('change', args)
  assert.strictEqual(vm.getFormValueOf('$dirty'), true)
}

describe('Textarea', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Input, {
      props: Object.assign({}, props(), {
        model: { name: '' },
        field: { key: 'name', type: 'input' },
        to: { properties: { 'type': 'textarea' } }
      })
    })
  })

  describe('event handling', function () {
    it('should correct handle all types of events', function () {
      onBlur(vm)
      onFocus(vm)
      onChange(vm)
    })

    it('should type several words in a textarea', function () {
      const message = 'Test message'
      vm.$trigger('focus', null)
      assert.strictEqual(vm.getFormValueOf('$active'), true)
      vm.model[vm.field.key] = message
      vm.$trigger('blur', null)
      assert.strictEqual(vm.getFormValueOf('$dirty'), true)
      assert.strictEqual(vm.getFormValueOf('$active'), false)
      assert.equal(vm.getModel(), message)
    })
  })
})

describe('Field.Wrapper', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Field.Wrapper, {
      props: Object.assign({}, props(), {
        wrappedComponent: Input
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
      assert.strictEqual('type' in vm.fieldProperties, true)
      assert.strictEqual('message' in vm.fieldProperties, true)
    })
  })
})

describe('Checkbox', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Checkbox.CheckboxGroup, {
      props: props()
    })
  })

  describe('event handling', function () {
    it('should correct handle all types of events', function () {
      onChange(vm)
    })
  })
})

describe('Radio', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Radio.Radio, {
      props: props()
    })
  })

  describe('event handling', function () {
    it('should correct handle all types of events', function () {
      onChange(vm)
    })
  })
})

describe('Select', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Select, {
      props: Object.assign({}, props(), {
        field: {
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

  describe('event handling', function () {
    it('should correct handle all types of events', function () {
      onBlur(vm)
      onFocus(vm)
      onChange(vm)
    })
  })
})

describe('Switch', function () {
  let vm = null

  beforeEach(function () {
    vm = mount(Switch, {
      props: props()
    })
  })

  describe('event handling', function () {
    it('should correct handle all types of events', function () {
      onChange(vm)
    })
  })
})
