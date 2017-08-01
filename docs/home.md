# Documentation / Home

## Overview
The plugin consists from the following conditional parts:
1. **Form Components** (Autocomplete, Checkbox, Input, Radio, Select and Switch). Everything is simple here, it's components which get user input or interact with one by using standard UI form elements.
2. **Field Wrappers** (Field). Components which wrap another components. Use it when you need to wrap the form components by a parent component with tricky opportunities too often. When the opportunities of the parent component are primitive it's recommended to use the [standard Formly wrapper](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/advanced_form_layouts.html) (e.g. `wrapper: '<div class="block"></div>'`).
3. **Plain Controls** (Span, Button and Dropdown). It's used as controls of the form components. To better understanding [see example](https://github.com/yarbshk/vue-formly-buefy#examples).

It's necessary to **understand the purpose** of the foregoing parts to be able to quick setup a form.

## Getting started
The plugin's API are so simple therefore it's easy to use. To configure a form first of all it's need to config the fields. It should be done with a configuration object for each field:
```javascript
...
fields: [
  {
    key: 'email',
    type: 'input',
    required: true,
    wrapper: '<div class="block"></div>',
    templateOptions: {
      // Any template configuration properties
    }
  }
]
```

Whole configuration of the plugin contains in the `templateOptions` property:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      // The plugin configuration should be here
    }
  }
]
```
The configuration of **the plugin has hierarchical structure**:
- form components can contain configuration of the field wrappers
- field wrappers can contain configuration of the plain controls

Look below for detailed description of configuration for each component.

### 1. Form Components
Configuration of a **form component** contains in the root of the `templateOptions` property:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      // Configuration of the form component should be here
    }
  }
]
```

### 2. Field Wrappers
Configuration of a **field wrapper** contains in the root of a form component configuration:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      ...
      wrapper: {
        // Configuration of the field wrapper should be here        
      }
    }
  }
]
```

### 3. Plain Controls
Configuration of a **plain control** contains in the `controls` property of the field wrapper configuration:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      ...
      wrapper: {
        controls: [
          // Configuration of the plain control should be here
        ]
      }
    }
  }
]
```

### What's next?
You already know **where** configuration properties should contain. The following step is to explore each plugin component to learn **what** things may contain the configuration object to be able to properly config a form.

## 1. Form Components
> You can see the **"Supported Buefy features"** anchor in each form component below. This functionality is all what you need in most cases and can be **easy to implement** with vue-formly-buefy. If you have conceived tricky things it's possible to do through [Formly custom layouts](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/advanced_form_layouts.html).

### Autocomplete
#### Supported Buefy features
- [x] Object array
- [ ] Async with custom template

#### Formly types
- `autocomplete`
- `autocomplete-with-field`

#### API structure
- data: `Array<string|object>`
- properties: `Object`
- events: `Object<function>`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy-examples/#autocomplete)
- [Buefy docs - Autocomplete](https://buefy.github.io/#/documentation/autocomplete)

***

### Checkbox
#### Supported Buefy features
- [x] Checkbox
- [x] Checkbox Group (optionally wrap child elements by a custom tag, e.g. `<div class="field"></div>`)

#### Formly types
- `checkbox`
- `checkbox-group`

#### API structure (`checkbox`)
- label: `String`
- properties: `Object`
- events: `Object<function>`

#### API structure (`checkbox-group`)
- options: `Array<string|object>`
- childWrapper: `String`
- properties: `Object`
- events: `Object<function>`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy-examples/#checkbox)
- [Buefy docs - Checkbox](https://buefy.github.io/#/documentation/checkbox)

***

### Input
#### Supported Buefy features
- [x] Types & States
- [x] Icons
- [x] Validation
- [x] Password
- [x] Sizes

#### Formly types
- `input`
- `input-with-field`

#### API structure
- properties: `Object`
- events: `Object<function>`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy-examples/#input)
- [Buefy docs - Input](https://buefy.github.io/#/documentation/input)

***

### Radio
#### Supported Buefy features
- [x] Radio (optionally wrap child elements by a custom tag, e.g. `<div class="field"></div>`)
- [x] Radio Button
- [x] Radio Group

#### Formly types
- `radio`
- `radio-button`

#### API structure (`radio`)
- options: `Array<string|object>`
- childWrapper: `String`
- properties: `Object`
- events: `Object<function>`

#### API structure (`radio-button`)
- options: `Array<string|object>`
- properties: `Object`
- events: `Object<function>`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy-examples/#radio)
- [Buefy docs - Radio](https://buefy.github.io/#/documentation/radio)

***

### Select
#### Supported Buefy features
- [x] Icons
- [x] Selection
- [x] Sizes

#### Formly types
- `select`
- `select-with-field`

#### API structure
- options: `Array<string|object>`
- properties: `Object`
- events: `Object<function>`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy-examples/#select)
- [Buefy docs - Select](https://buefy.github.io/#/documentation/select)

***

### Switch
#### Supported Buefy features
- [x] Sizes

#### Formly types
- `switch`

#### API structure
- label: `String`
- properties: `Object`
- events: `Object<function>`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy-examples/#switch)
- [Buefy docs - Switch](https://buefy.github.io/#/documentation/switch)

## 2. Field Wrappers
> There are one wrapper - **Field** (only **Autocomplete**, **Input** and **Select** form components can be wrapped by this wrapper). To use wrapper just add a suffix `-with-field` for some Formly type (e.g. `input-with-field`) when registering a form component. [See examples](https://github.com/yarbshk/vue-formly-buefy-examples/) for more explanation.

#### Supported Buefy features
- [x] Addons
- [ ] Groups
- [ ] Combining addons and groups

#### Formly types
- `*-with-field`

#### API structure
- wrapper: `Object`
  - controls: `Object`
    - before, after: `Array<object>`:
      - type: `Object`
      - options: `Object`
  - properties: `Object`

#### Reference
- [Basic example](https://github.com/yarbshk/vue-formly-buefy#examples)
- [Source code](https://github.com/yarbshk/vue-formly-buefy/blob/master/src/components/form/field/Wrapper.vue)
- [Buefy docs - Field](https://buefy.github.io/#/documentation/field)

## 3. Plain Controls
> **Use it in simple cases only!** It's recommend to design [custom Formly layout](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/advanced_form_layouts.html) if you have a complex control (e.g. tricky dropdown or something similar).

#### Formly types
- `*-with-field`

#### Reference
- [Basic example](https://github.com/yarbshk/vue-formly-buefy#examples)
- [Source code](https://github.com/yarbshk/vue-formly-buefy/tree/master/src/components/general)