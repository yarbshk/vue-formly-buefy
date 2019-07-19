<script>
  import SampleBoard from '../SampleBoard.vue'
  import * as controls from 'vue-formly-buefy/dist/vue-formly-buefy-controls.min'

  export default {
    extends: SampleBoard,
    data () {
      return {
        form: {},
        model: {
          name: 'John Silver',
          email: 'john@',
          username: 'johnsilver',
          telephone: '',
          password: 'iwantmytreasure',
          message: '',
        },
        fields: [
          {
            key: 'name',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Name'
                }
              }
            },
            validators: {
              length: {
                expression: 'model[field.key].length > 3',
                message: 'This name is too short'
              }
            }
          },
          {
            key: 'email',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              properties: {
                'type': 'email',
                'maxlength': 30
              },
              wrapper: {
                properties: {
                  'label': 'Email',
                  'addons': false,
                  'type': 'is-warning',
                  'message': 'Initial message'
                }
              }
            },
            validationSuccessMessage: 'Your name is OK',
            validators: {
              format: {
                expression (field, model, next) {
                  next(/^[\w.\-]+@[\w.\-]+\.[a-z]+$/.test(model[field.key]))
                },
                message: 'The email address doesn\'t match the pattern'
              }
            }
          },
          {
            key: 'username',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              properties: {
                'maxlength': 30
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Username',
                  'message': 'The username is available'
                }
              }
            },
            validators: {
              existing: {
                expression: 'model[field.key] !== "johnsilver"',
                message: 'The username already exists'
              },
            }
          },
          {
            key: 'telephone',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              properties: {
                'expanded': true,
                'placeholder': 'xxxxxxxxxx',
                'maxlength': 10
              },
              wrapper: {
                controls: [
                  {
                    type: controls.Span,
                    position: 'before',
                    options: {
                      label: '+1',
                      properties: {
                        'class': 'button is-static is-right-border-none'
                      }
                    }
                  }
                ],
                properties: {
                  'class': 'is-addons-ordered',
                  'label': 'Telephone'
                }
              }
            },
            validators: {
              format: {
                expression (field, model, next) {
                  next(/^[0-9]{10}$/.test(model[field.key]))
                },
                message: 'The telephone number has invalid format'
              }
            }
          },
          {
            key: 'password',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              properties: {
                'password-reveal': true,
                'type': 'password'
              },
              wrapper: {
                properties: {
                  'addons': false,
                  'label': 'Password'
                }
              }
            },
            validators: {
              reliability: {
                expression: 'model[field.key].length > 8',
                message: 'The password is unreliable'
              }
            }
          },
          {
            key: 'message',
            type: 'input-with-field',
            templateOptions: {
              properties: {
                'type': 'textarea',
                'maxlength': 200
              },
              wrapper: {
                properties: {
                  'label': 'Message',
                  'addons': false
                }
              }
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  /*
   * Override Bulma rules to properly display a non-standard field.
   */
  .field.is-addons-ordered {
    flex-wrap: wrap;
    position: relative;
    // Set validation message position
    & > {
      .label {
        width: 100%;
      }
      // Only for a field with .control > .help
      // In other case set .help { width: 100% }
      .help {
        position: absolute;
        bottom: 0;
      }
    }
    // Override border-radius of controls
    div.control:first-of-type .button,
    div.control:first-of-type .input,
    div.control:first-of-type .select select {
      border-radius: 3px 0 0 3px;
    }
    div.control:last-of-type .button,
    div.control:last-of-type .input,
    div.control:last-of-type .select select {
      border-radius: 0 3px 3px 0;
    }
    // Override margin of controls
    div.control:not(:first-of-type),
    div.control:not(:last-of-type) {
      margin: 0;
    }
    // Remove borders
    .is-left-border-none {
      border-left: none;
    }
    .is-right-border-none {
      border-right: none;
    }
  }
</style>
