# Documentation / Home

## Overview
The plugin consists from the following conditional parts:
1. **Fields** (Autocomplete, Checkbox, Datepicker, Input, Radio, Select, Switch, Taginput, Timepicker and Upload). Everything is simple here, it's the form fields that get user input or interact with one by using standard UI form elements such as inputs, textareas, etc.
2. **Wrappers** (Block, Field). This components wrap the fields to extend their functionality or change behavior. Use ones when you need, for example, to show errors of the field(s) or modify display properties of the set of fields or something else of the same kind. It's recommended to use the [wrapper](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/advanced_form_layouts.html) (builtin attribute) when the business logic are missing at all.
3. **Controls** (Area, Button, Span and UploadList). It's used as controls for the [Field](https://buefy.github.io/documentation/field) or another component(s).

It's necessary to **understand the purpose** of the foregoing parts to be able to quick setup a form.

## Getting started
The plugin's API are so simple therefore it's easy to use. To configure a form first of all it's need to config the fields. It should be done with a configuration object for each field. Please, look at the following examples to have an insight:
```javascript
...
fields: [
  {
    key: 'email',
    type: 'input',
    required: true,
    wrapper: '<div class="block"></div>',
    templateOptions: {
      // Configuration of the field should be here
    }
  }
]
```

The configuration of any field has **hierarchical structure** and some rules:
- **field** may contain configuration of the **wrapper**
- **wrapper** may contain configuration of the **controls**

Look below for detailed explanation of a configuration object for each component.

### 1. Fields
Configuration of a **field** lays in the root of the `templateOptions` property:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      // Configuration of the field should be here
    }
  }
]
```

### 2. Wrappers
Configuration of a **wrapper** lays in the `wrapper` property of the **field** configuration:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      ...
      wrapper: {
        // Configuration of the wrapper should be here        
      }
    }
  }
]
```

### 3. Controls
Configuration of a **control** lays in the `controls` property of the **wrapper** configuration:
```javascript
...
fields: [
  {
    ...
    templateOptions: {
      ...
      wrapper: {
        controls: [
          {
            // Configuration of the control should be here
          },
          {
            // Add several controls if you need
          }
        ]
      }
    }
  }
]
```

### What's next?
You already know **where** configuration properties should lay. The following step is to explore each plugin part (field, wrapper, control) in depth to learn **what** things may contain the configuration object to be able to properly config your form.

## 1. Fields
> You may see the **"Supported Buefy features"** anchor for each **field** below. It's the functionality capabilities you need in most cases. If you have conceived tricky things it's possible to do through [Formly custom layouts](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/advanced_form_layouts.html).

> Required properties are marked with wildcard character (*).

### Autocomplete
#### Supported Buefy features
- [x] Object array
- [ ] Async with custom template

#### Formly types
- `autocomplete`
- `autocomplete-with-field`

#### API structure (**`autocomplete`**)
- events: `Object<function>`
- filter: `function`
- properties: `Object`

