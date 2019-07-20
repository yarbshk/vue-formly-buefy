import Vue from 'vue'
import VueFormly from 'vue-formly'
import assert from 'assert'

import { addTypes, wrapComponent, wrapElement } from '@/utils'

Vue.use(VueFormly)

describe('Formly',function () {
  describe('addTypes()', function () {
    it('should correctly add form fields', function () {
      addTypes(Vue.$formly, {a: 1})
      assert.deepEqual(Vue.$formly.getTypes(), {'formly_a': 1})
    })
  })
})

describe('Wrappers', function () {
  describe('wrapComponent()', function () {
    it('should return wrapped component', function () {
      const component = {a: 1},
            wrapper = {b: 2},
            extended = wrapComponent(component, wrapper)
      assert.deepEqual(extended.extends, wrapper)
      assert.deepEqual(extended.props.wrappedComponent.default(), component)
    })
  })

  describe('wrapElement()', function () {
    it('should return wrapped element', function () {
      let a = document.createElement('span'), wrapper
      a.setAttribute('id', 'a')
      document.body.appendChild(a)
      wrapElement(document.getElementById('a'), '<div id="b"></div>')
      wrapper = document.getElementById('b')
      assert.strictEqual(wrapper.childNodes[0].id, 'a')
    })
  })
})
