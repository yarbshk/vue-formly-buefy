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

export const createDocumentFragment = function (fragment, isRootNode = false) {
  const documentFragment = document
    .createRange()
    .createContextualFragment(fragment)
  return isRootNode ? documentFragment.firstChild : documentFragment
}

export const wrapElement = function (element, wrapper) {
  const wrapperElement = createDocumentFragment(wrapper, true)
  element.parentNode.insertBefore(wrapperElement, element)
  wrapperElement.appendChild(element)
  return wrapperElement
}
