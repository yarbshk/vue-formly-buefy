<script>
  import SampleBoard from '../SampleBoard.vue'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          radio: '',
          radioButton: ''
        },
        fields: [
          {
            key: 'radio',
            type: 'radio-with-block',
            templateOptions: {
              options: [
                {
                  label: 'Flint'
                },
                {
                  label: 'Silver'
                },
                {
                  label: 'Jack'
                },
                {
                  label: 'Vane',
                  properties: {
                    'disabled': true
                  }
                }
              ],
              childNodesWrapper: '<div class="field"></div>'
            }
          },
          {
            key: 'radioButton',
            type: 'radio-button-with-field',
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
