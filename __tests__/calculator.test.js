import Calculator from './../src/js/calculator';

describe('Calculate Age For Each Planet', () => {
  let calculateAge = new Calculator(30);
  
test('should correctly calculate a persons current age on Mercury', () => {
    expect(calculateAge.calculateMercury()).toEqual(124);
  })

test('should correctly calculate a persons current age on Venus', () => {
    expect(calculateAge.calculateVenus()).toEqual(48);
  })

test('should correctly calculate a persons current age on Mars', () => {
    expect(calculateAge.calculateMars()).toEqual(15);
  })

test('should correctly calculate a persons current age on Jupiter', () => {
    expect(calculateAge.calculateJupiter()).toEqual(2);
  })
})


describe('Calculate Time Left on Each Planet', () => {
  let calculateExpectancy = new Calculator(30, 80);
  
test('should correctly calculate how many years a person has lived past life expectancy on Mercury', () => {
    expect(calculateExpectancy.calculateMercuryExpectancy()).toEqual(-44);
  })
test('should correctly calculate how many years a person has left to live on Venus based on life expectancy', () => {
    expect(calculateExpectancy.calculateVenusExpectancy()).toEqual(32);
  })
test('should correctly calculate how many years a person has left to live on Mars based on life expectancy', () => {
    expect(calculateExpectancy.calculateMarsExpectancy()).toEqual(65);
  })
test('should correctly calculate how many years a person has left to live on Jupiter based on life expectancy', () => {
    expect(calculateExpectancy.calculateJupiterExpectancy()).toEqual(78);
  })
})



describe('User Sentences', () => {
  let userSentence = new Calculator(30, 80);

test('should return sentence about Mercury using template literals', () => {
    expect(userSentence.mercurySentence()).toEqual("You are 124 years old and based on an 80 year life expectancy, are -44 years past that.");
  })

test('should return sentence about Venus using template literals', () => {
    expect(userSentence.venusSentence()).toEqual("You are 48 years old and based on an 80 year life expectancy, you will live 32 more years.");
  })

test('should return sentence about Mars using template literals', () => {
    expect(userSentence.marsSentence()).toEqual("You are 15 years old and based on an 80 year life expectancy, you will live 65 more years.");
  })
  
test('should return sentence about Jupiter using template literals', () => {
    expect(userSentence.jupiterSentence()).toEqual("You are 2 years old and based on an 80 year life expectancy, you will live 78 more years.");
  })
})