import Calculator from './../src/js/calculator';

describe('calculateMercury', () => {

  test('should correctly calculate a persons current age on Mercury', () => {
    let calculateMercuryAge = new Calculator(30);
    expect(calculateMercuryAge.calculateMercury()).toEqual(124);
  })
})

describe('calculateVenus', () => {

  test('should correctly calculate a persons current age on Venus', () => {
    let calculateVenusAge = new Calculator(30);
    expect(calculateVenusAge.calculateVenus()).toEqual(48);
  })
})

