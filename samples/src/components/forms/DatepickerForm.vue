<script>
  import SampleBoard from '../SampleBoard.vue'
  
  const TODAY = new Date()
  const MIN_DATE = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 5)
  const MAX_DATE = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 5)

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          datepicker: null,
          datepickerRange: null,
          monthpicker: null
        },
        fields: [
          {
            key: 'datepicker',
            type: 'datepicker-with-field',
            required: true,
            templateOptions: {
              properties: {
                'icon': 'calendar-today',
                'placeholder': 'Click to select...'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Select a date'
                }
              }
            },
            validators: {
              today: {
                expression: (field, model, next) => {
                  next(new Date(model[field.key]).getDate() !== TODAY.getDate())
                },
                message: 'The date should be different from today'
              }
            }
          },
          {
            key: 'datepickerRange',
            type: 'datepicker-with-field',
            templateOptions: {
              properties: {
                'placeholder': 'Click to select...',
                'min-date': MIN_DATE,
                'max-date': MAX_DATE
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Range'
                }
              }
            },
            validators: {
              inRange: {
                expression: (field, model, next) => {
                  const date = model[field.key]
                  next(date > MIN_DATE && date < MAX_DATE)
                },
                message: 'The date is out of range'
              }
            }
          },
          {
            key: 'monthpicker',
            type: 'datepicker-with-field',
            required: true,
            templateOptions: {
              properties: {
                'type': 'month',
                'placeholder': 'Click to select...',
                'icon': 'calendar-today'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Select a month'
                }
              }
            },
          }
        ]
      }
    }
  }
</script>
