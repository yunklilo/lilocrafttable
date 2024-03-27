let num1 = 2 
const num2 = 3
var msg = "ola amugos! Esse é o numero:"

console.log(msg , num1)
console.log( num1 + num2)
console.log(typeof num1)
console.log(typeof msg)

function Somer () {
    n1 = 2
    n2=5
    console.log(" O resultado é ", n1 + n2)

}

 Somer ()
 function somarcomparametro (n1 , n2){
    let resultado = " o resultado é:" + n1 + n2
    console.log(resultado);

 }
  somarcomparametro(16 , 30 )
  somarcomparametro(70, 54)

  const teste = (n) => {

     let resultado = n % 2

     if (resultado == 1){
        return "numero impar"
     }
        return " numero par"
     }
  
   console.log(teste (2))
   console.log( teste(7))
   teste (5)

  