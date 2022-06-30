const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const objeto = Object.keys(entrants).length;
  if (objeto === 0) {
    return 0;
  }
  const result = countEntrants(entrants);
  const valorChild = result.child * 20.99;
  const valorAdult = result.adult * 49.99;
  const valorSenior = result.senior * 24.99;
  const valorTotal = valorChild + valorAdult + valorSenior;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
