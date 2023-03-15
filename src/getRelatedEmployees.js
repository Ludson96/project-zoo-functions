const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((e) => e.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const teste = [];
  if (isManager(managerId)) {
    data.employees.forEach((e) => {
      if (e.managers.includes(managerId)) {
        teste.push(`${e.firstName} ${e.lastName}`);
      }
    });
    return teste;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
