import createStore from './store.js'
import { ENCODER, DECODER } from './dictionary.js'

const store = createStore({
  input: '',
  output: '',
  showOutput: false
})

/**
 * Codifica ou decodifica um texto com base na função fornecida.
 * @param {function} translateFn Função que faz a codificação ou decodificação.
 * @returns {() => void} Função que codifica ou decodifica um texto.
 */
const encodeDecode = translateFn => () => {
  const text = translateFn(store.input.get())
  store.output.set(text)
  store.showOutput.set(true)
}

document
  .querySelector('#codificar')
  .addEventListener('click', encodeDecode(ENCODER))

document
  .querySelector('#decodificar')
  .addEventListener('click', encodeDecode(DECODER))

document
  .querySelector('#copiar')
  .addEventListener('click', () => {
    navigator.clipboard.writeText(store.output.get())
  })