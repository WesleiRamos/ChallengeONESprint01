/**
 * Cria um valor observável.
 * @param {*} value
 * @returns {observer}
 */
const observe = value => {
  const observers = [ ]

  return {
    get() {
      return value
    },

    set(newValue) {
      if (value === newValue)
        return

      value = newValue
      this.observers()
    },

    observers() {
      observers.forEach(observer => observer(value))
    },

    observe(observer) {
      observers.push(observer)
    },

    unobserve(observer) {
      observers.splice(observers.indexOf(observer), 1)
    }
  }
}

export default observe
