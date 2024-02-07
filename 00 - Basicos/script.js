//Capturando entrada de dados, e imprimindo na tela
/*
let name = prompt("Qual o seu nome?")
alert("Olá, " + name)
*/

// Recebendo dois números do usuário, transformando de string para int, e somando eles.
/*
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

Type conversion (string to number)

alert("A soma dos dois números é: " + (Number(numberOne) + Number(numberTwo)))
*/

/*
let numOne = prompt("Primeiro número: ")
let numTwo = prompt("Segundo número: ")

alert("A soma dos números é: " + (Number(numOne) + Number(numTwo)))
alert("A subtração dos números é: " + (Number(numOne) - Number(numTwo)))
alert("A multiplicação dos números é: " + (Number(numOne) * Number(numTwo)))
alert("A divisão dos números é: " + (Number(numOne) / Number(numTwo)))
alert("O resto da divisão dos números é: " + (Number(numOne) % Number(numTwo)))
*/

//Calculo de media, com if
/*
let name = "João"
let n1 = 7.5, n2 = 7.8, n3 = 5.2, n4 = 6

let average = (n1 + n2 + n3 + n4)/4
average = average.toFixed(2)

if(media > 6){
  alert("A média final do: " + name + " é: " + average + ", parabéns, você passou!.")
}else{
  alert("A média final do: " + name + " é: " + average + ", não desanime, ainda tem como passar de ano.")
}
*/

// array + for
/*
let items= []

for (let i = 1; i<11 ; i++){
  if(i<10){
    items[i-1] = prompt("Digite o item número 0" + i)
  }else{
    items[i-1] = prompt("Digite o item número " + i)
  }
  
}
*/

//Estrutura de loop while
/*
alert(items)

const randomNumber = (Math.round(Math.random() * 10))

alert(randomNumber)
let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10"), i = 1

    while(Number(result) !== randomNumber){
      result = prompt("Que pena, número errado, tente novamente: ")
      i++
  }

alert("Parabéns! Você adivinhou o número em " + i + " Tentativas")
*/

// Menu
/*
let option, items = []


while(option != 3){

  option =  Number(prompt(`
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))
  
  if(option == 1){
    let item = prompt("Digite o nome do item");
    items.push(item)
  }else if (option == 2){ 
    if(items.length > 0){
      alert(items)
    }else{
      alert("Não existem itens cadastrados.")
    }
  }
}
*/

// lista de pacientes
/*
const patients = [
  {
    name: "Luiz",
    age:20,
    weight: 100,
    height: 190,
  },

  {
    name: "Carlos",
    age:14,
    weight: 65,
    height: 165,
  },

  {
    name: "Ronielson",
    age:54,
    weight: 84,
    height: 171
  }
]

const patientNames = []

//Nesse for eu estou atribuindo cada objeto dentro do patients para a minha variável patient, 
//e então adicionando o nome no meu array patientNames

for(let patient of patients){
  patientNames.push(patient.name)
  alert(`O ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg, e mede ${patient.height}cm.`)
}

alert(patientNames)

*/

const patients = [
  {
    name: "Luiz",
    age:20,
    weight: 100,
    height: 190,
  },

  {
    name: "Carlos",
    age:14,
    weight: 65,
    height: 165,
  },

  {
    name: "Ronielson",
    age:54,
    weight: 84,
    height: 171
  }
]


function printPatientIMC(patient){
alert(`Paciente ${patient.name} possui o IMC de
${(patient.weight / (((patient.height / 100) ** 2))).toFixed(2)}
`)
}

for (let patient of patients){
  printPatientIMC(patient)
}