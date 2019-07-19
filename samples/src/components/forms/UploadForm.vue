<script>
  import SampleBoard from '../SampleBoard.vue'
  import * as controls from 'vue-formly-buefy/dist/vue-formly-buefy-controls.min'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          upload: [],
          uploadArea: [],
        },
        fields: [
          {
            key: 'upload',
            type: 'upload-with-field',
            templateOptions: {
              button: {
                type: controls.Button.Link,
                options: {
                  label: 'Click to upload',
                  icon: 'upload',
                  properties: {
                    'class': 'is-primary'
                  }
                }
              },
              wrapper: {
                controls: [
                  {
                    type: controls.UploadList,
                    position: 'after',
                    options: {
                      tag: {
                        properties: {
                          'type': 'is-primary',
                          'closable': true
                        }
                      }
                    }
                  }
                ],
                properties: {
                  'grouped': true,
                  'group-multiline': true
                }
              }
            },
            validators: {
              length: {
                expression (field, model, next) {
                  const images = model[field.key]
                  if (images.length) next(images[0].type === 'image/png')
                  else next(true)
                },
                message: 'The file should have "image/png" type'
              }
            }
          },
          {
            key: 'uploadArea',
            type: 'upload-with-field',
            templateOptions: {
              button: {
                type: controls.Area,
                options: {
                  label: 'Drop your files here or click to upload'
                }
              },
              properties: {
                'drag-drop': true,
                'multiple': true
              },
              wrapper: {
                controls: [
                  {
                    type: controls.UploadList,
                    position: 'after',
                    options: {
                      tag: {
                        properties: {
                          'type': 'is-primary',
                          'closable': true
                        }
                      }
                    }
                  }
                ],
                properties: {
                  'grouped': true,
                  'group-multiline': true
                }
              }
            },
            validators: {
              length: {
                expression (field, model, next) {
                  next(model[field.key].length > 1)
                },
                message: 'The files should have length grather than one'
              }
            }
          }
        ]
      }
    }
  }
</script>
