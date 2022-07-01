const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste passando nenhum argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Teste com o argumento \'Monday\'', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Teste com o argumento \'Tuesday\'', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste se o primeiro argumento não for um dia da semana', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/The day must be valid. Example: Monday/);
  });
  it('Teste se o segundo argumento não possui hora correta', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/The hour should represent a number/);
  });
  it('Teste se o segundo argumento possui AM ou PM correto', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste se o segundo argumento possui hora entre 0 a 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Teste se o segundo argumento possui minutor entre 0 a 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
