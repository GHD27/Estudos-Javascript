/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
const students = [
{
  name: "João",
  n1: 11,
  n2: 11,
  average: 0
},

{
  name: "Pedro",
  n1: 11,
  n2: 11
},

{
  name: "Luis",
  n1: 11,
  n2: 11
},

{
  name: "Kevin",
  n1: 11,
  n2: 11
}
]

for (let student of students){

  while(student.n1 > 10 || student.n2 > 10 || Number.isNaN(student.n1) === true || Number.isNaN(student.n2) === true || student.n1 < 0 || student.n2 < 0){
    student.n1 = Number(prompt(`Digite a nota n1 (de 1 a 10) do ${student.name}: `))
    student.n2 = Number(prompt(`Digite a nota n2 (de 1 a 10) do ${student.name}: `))
    student.average = calcAverage(student)
    if(student.n1 > 10 || student.n2 > 10 || Number.isNaN(student.n1) === true || Number.isNaN(student.n2) === true || student.n1 < 0 || student.n2 < 0){
      alert("Nota digitada invalida!!! Digite a nota novamente.")
    }else{
      alert (`A média do(a) aluno(a) ${student.name} é: ${student.average}`)
      if(student.average >= 7){
        alert(`Parabéns ${student.name}, você foi aprovado(a)!!`)
      }else{
        alert(`Não foi dessa vez ${student.name}, não desista!`)
      }
      
    }
  }
}

function calcAverage (student){
 let average = ((student.n1 + student.n2)/2)
 return average;
}