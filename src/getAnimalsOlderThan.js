const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const rAnimal = data.species.find((element) => element.name === animal);
  return rAnimal.residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
