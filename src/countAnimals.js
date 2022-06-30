const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const teste = {};
    data.species.forEach((element) => {
      teste[element.name] = element.residents.length;
    });
    return teste;
  }
  const { specie, sex = 'male', sex: a1 = 'female' } = animal;
  const exemplo = data.species.find((element) => element.name === specie);
  const final = exemplo.residents.filter((element) => element.sex === sex && element.sex === a1);
  console.log(a1);
  console.log(specie);
  console.log(sex);
  console.log(final);
  return final.length;
}

console.log(countAnimals({ specie: 'giraffes' }));

module.exports = countAnimals;
