const data = require('../data/zoo_data');

const dias = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const animais1 = ['lions', 'tigers', 'bears', 'penguins', 'otters'];
const animais2 = ['frogs', 'snakes', 'elephants', 'giraffes'];
const animaisTotal = [...animais1, ...animais2];

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return dias;
  }
  if (dias[scheduleTarget]) {
    return {
      [scheduleTarget]: dias[scheduleTarget],
    };
  }
  if (!animaisTotal.includes(scheduleTarget)) {
    return dias;
  }

  const animal = data.species.find((element) => element.name === scheduleTarget);
  return animal.availability;
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
