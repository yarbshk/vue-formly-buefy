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
  const wrapperElement = document
    .createRange()
    .createContextualFragment(wrapper)
    .firstChild
  element.parentNode.insertBefore(wrapperElement, element)
  wrapperElement.appendChild(element)
  return wrapperElement
}

export const classNameToCSSSelector = (className) => {
  const classes = className.toString().split(' ').filter(x => x)
  if (classes.length) return `.${classes.join('.')}`
}

export const idToCSSSelector = (id) => {
  if (id) return `#${id.toString()}`
}

export const getCSSSelector = function (node) {
  const querySelector = idToCSSSelector(node.id) ||
    classNameToCSSSelector(node.className) ||
    node.tagName.toLowerCase()
  return querySelector
}

export const removeIntermediateElement = function (parent, child) {
  const selector = getCSSSelector(child)
  const node = parent.querySelector(selector)
  while (node.hasChildNodes()) parent.appendChild(node.firstChild)
  node.remove()
}
