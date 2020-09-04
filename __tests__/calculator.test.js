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

describe('calculateMars', () => {

  test('should correctly calculate a persons current age on Mars', () => {
    let calculateMarsAge = new Calculator(30);
    expect(calculateMarsAge.calculateMars()).toEqual(15);
  })
})

describe('calculateJupiter', () => {

  test('should correctly calculate a persons current age on Jupiter', () => {
    let calculateJupiterAge = new Calculator(30);
    expect(calculateJupiterAge.calculateJupiter()).toEqual(2);
  })
})

describe('calculateMercuryExpectancy', () => {

  test('should correctly calculate how many years a person has lived past life expectancy on Mercury', () => {
    let calculateExpectancy = new Calculator(30, 80);
    expect(calculateExpectancy.calculateMercuryExpectancy()).toEqual(44);
  })
})

describe('calculateVenusExpectancy', () => {

  test('should correctly calculate how many years a person has lived past life expectancy on Venus', () => {
  let calculateExpectancy = new Calculator(30, 80);
  expect(calculateExpectancy.calculateVenusExpectancy()).toEqual(32);
  })
})