const SOUND_EFFECT = new Audio('./assets/audio/sound-effect.mp3')

/**
 * Dorme por um período de tempo.
 * @param {number} ms 
 * @returns {Promise<void>}
 */
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms))


/**
 * Toca um som e pisca a tela para mostrar que o texto
 * foi copiado.
 */
const copyEffect = async () => {
  SOUND_EFFECT.play()
  document.body.style.opacity = 0.3
  await sleep(100)
  document.body.style.opacity = 1
}

export default copyEffect
