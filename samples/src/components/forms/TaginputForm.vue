<script>
  import SampleBoard from '../SampleBoard.vue'
  import users from '@/assets/users.json'
  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          tags: [
            'Auckland',
            'Wellington',
            'Napier'
          ],
          autotags: []
        },
        fields: [
          {
            key: 'tags',
            type: 'taginput-with-field',
            templateOptions: {
              properties: {
                'icon': 'label',
                'placeholder': 'Add a tag'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Add some tags'
                }
              }
            },
            validators: {
              length: {
                expression: 'model[field.key].length > 2',
                message: 'Add at least 3 tags'
              }
            }
          },
          {
            key: 'autotags',
            type: 'taginput-with-field',
            templateOptions: {
              properties: {
                'autocomplete': true,
                'data': users,
                'field': 'user.first_name',
                'icon': 'label',
                'placeholder': 'Start typing...'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Enter some tags'
                }
              }
            },
            validators: {
              length: {
                expression: 'model[field.key].length > 0',
                message: 'Add at least one tag'
              }
            }
          }
        ]
      }
    }
  }
</script>
