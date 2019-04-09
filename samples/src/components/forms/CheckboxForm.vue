<script>
  import SampleBoard from '../SampleBoard.vue'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          basic: false,
          boolean: true,
          yesno: 'No',
          disabled: false,
          group: ['Flint'],
          button: [],
        },
        fields: [
          {
            key: 'basic',
            type: 'checkbox',
            templateOptions: {
              label: 'Basic'
            }
          },
          {
            key: 'boolean',
            type: 'checkbox',
          },
          {
            key: 'yesno',
            type: 'checkbox',
            templateOptions: {
              properties: {
                'true-value': 'Yes',
                'false-value': 'No'
              }
            }
          },
          {
            key: 'disabled',
            type: 'checkbox',
            templateOptions: {
              label: 'Disabled',
              properties: {
                'disabled': true,
                'style': 'margin-bottom: 1.5rem;'
              }
            }
          },
          {
            key: 'group',
            type: 'checkbox-with-block',
            templateOptions: {
              options: [
                {
                  label: 'Silver',
                  properties: {
                    'native-value': 'Silver'
                  }
                },
                {
                  label: 'Flint',
                  properties: {
                    'native-value': 'Flint'
                  }
                },
                {
                  label: 'Vane',
                  properties: {
                    'native-value': 'Vane'
                  }
                },
                {
                  label: 'Billy',
                  properties: {
                    'disabled': true,
                    'native-value': 'Billy'
                  }
                }
              ],
              childNodesWrapper: '<div class="field"></div>'
            }
          },
          {
            key: 'button',
            type: 'checkbox-button-with-field',
            templateOptions: {
              options: [
                {
                  label: 'Nop',
                  icon: 'close',
                  properties: {
                    'type': 'is-danger'
                  }
                },
                {
                  label: 'Yep',
                  icon: 'check',
                  properties: {
                    'type': 'is-success'
                  }
                },
                {
                  label: 'Default'
                },
                {
                  label: 'Disabled',
                  properties: {
                    'disabled': true
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
</script>
