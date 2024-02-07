/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numOne = Number(prompt("Insira o seu primeiro número:"))
let numTwo = Number(prompt("Insira o seu Segundo número:"))

let numSum = (numOne + numTwo)
let numSub = (numOne - numTwo)
let numMult = (numOne * numTwo)
let numDiv = (numOne / numTwo)
let numRest = (numOne % numTwo)
let isEven 
let isEqual


if((numSum % 2) == 0){
   isEven  = true
}else{
  isEven = false
}

if(numOne == numTwo){
  isEqual = true
}else{
  isEqual = false
}


alert(`A soma dos seus números é: ${numSum},
a subtração é: ${numSub},
a divisão é: ${numDiv},
e o resto é: ${numRest},
a soma dos seus números é par? ${isEven},
o seus números são iguais? ${isEqual}.`)

