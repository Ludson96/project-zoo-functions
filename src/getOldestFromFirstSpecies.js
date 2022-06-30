const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaboradora = data.employees.find((element) => element.id === id).responsibleFor[0];
  const animal = data.species.find((element) => element.id === colaboradora).residents;
  const idadeAnimal = animal.map((element) => element.age);
  const maiorIdade = Math.max(...idadeAnimal);
  const inforAnimal = animal.find((element) => element.age === maiorIdade);
  return Object.values(inforAnimal);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
