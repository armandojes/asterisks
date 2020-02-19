import makeAsterisks from './make_asterisks'

function getNumber (num) {
  const result = parseInt(num)
  return isNaN(result)
    ? 'Entrada no valida'
    : makeAsterisks(result)
}

export default getNumber
