export default class Calculator {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
  }


  //Mercury Calculations
  calculateMercury() {
    let mercuryAgeCalculate = Math.floor(((this.earthAge * 365) / 88));
    return mercuryAgeCalculate;
  }

  calculateMercuryExpectancy() {
    let mercuryAge = this.calculateMercury();
    let mercuryExpectancy = (80 - mercuryAge);
    return mercuryExpectancy;
  }

  // mercurySentences() {
  //   let userSentence
  // }


  //Venus Calculations
  calculateVenus() {
    let venusAgeCalculate = Math.floor(((this.earthAge * 365) / 225));
    return venusAgeCalculate;
  }

  calculateVenusExpectancy() {
    let venusAge = this.calculateVenus();
    let venusExpectancy = (80 - venusAge);
    return venusExpectancy;
  }




//Mars Calculations 
  calculateMars() {
    let marsAgeCalculate = Math.floor(((this.earthAge * 365) / 687));
    return marsAgeCalculate;
  }

  calculateMarsExpectancy() {
    let marsAge = this.calculateMars();
    let marsExpectancy = (80 - marsAge);
    return marsExpectancy;
  }




//Jupiter Calculations 
  calculateJupiter() {
    let jupiterAgeCalculate = Math.floor((this.earthAge / 12));
    return jupiterAgeCalculate;
  }

  calculateJupiterExpectancy() {
    let jupiterAge = this.calculateJupiter();
    let jupiterExpectancy = (80 - jupiterAge);
    return jupiterExpectancy;
  }
}