# vue-formly-buefy
Vue.js plugin that covers the [Buefy](https://buefy.github.io) form fields for [Formly](https://github.com/formly-js/vue-formly). It lets you to validate input data in your forms. The plugin combine simplicity of Formly form builder, lightness of Buefy form components and impeccability of [Bulma](http://bulma.io/) design.
- **Fully-featured.** All Buefy form components are covered (**Autocomplete**, **Checkbox**, **Datepicker**, **Input**, **Radio**, **Select**, **Switch**, **Taginput**, **Timepicker** and **Upload**).
- **Well-judged.** Wrap the vast majority of form elements to increase its functionality (`.controls` elements, validation state indicator, addons available).
- **Straightforward.** Simple and standardized API.

## Requirements
The plugin was developed and tested for the following packages:
- [Vue Formly (2.5.x)](https://github.com/formly-js/vue-formly)
- [Buefy (0.6.x)](https://github.com/rafaelpimpa/buefy)

## Installation
First of all install necessary dependencies (see above) and **vue-formly-buefy** itself:
```bash
$ yarn add vue-formly-buefy
```

After, integrate the plugin with your project:
```javascript
import Vue from 'vue'
import Buefy from 'buefy'
import VueFormly from 'vue-formly'
import VueFormlyBuefy from 'vue-formly-buefy'

Vue.use(Buefy)
Vue.use(VueFormly)
Vue.use(VueFormlyBuefy) // Include the plugin after Vue Formly

new Vue({
  el: '#app'
})
````
...or just add a script directly to the document:
```html
<script src="/path_to_assets/vue-formly-buefy/dist/vue-formly-buefy.min.js"></script>
```
That's all :D

## Documentation
Check [wiki section](https://github.com/yarbshk/vue-formly-buefy/wiki) of this repo for detailed API explanation.

## Examples
Simple example of creating an input type with a static button (span):
```html
<!-- InputWithStaticSpan.vue -->
<template>
  <formly-form :form="form" :model="model" :fields="fields"></formly-form>
</template>

<script>
  // Import a span plain control
  import { Span } from 'vue-formly-buefy/dist/plain-controls'

  export default {
    data () {
      return {
        form: {},
        model: {
          email: ''                   // Your input data will store here
        },
        fields: [
          {
            key: 'email',
            type: 'input-with-field', // Use wrapping (*-with-field) to extend functionality of the element
            templateOptions: {
              properties: {           // Keep Buefy API properties + HTML attributes of the element              
                'placeholder': 'Your email'
              wrapper: {              // Keep configuration of the wrapper
                controls: {
                  after: [            // Specify controls position relatively to the element
                    {
                      type: Span,     // Use the Span component as a control
                      options: {      // Keep configuration of the control (the same as templateOptions but for controls)
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
          }
        ]
      }
    }
  }
</script>
```
The code above will generate the following Buefy markup:
```html
<!-- index.html -->
...
<b-field>
    <b-input placeholder="Your email"></b-input>
    <div class="control">
        <span class="button is-static">@gmail.com</span>
    </div>
</b-field>
...
```
You can find [more examples here](https://github.com/yarbshk/vue-formly-buefy-examples/).

## Copyright and License
Copyright (c) 2017 Yuriy Rabeshko. Code released under the MIT license.
