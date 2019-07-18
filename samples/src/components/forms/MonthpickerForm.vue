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
          monthpicker: null,
        },
        fields: [
          {
            key: 'monthpicker',
            type: 'monthpicker-with-field',
            required: true,
            templateOptions: {
              properties: {
                'icon': 'calendar-today',
                'placeholder': 'Click to select...'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Select a month'
                }
              }
            },
          },
        ]
      }
    }
  }
</script>