#### API structure (**`autocomplete-with-field`**)
- events: `Object<function>`
- filter: `function`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#autocomplete)
- [Buefy docs - Autocomplete](https://buefy.github.io/documentation/autocomplete)

***

### Checkbox
#### Supported Buefy features
- [x] Grouped (Array)
- [x] Sizes
- [x] Checkbox Button

#### Formly types
- `checkbox`
- `checkbox-with-block`
- `checkbox-with-field`
- `checkbox-button`
- `checkbox-button-with-field`

#### API structure (**`checkbox`**)
- events: `Object<function>`
- label: `String` *
- properties: `Object`

#### API structure (**`checkbox-with-block`**)
- childNodesWrapper: `String`
- options: `Array<checkbox>` *
- wrapper: `Object`
  - properties: `Object`

#### API structure (**`checkbox-with-field`**)
- childNodesWrapper: `String`
- options: `Array<checkbox>` *
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### API structure (**`checkbox-button`**)
- events: `Object<function>`
- icon: `String`
- label: `String` *
- properties: `Object`

#### API structure (**`checkbox-button-with-field`**)
- childNodesWrapper: `String`
- options: `Array<checkbox-button>` *
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#checkbox)
- [Buefy docs - Checkbox](https://buefy.github.io/documentation/checkbox)

***

### Datepicker
#### Supported Buefy features
- [x] Non read-only
- [x] Range
- [ ] Footer
- [x] Inline
- [x] Events

#### Formly types
- `datepicker`
- `datepicker-with-field`

#### API structure (**`datepicker`**)
- events: `Object<function>`
- properties: `Object`

#### API structure (**`datepicker-with-field`**)
- events: `Object<function>`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#datepicker)
- [Buefy docs - Datepicker](https://buefy.github.io/documentation/datepicker)

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

#### API structure (**`input`**)
- events: `Object<function>`
- properties: `Object`

#### API structure (**`input-with-field`**)
- events: `Object<function>`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#input)
- [Buefy docs - Input](https://buefy.github.io/documentation/input)

***

### Monthpicker
#### Supported Buefy features
- [x] Non read-only
- [x] Range
- [ ] Footer
- [x] Inline
- [x] Events

#### Formly types
- `monthpicker`
- `monthpicker-with-field`

#### API structure (**`monthpicker`**)
- events: `Object<function>`
- properties: `Object`

#### API structure (**`monthpicker-with-field`**)
- events: `Object<function>`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#monthpicker)
- [Buefy docs - datepicker](https://buefy.github.io/documentation/datepicker) (half way down you will see the month picker)

***

### Radio
#### Supported Buefy features
- [x] Sizes
- [x] Radio Button

#### Formly types
- `radio`
- `radio-with-block`
- `radio-with-field`
- `radio-button`
- `radio-button-with-field`

#### API structure (**`radio`**)
- events: `Object<function>`
- label: `String` *
- properties: `Object`

#### API structure (**`radio-with-block`**)
- childNodesWrapper: `String`
- options: `Array<radio>` *
- wrapper: `Object`
  - properties: `Object`

#### API structure (**`radio-with-field`**)
- childNodesWrapper: `String`
- options: `Array<radio>` *
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### API structure (**`radio-button`**)
- events: `Object<function>`
- icon: `String`
- label: `String` *
- properties: `Object`

#### API structure (**`radio-button-with-field`**)
- childNodesWrapper: `String`
- options: `Array<radio-button>` *
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#radio)
- [Buefy docs - Radio](https://buefy.github.io/documentation/radio)

***

### Select
#### Supported Buefy features
- [x] Multiple
- [x] Icons
- [x] Sizes

#### Formly types
- `select`
- `select-with-field`

#### API structure (**`select`**)
- events: `Object<function>`
- options: `Array<String|Object>`
  - text: `String`
  - value: `String`
- properties: `Object`

#### API structure (**`select-with-field`**)
- events: `Object<function>`
- options: `Array<String|Object>`
  - text: `String`
  - value: `String`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#select)
- [Buefy docs - Select](https://buefy.github.io/documentation/select)

***

### Switch
#### Supported Buefy features
- [x] Types
- [x] Sizes

#### Formly types
- `switch`

#### API structure
- events: `Object<function>`
- label: `String`
- properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#switch)
- [Buefy docs - Switch](https://buefy.github.io/documentation/switch)

***

### Taginput
#### Supported Buefy features
- [x] Multiple
- [x] Icons
- [x] Sizes

#### Formly types
- `taginput`
- `taginput-with-field`

#### API structure (**`taginput`**)
- events: `Object<function>`
- filter: `function`
- properties: `Object`

#### API structure (**`taginput-with-field`**)
- events: `Object<function>`
- filter: `function`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#taginput)
- [Buefy docs - Taginput](https://buefy.github.io/documentation/taginput)

***

### Timepicker
#### Supported Buefy features
- [x] Multiple
- [x] Icons
- [x] Sizes

#### Formly types
- `timepicker`
- `timepicker-with-field`

#### API structure (**`timepicker`**)
- events: `Object<function>`
- properties: `Object`

#### API structure (**`timepicker-with-field`**)
- events: `Object<function>`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#timepicker)
- [Buefy docs - Timepicker](https://buefy.github.io/documentation/timepicker)

***

### Upload
#### Supported Buefy features
- [x] Drag and drop

#### Formly types
- `upload`
- `upload-with-field`

#### API structure (**`upload`**)
- button: `Object`
  - options: `Object`
  - type: `Object` *
- events: `Object<function>`
- properties: `Object`

#### API structure (**`upload-with-field`**)
- button: `Object`
  - options: `Object`
  - type: `Object` *
- events: `Object<function>`
- properties: `Object`
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://yarbshk.github.io/vue-formly-buefy/samples/#upload)
- [Buefy docs - Upload](https://buefy.github.io/documentation/upload)

## 2. Wrappers
There are a few wrappers (Block, Field). To use wrapper just add a suffix `-with-<WRAPPER_NAME>` in the field type (for example, `input-with-field`).

### Block

#### Supported Formly types
- `checkbox`
- `radio`

#### API structure
- wrapper: `Object`
  - properties: `Object`

#### Reference
- [Basic example 1](https://yarbshk.github.io/vue-formly-buefy/samples/#checkbox)
- [Basic example 2](https://yarbshk.github.io/vue-formly-buefy/samples/#radio)
- [Source code](https://github.com/yarbshk/vue-formly-buefy/blob/master/src/components/wrappers/block)

### Field

#### Supported Buefy features
- [x] Addons
- [ ] Groups
- [x] Positions
- [ ] Combining addons and groups
- [x] Horizontal

#### Supported Formly types
- `autocomplete`
- `checkbox`
- `checkbox-button`
- `datepicker`
- `input`
- `radio`
- `radio-button`
- `select`
- `taginput`
- `timepicker`
- `upload`

#### API structure
- wrapper: `Object`
  - controls: `Array<Object>`
    - options: `Object`
    - position: `String` *
    - type: `Object` *
  - properties: `Object`

#### Reference
- [Basic example](https://github.com/yarbshk/vue-formly-buefy#getting-started)
- [Source code](https://github.com/yarbshk/vue-formly-buefy/blob/master/src/components/wrappers/field)
- [Buefy docs - Field](https://buefy.github.io/documentation/field)

## 3. Controls
> **Use it in simple cases only!** It's recommend to design [custom Formly layout](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/advanced_form_layouts.html) if you have a complex control with advanced event handlers (e.g. tricky dropdown or something similar).

#### Supported Formly types
- `*-with-field`

#### Reference
- [Basic example 1](https://github.com/yarbshk/vue-formly-buefy#getting-started)
- [Basic example 2](https://yarbshk.github.io/vue-formly-buefy/samples/#input)
- [Basic example 3](https://yarbshk.github.io/vue-formly-buefy/samples/#upload)
- [Source code](https://github.com/yarbshk/vue-formly-buefy/tree/master/src/components/controls)
