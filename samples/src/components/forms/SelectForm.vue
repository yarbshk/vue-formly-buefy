<script>
  import SampleBoard from '../SampleBoard.vue'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          simple: '',
          grouped: '',
          multiple: [],
        },
        fields: [
          {
            key: 'simple',
            type: 'select-with-field',
            templateOptions: {
              options: [
                // Different label and value
                { text: 'Jesse', value: 'jesse' },
                { text: 'John', value: 'john' },
                // Authentic label and value
                'Tina',
                'Clarence'
              ],
              properties: {
                'placeholder': 'Select a name'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Simple'
                }
              }
            }
          },
          {
            key: 'grouped',
            type: 'select-with-field',
            required: true,
            templateOptions: {
              options: [
                {
                  label: 'Black Sails',
                  options: [
                    { text: 'Flint', value: 'flint' },
                    { text: 'Silver', value: 'silver' },
                    { text: 'Vane', value: 'vane' },
                    { text: 'Billy', value: 'billy' },
                    { text: 'Jack', value: 'jack' }
                  ]
                },
                {
                  label: 'Breaking Bad',
                  options: [
                    'Heisenberg',
                    'Jesse',
                    'Saul',
                    'Mike'
                  ]
                }
              ],
              properties: {
                'icon': 'account',
                'placeholder': 'Select...'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Grouped'
                }
              }
            },
            validators: {
              lowercase: {
                expression (field, model, next) {
                  const value = model[field.key]
                  next(value === value.toLowerCase())
                },
                message: 'Selected value is invalid'
              }
            }
          },
          {
            key: 'multiple',
            type: 'select-with-field',
            templateOptions: {
              options: [
                { text: 'Flint', value: 'flint' },
                { text: 'Silver', value: 'silver' },
                { text: 'Vane', value: 'vane' },
                { text: 'Billy', value: 'billy' },
                { text: 'Jack', value: 'jack' },
                { text: 'Heisenberg', value: 'heisenberg' },
                { text: 'Jesse', value: 'jesse' },
                { text: 'Saul', value: 'saul' },
                { text: 'Mike', value: 'mike' },
              ],
              properties: {
                'multiple': true,
                'native-size': 5
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Multiple'
                }
              }
            }
          }
        ]
      }
    }
  }
</script>
