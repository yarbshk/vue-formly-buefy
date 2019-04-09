<script>
  import SampleBoard from '../SampleBoard.vue'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          default: false,
          boolean: true,
          yesno: 'Yes',
          disabled: false,
          disabledChecked: true,
        },
        fields: [
          {
            key: 'default',
            type: 'switch',
            wrapper: '<div class="field"></div>',
            templateOptions: {
              label: 'Default'
            }
          },
          {
            key: 'boolean',
            type: 'switch',
            wrapper: '<div class="field"></div>'
          },
          {
            key: 'yesno',
            type: 'switch',
            wrapper: '<div class="field"></div>',
            templateOptions: {
              properties: {
                'true-value': 'Yes',
                'false-value': 'No'
              }
            }
          },
          {
            key: 'disabled',
            type: 'switch',
            wrapper: '<div class="field"></div>',
            templateOptions: {
              label: 'Disabled',
              properties: {
                'disabled': true
              }
            }
          },
          {
            key: 'disabledChecked',
            type: 'switch',
            wrapper: '<div class="field"></div>',
            templateOptions: {
              label: 'Disabled Checked',
              properties: {
                'disabled': true
              }
            }
          }
        ]
      }
    }
  }
</script>
