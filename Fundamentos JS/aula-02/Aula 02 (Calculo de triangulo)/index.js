const base = prompt(`Calculo de triangulo
Digite a base do triangulo:`)

const altura = prompt(`Calculo triangulo
Digite a altura do triangulo:`)

const hipotenusa = prompt(`Calculo de área do triangulo
Digite a hipotenusa do triangulo:`)

let conta1 = parseFloat(base)
let conta2 = parseFloat(altura)
let conta3 = parseFloat(hipotenusa)

alert(`a área do triangulo é = ${conta1 * conta2 / 2}, e seu perimetro é de = ${conta1 + conta2 + conta3}`)

