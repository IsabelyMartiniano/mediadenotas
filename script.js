let student = prompt("Oi Aluno! Qual o seu nome?")
let n1 = prompt("Qual a nota da sua primeira prova?")
let n2 = prompt("Qual a nota da sua segunda prova?")

let average = (Number(n1) + Number(n2)) / 2

let result = average > 7

average = average.toFixed(2)

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average)
  } else if (average < 3) {
    alert("Reprovado")
  } else {
    alert(student + ", estude para sua prova de recuperação! Sua média foi de: " +  average)
  }