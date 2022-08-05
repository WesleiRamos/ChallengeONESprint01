const DICTIONARY_ENCODE = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat',
  'E': 'ENTER',
  'I': 'IMES',
  'A': 'AI',
  'O': 'OBER',
  'U': 'UFAT'
}

const ENCODE_REGEX = /[aeiouAEIOU]/g

const DICTIONARY_DECODE = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u',
  'ENTER': 'E',
  'IMES': 'I',
  'AI': 'A',
  'OBER': 'O',
  'UFAT': 'U'
}

const DECODE_REGEX = new RegExp(
  Object.keys(DICTIONARY_DECODE).join('|'), 'g'
)

/**
 * Retorna uma função que traduz um texto com base em uma
 * expressão regular e em um dicionário.
 * @param {RegExp} regex 
 * @param {{ [key]: string }} dictionary 
 * @returns {{ (text: string) => string }}
 */
const TRANSLATE = (regex, dictionary) => text =>
  text.replace(regex, term => dictionary[term])

/**
 * Codifica um texto.
 * @param {string} text
 * @returns {string}
 */
export const ENCODER = TRANSLATE(ENCODE_REGEX, DICTIONARY_ENCODE)

/**
 * Decodifica um texto.
 * @param {string} text
 * @returns {string}
 */
export const DECODER = TRANSLATE(DECODE_REGEX, DICTIONARY_DECODE)
