const data = require('../data/zoo_data');

const { species } = data;

// recebe localizações como parametro e adicionar no array o nome do animal caso seja true.
const location = (direction) => {
  const arrLocation = [];
  species.forEach((e) => {
    if (e.location === direction) {
      arrLocation.push(e.name);
    }
  });
  return arrLocation;
};

// retornar o resultado das localizações de cada animal
const allLocalization = () => {
  const result = {
    NE: location('NE'),
    NW: location('NW'),
    SE: location('SE'),
    SW: location('SW'),
  };
  return result;
};

// função caso tenha sex junto do includenames
const sexFunction = (names, sex) => {
  const arrNames = [];
  const testeFilter = species.filter((e) => e.name === names);
  const [teste] = testeFilter;
  const filtroSex = teste.residents.filter((e) => e.sex === sex);
  filtroSex.forEach((e) => arrNames.push(e.name));
  return arrNames;
};

// retorno do array sex
const returnSex = (sex, teste) => {
  const result = {
    NE: [{ lions: sexFunction('lions', sex) }, { giraffes: sexFunction('giraffes', sex) }],
    NW: [{ tigers: sexFunction('tigers', sex) },
      { bears: sexFunction('bears', sex) }, { elephants: sexFunction('elephants', sex) }],
    SE: [{ penguins: sexFunction('penguins', sex) }, { otters: sexFunction('otters', sex) }],
    SW: [{ frogs: sexFunction('frogs', sex) }, { snakes: sexFunction('snakes', sex) }],
  };
  return result;
};

// função para preencher os nomes do animais
const getNames = (names) => {
  const arrNames = [];
  const testeFilter = species.filter((e) => e.name === names);
  const [teste] = testeFilter;
  teste.residents.forEach((e) => arrNames.push(e.name));
  return arrNames;
};

// sorted e sex
const sorted = (sex) => {
  const result = {
    NE: [{ lions: sexFunction('lions', sex).sort() },
      { giraffes: sexFunction('giraffes', sex).sort() }],
    NW: [{ tigers: sexFunction('tigers', sex).sort() },
      { bears: sexFunction('bears', sex).sort() },
      { elephants: sexFunction('elephants', sex).sort() }],
    SE: [{ penguins: sexFunction('penguins', sex).sort() },
      { otters: sexFunction('otters', sex).sort() }],
    SW: [{ frogs: sexFunction('frogs', sex).sort() },
      { snakes: sexFunction('snakes', sex).sort() }],
  };
  return result;
};

// sorted
const sortedOnly = () => {
  const result = {
    NE: [{ lions: getNames('lions').sort() }, { giraffes: getNames('giraffes').sort() }],
    NW: [{ tigers: getNames('tigers').sort() },
      { bears: getNames('bears').sort() }, { elephants: getNames('elephants').sort() }],
    SE: [{ penguins: getNames('penguins').sort() }, { otters: getNames('otters').sort() }],
    SW: [{ frogs: getNames('frogs').sort() }, { snakes: getNames('snakes').sort() }],
  };
  return result;
};

// Função caso tenha includeNames no parametro passado
const includeNames = (valor) => {
  if (Object.keys(valor).includes('sex') && Object.keys(valor).includes('sorted')) {
    const { sex } = valor; return sorted(sex);
  } if (Object.keys(valor).includes('sex')) {
    const { sex } = valor; return returnSex(sex);
  }
  if (Object.keys(valor).includes('sorted')) {
    return sortedOnly();
  }
  const result = {
    NE: [{ lions: getNames('lions') }, { giraffes: getNames('giraffes') }],
    NW: [{ tigers: getNames('tigers') },
      { bears: getNames('bears') }, { elephants: getNames('elephants') }],
    SE: [{ penguins: getNames('penguins') }, { otters: getNames('otters') }],
    SW: [{ frogs: getNames('frogs') }, { snakes: getNames('snakes') }],
  };
  return result;
};

function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames')) {
    return allLocalization();
  }
  if (Object.keys(options).includes('includeNames')) {
    return includeNames(options);
  }
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
