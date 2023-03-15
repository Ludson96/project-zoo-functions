const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultado = [];
  if (ids) {
    for (let index = 0; index < ids.length; index += 1) {
      resultado.push(data.species.find((element) => element.id === ids[index]));
    }
  }
  return resultado;
}

module.exports = getSpeciesByIds;
