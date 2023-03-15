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
  if (entrants === undefined || Object.keys(entrants).length < 1) return 0;
  const result = countEntrants(entrants);
  const valorTotal = (result.child * 20.99) + (result.adult * 49.99) + (result.senior * 24.99);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
