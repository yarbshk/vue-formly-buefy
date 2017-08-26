# vue-formly-buefy
Vue.js plugin that covers the [Buefy](https://buefy.github.io) form fields for [Formly](https://github.com/formly-js/vue-formly). Allows you to combine simplicity of Formly form builder, lightness of Buefy form components and impeccability of [Bulma](http://bulma.io/) design.
- **Fully-featured.** All Buefy form components are covered (**Input**, **Select**, **Autocomplete**, **Checkbox**, **Radio**, **Switch**, **Upload** and **Datepicker**). Create form elements of all native `input` types + `textarea`.
- **Well-judged.** Wrapper elements now accessible (**Field**). Wrap Input, Select and Autocomplete form components to increase its functionality (`.controls` elements, validation state indicator, addons available).
- **Straightforward.** Simple is better than complex.

## Requirements
Depends on the following plugins:
- [Vue Formly](https://github.com/formly-js/vue-formly)
- [Buefy](https://github.com/rafaelpimpa/buefy)

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
    // Set initial values for Formly form
    data () {
      return {
        form: {},
        model: {
          email: ''
        },
        fields: [
          {
            key: 'email',
            type: 'input-with-field',         // Easy wrapping with a field wrapper
            templateOptions: {
              properties: {                   
                'placeholder': 'Your email'   // It's recommended to use quotes and kebab-case
              },
              wrapper: {                      // Configuration object of the field wrapper
                controls: {
                  after: [
                    {
                      type: Span,             // Use the Span component as a field control
                      options: {              // Configuration object of the field control
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

## Status
The plugin passed the beta testing stage and now available for using in the **production** environment.

I'll probably add more functionality later. This is what I need right now.

## Copyright and License
Copyright (c) 2017 Yuriy Rabeshko. Code released under the MIT license.
