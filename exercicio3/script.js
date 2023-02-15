// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

const arrayNumeros = [20, 12, 54, 32, 76, 34, 2303]
const arrayNumerosCopia = arrayNumeros.slice()

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayNumerosCopia.push(1313)
console.log(arrayNumerosCopia)
console.log(arrayNumeros)

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
const arrayStrings = ['maca', 'laranja', 'banana', 'pera']
const arrayStringsCopia = arrayStrings.slice()
arrayStringsCopia.pop('pera')
console.log(arrayStringsCopia)
console.log(arrayStrings)

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.

const arrayMisto = [20, 30, 'Casa', 'Praia', true, false]
const arrayMistoCopia = arrayMisto.slice()
arrayMistoCopia.splice(1, 1)
console.log(arrayMistoCopia)
console.log(arrayMisto)
