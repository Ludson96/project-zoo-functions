const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificando se ao passar nenhum valor retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verificando se ao passar um parâmetro que não é uma string ele retorna mensagem de erro', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verificando se ao passarmos a string \'count\' o que retorna', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verificando se ao passarmos a string \'names\' o que retorna', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verificando se ao passarmos a string \'averageAge\' o que retorna', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Passada uma string que não contempla uma funcionalidade deve retorna', () => {
    expect(handlerElephants('qualquercoisa')).toBeNull();
  });
  it('Passada uma string que não contempla uma funcionalidade deve retorna', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
