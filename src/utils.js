export const addTypes = function (formly, types) {
  Object.keys(types).forEach(key => {
    formly.addType(
      // Convert title and camel case into kebab case
      key.split(/(?=[A-Z])/).map(x => x.toLowerCase()).join('-'),
      types[key]
    )
  })
}

export const wrapComponent = function (component, wrapper) {
  return {
    extends: wrapper,
    props: {
      wrappedComponent: {
        type: Object,
        default: () => component
      }
    }
  }
}

export const wrapElement = function (element, wrapper) {
  const wrapperEl = document.createElement(wrapper.tag)
  Object.keys(wrapper.properties).forEach(key => {
    wrapperEl.setAttribute(key, wrapper.properties[key])
  })
  wrapperEl.appendChild(element.cloneNode(true))
  element.parentNode.insertBefore(wrapperEl, element)
  element.remove()
}
