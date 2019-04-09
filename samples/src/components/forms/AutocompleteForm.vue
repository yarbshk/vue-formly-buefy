<script>
  import SampleBoard from '../SampleBoard.vue'
  import frameworks from '@/assets/frameworks.json'
  import users from '@/assets/users.json'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          framework: '',
          username: ''
        },
        fields: [
          {
            key: 'framework',
            type: 'autocomplete-with-field',
            templateOptions: {
              properties: {
                'data': frameworks,
                'icon': 'magnify',
                'placeholder': 'e.g. jQuery'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Find a JS framework'
                }
              }
            },
            validators: {
              existing: {
                expression (field, model, next) {
                  const data = field.templateOptions.properties.data
                  next(data.indexOf(model[field.key]) !== -1)
                },
                message: 'The framework doesn\'t exists'
              }
            }
          },
          {
            key: 'username',
            type: 'autocomplete-with-field',
            required: true,
            templateOptions: {
              properties: {
                'data': users,
                'field': 'user.first_name',
                'placeholder': 'e.g. Anne'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Find a name'
                }
              }
            },
            validators: {
              existing: {
                expression (field, model, next) {
                  const data = field.templateOptions.properties.data
                  next(data.map(x => x.user.first_name).indexOf(model[field.key]) !== -1)
                },
                message: 'The username doesn\'t exists'
              }
            }
          }
        ]
      }
    }
  }
</script>
