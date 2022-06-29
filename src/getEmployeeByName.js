const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  } return {};
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
