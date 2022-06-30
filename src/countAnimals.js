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
  const exemplo = data.species.find((element) => element.name === specie);
  if (sex) {
    const teste = exemplo.residents.filter((element) => element.sex === sex);
    console.log('sex preenchido');
    return teste.length;
  }
  return exemplo.residents.length;
}

console.log(countAnimals({ specie: 'giraffes' }));

module.exports = countAnimals;
