export default {
    props: {
        form: Object,
        field: Object,
        model: Object,
        to: Object
    },
    data: () => ({
        state: {
            '$dirty': false,
            '$active': false
        }
    }),
    created () {
        this.initialize()
    },
    methods: {
        initialize () {
            this.$set(this.form, this.field.key, this.state);
        },
        getProperty (obj, path, defaultVal = undefined) {
            /**
             * Gets values from objects and sets defaults
             * For example: ({a: {b: {c: 1}}}, 'a/b/c') => 1
             */
            let value = defaultVal
            path.split('/').forEach((elem, i, arr) => {
                if (obj.hasOwnProperty(elem)) {
                    if (++i === arr.length)
                        value = obj[elem]
                    else
                        obj = obj[elem]
                }
            })
            return value
        },
        getFieldProperty (path, defaultVal = undefined) {
            return this.getProperty(this.field, path, defaultVal)
        },
        handleEvent (eventHandler) {
            if (typeof eventHandler === 'function') {
                eventHandler()
            }
        }
    }
}