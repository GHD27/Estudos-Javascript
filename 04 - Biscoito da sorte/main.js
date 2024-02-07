const screen1 = document.querySelector('.main')
const screen2 = document.querySelector('.main_2')

// função callback
function handleTryClick(event) {
  let randomNumber = Math.round(Math.random() * 10)
  
  event.preventDefault()

  randomMessage(randomNumber)

  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}


//Verificando os clicks no botao, e caso ocorra faca alguma coisa.
const btnTry = document.querySelector('#fortune-cookie')
const btnReset = document.querySelector('#fortune-button')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
})

//Funcao rudimentar para conseguir gerar mensagens diferentes no biscoito
function randomMessage(randomNumber){

  if(randomNumber == 1){
    document.getElementById('fortune-message').innerText = 'A vida trará coisas boas se tiver paciência.'
    return
  }else if(randomNumber == 2){
    document.getElementById('fortune-message').innerText = 'Não compense na ira o que lhe falta na razão.'
    return
  }else if(randomNumber == 3){
    document.getElementById('fortune-message').innerText = 'A maior de todas as torres começa no solo.'
    return
  }else if(randomNumber == 4){
    document.getElementById('fortune-message').innerText = 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'
    return
  }else if(randomNumber == 5){
    document.getElementById('fortune-message').innerText = 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.'
    return
  }else if(randomNumber == 6){
    document.getElementById('fortune-message').innerText = 'Amizade e Amor são coisas que se unem num piscar de olhos.'
    return
  }else if(randomNumber == 7){
    document.getElementById('fortune-message').innerText = 'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.'
    return
  }else if(randomNumber == 8){
    document.getElementById('fortune-message').innerText = 'A sorte favorece a mente bem preparada.'
    return
  }else if(randomNumber == 9){
    document.getElementById('fortune-message').innerText = 'A raiva da motivação sem proposito.'
    return
  }else{
    document.getElementById('fortune-message').innerText = 'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.'
    return
  }
}