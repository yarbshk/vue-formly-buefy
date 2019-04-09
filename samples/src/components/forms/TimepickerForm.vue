<script>
  import SampleBoard from '../SampleBoard.vue'
  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          time: null
        },
        fields: [
          {
            key: 'time',
            type: 'timepicker-with-field',
            templateOptions: {
              properties: {
                'placeholder': 'Click to select...',
                'icon': 'clock'
              },
              wrapper: {
                properties: {
                  'label': 'Select time',
                  'addons': false
                }
              }
            },
            validators: {
              now: {
                expression (field, model, next) {
                  const now = new Date()
                  const time = new Date(model[field.key])
                  next(time.getHours() !== now.getHours())
                },
                message: 'The time should be different from now'
              }
            }
          }
        ]
      }
    }
  }
</script>
