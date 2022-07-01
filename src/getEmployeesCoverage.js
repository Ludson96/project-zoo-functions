// const data = require('../data/zoo_data');
// // function species
// const functionSpecies = (arr) => {
//   const arrTeste = [];
//   arr.forEach((e) => {
//     for (let i = 0; i < data.species.length; i += 1) {
//       // console.log(`Esse é meu e: ${e}`);
//       // console.log(`Esse é meu id: ${data.species[i].id}`);
//       if (e === data.species[i].id) {
//         arrTeste.push(data.species[i].name);
//       }
//     }
//   });
//   return arrTeste;
// };

// // função para retornar o location
// const functionLocation = (arr) => {
//   const arrTeste = [];
//   arr.forEach((e) => {
//     for (let i = 0; i < data.species.length; i += 1) {
//       // console.log(`Esse é meu e: ${e}`);
//       // console.log(`Esse é meu id: ${data.species[i].id}`);
//       if (e === data.species[i].id) {
//         arrTeste.push(data.species[i].location);
//       }
//     }
//   });
//   return arrTeste;
// };

// // função para diminuir linhas
// const testeFunction = (id, firstName, lastName, responsibleFor) => {
//   const teste = {
//     id,
//     fullName: `${firstName} ${lastName}`,
//     species: functionSpecies(responsibleFor),
//     locations: functionLocation(responsibleFor),
//   };
//   return teste;
// };

// //  função para todos
// const todos = (responsibleFor) => {
//   const arrTeste = [];
//   data.employees.forEach((e) => {
//     arrTeste.push({
//       id: e.id,
//       fullName: `${e.firstName} ${e.lastName}`,
//       species: functionSpecies(e.responsibleFor),
//       locations: functionLocation(e.responsibleFor),
//     });
//   });
//   return arrTeste;
// };

// // function getEmployeesCoverage(objeto) {
// //   if (objeto === undefined) {
// //     return todos();
// //   }
// //   const key = Object.keys(objeto);
// //   const value = Object.values(objeto);
// //   if (key[0] === 'name') {
// //     const col = data.employees.find((e) => e.firstName === value[0] || e.lastName === value[0]);
// //     return testeFunction(col.id, col.firstName, col.lastName, col.responsibleFor);
// //   }
// //   if (key[0] === 'id') {
// //     if (value[0] === 'Id inválido') {
// //       throw new Error('Informações inválidas');
// //     }
// //     const col = data.employees.find((e) => e.id === value[0]);
// //     return testeFunction(col.id, col.firstName, col.lastName, col.responsibleFor);
// //   }
// // }

// // console.log(getEmployeesCoverage());

// // module.exports = getEmployeesCoverage;
