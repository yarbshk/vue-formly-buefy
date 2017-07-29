# vue-formly-buefy
Vue.js plugin that covers the [Buefy](https://buefy.github.io) form fields for [Formly](https://github.com/formly-js/vue-formly). Allows you to combine simplicity of Formly form builder, lightness of Buefy form components and impeccability of [Bulma](http://bulma.io/) design.
- **Fully-featured.** All Buefy form components are covered (**Input**, **Select**, **Autocomplete**, **Checkbox**, **Radio** and **Switch**). Create form elements of all native input types + textarea.
- **Well-judged.** Wrapper elements now accessible (**Field**). Wrap Input, Select and Autocomplete form components to increase its functionality (`.controls` elements, validation state indicator, addons available).
- **Straightforward.** Simple is better than complex.

## Requirements
Depends on the following plugins:
- [Vue Formly](https://github.com/formly-js/vue-formly)
- [Buefy](https://github.com/rafaelpimpa/buefy)

## Instalation
First of all install necessary dependencies (see above) and **vue-formly-buefy** itself:
```bash
npm i vue-formly-buefy
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
  // Import helper Span component
  import Span from 'vue-formly-buefy/src/components/general/span'
  
  export default {
    // Set initial values for Formly form
    data: () => ({
      form: {},
      model: {
        email: ''
      },
      fields: [
        {
          key: 'email',
          type: 'input-with-field',         // Easy wrapping with a Field component
          templateOptions: {
            properties: {                   
              'placeholder': 'Your email'   // Recommends to use quotes and kebab-case
            },
            wrapper: {                      // Configuration object of the Field component
              controls: {
                after: [
                  {
                    type: Span,             // Use the Span helper as a field control
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
    })
  }
</script>
```
The code above will generate the following Buefy markup:
```html
<!-- index.html -->
...
<b-field>
    <b-input placeholder="Your email"></b-input>
    <p class="control">
        <span class="button is-static">@gmail.com</span>
    </p>
</b-field>
...
```
You can find [more examples here](https://github.com/yarbshk/vue-formly-buefy-examples/).

## Status
The plugin passed the beta testing stage and now available for use in the **production** environment.

## Issues
Be free to open an issue if you notice a bug. Let's make web a little bit better together :)

## Copyright and License
Copyright (c) 2017 Yuriy Rabeshko. Code released under the MIT license.
