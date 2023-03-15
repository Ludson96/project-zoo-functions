const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const teste = {};
    data.species.forEach((element) => {
      teste[element.name] = element.residents.length;
    });
    return teste;
  }
  const { specie, sex } = animal;
  const speciesFound = data.species.find((element) => element.name === specie);
  if (sex) {
    const speciesSex = speciesFound.residents.filter((element) => element.sex === sex);
    return speciesSex.length;
  }
  return speciesFound.residents.length;
}

module.exports = countAnimals;
