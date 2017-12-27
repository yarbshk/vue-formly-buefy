# vue-formly-buefy
Vue.js plugin that covers the [Buefy](https://buefy.github.io) form fields for [Formly](https://github.com/formly-js/vue-formly). It lets you to validate input data in your forms. The plugin combine simplicity of the Formly form builder, lightness of the Buefy form fields and impeccability of the [Bulma](http://bulma.io/) design.

Brief description of the most meaningful features:
- **Completely covered.** All Buefy form fields are covered (Autocomplete, Checkbox, Datepicker, Input, Radio, Select, Switch, Taginput, Timepicker and Upload).
- **Extensible.** Wrap the vast majority of form elements to increase its functionality (data validation, field controls, grouping and many more are available).
- **Straightforward.** Simple and standardized API.

## Requirements
The plugin was developed and tested for the following packages:
- [Vue Formly (2.5.x)](https://github.com/formly-js/vue-formly)
- [Buefy (0.6.x)](https://github.com/rafaelpimpa/buefy)

## Installation
First of all install necessary dependencies (see above) and **vue-formly-buefy** itself:
```bash
$ npm i vue-formly-buefy
```

After, integrate the plugin with your project:
```javascript
import Buefy from 'buefy'
import Vue from 'vue'
import VueFormly from 'vue-formly'
import VueFormlyBuefy from 'vue-formly-buefy'

Vue.use(Buefy)
Vue.use(VueFormly)
Vue.use(VueFormlyBuefy) // Plug in directly after Vue Formly

new Vue({
  el: '#app'
})
```
That's all :D

## Getting started
Look at the following example of the **wrapped input with a span control**:
```html
<template>
  <formly-form :form="form" :model="model" :fields="fields"></formly-form>
</template>

<script>
  // Import the span control from the library
  import { Span } from 'vue-formly-buefy/dist/controls'

  export default {
    data () {
      return {
        form: {},
        model: {
          email: ''
        },
        fields: [
          {
            key: 'email',
            type: 'input-with-field',  // Use a wrapper to extend functionality
            templateOptions: {
              properties: {            // Keep configuration of the element              
                'placeholder': 'Your email'
              },
              wrapper: {               // Keep configuration of the wrapper
                controls: [
                  {
                    type: Span,        // Use the Span component as a control
                    position: 'after',
                    options: {         // Keep configuration of the control
                      label: '@gmail.com',
                      properties: {
                        'class': 'button is-static'
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
</script>
```
The code above will generate the following Buefy markup (then Vue.js will have compiled this markup to HTML as expected):
```html
<b-field>
    <b-input placeholder="Your email"></b-input>
    <div class="control">
        <span class="button is-static">@gmail.com</span>
    </div>
</b-field>
```
Search for **more examples** [here](https://github.com/yarbshk/vue-formly-buefy-examples/).

## Documentation
Check [wiki section](https://github.com/yarbshk/vue-formly-buefy/wiki) of this repo for detailed API explanation.

## Copyright and License
Copyright (c) 2017 Yuriy Rabeshko. Code released under the MIT license.
