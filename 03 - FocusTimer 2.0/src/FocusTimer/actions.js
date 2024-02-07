//Actions é onde eu manipulo o que acontece quando um botao é apertado no meu aplicativo
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'

//Verifica se a aplicacao está rodando, e toma um rumo dependendo se a resposta for sim ou nao
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  //Caso a minha aplicacao esteja rodando, eu estou pegando o meu playButton e escondendo ele, e meu pause button aparece
  if(state.isRunning){
    el.playButton.classList.add('hide')
    el.pauseButton.classList.remove('hide')
  }else{
    el.playButton.classList.remove('hide')
    el.pauseButton.classList.add('hide')
  }

  timer.countdown()
  sounds.buttonPressAudio.play()
}

//Reseta o estado da minha aplicacao, voltando ao ponto de origem
export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function plus(){
  let minutes = parseInt(el.minutes.textContent)
  minutes = minutes + 1
  let seconds = 0

  minutes = minutes > 60 ? 60 : minutes
  
  timer.updateDisplay(minutes, seconds)
}

export function minus(){
  let minutes = parseInt(el.minutes.textContent)
  minutes = minutes - 1
  let seconds = 0

  minutes = minutes < 1 ? 1 : minutes
  
  timer.updateDisplay(minutes, seconds)
}

export function toggleForestMusic() {
  state.isForestMute = document.documentElement.classList.toggle('music-on')

  if(state.isForestMute){
    el.forestSound.classList.add('on')
    sounds.forestAudio.play()
    return
  }

  el.forestSound.classList.remove('on')
  sounds.forestAudio.pause()
  
}

export function toggleRainMusic() {
  state.isRainMute = document.documentElement.classList.toggle('music-on')

  if(state.isRainMute){
    el.rainSound.classList.add('on')
    sounds.rainAudio.play()
    return
  }

  el.rainSound.classList.remove('on')
  sounds.rainAudio.pause()
  
}

export function toggleStoreMusic() {
  state.isStoreMute = document.documentElement.classList.toggle('music-on')

  if(state.isStoreMute){
    el.storeSound.classList.add('on')
    sounds.storeAudio.play()
    return
  }

  el.storeSound.classList.remove('on')
  sounds.storeAudio.pause()
  
}

export function toggleFireMusic() {
  state.isFireMute = document.documentElement.classList.toggle('music-on')

  if(state.isFireMute){
    el.fireSound.classList.add('on')
    sounds.fireAudio.play()
    return
  }

  el.fireSound.classList.remove('on')
  sounds.fireAudio.pause()
}