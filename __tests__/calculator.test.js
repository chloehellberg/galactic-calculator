import Calculator from './../src/js/calculator';

describe('calculateMercury', () => {

  test('should correctly calculate a persons current age on Mercury', () => {
    let calculateMercuryAge = new Calculator();
    let earthAge = 30;
    expect(calculateMercuryAge.calculateMercury()).toEqual(124);
  })
})