// elimina entradas repetidas

function filterUnique (x) {
  var uniqs = x.filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
  return uniqs
}

export default filterUnique
