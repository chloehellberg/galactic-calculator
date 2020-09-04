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
    let mercuryExpectancy = (this.lifeExpectancy - mercuryAge);
    return mercuryExpectancy;
  }

  mercurySentence() {
    let mercuryAge = this.calculateMercury();
    let mercuryAgeExpectancy = this.calculateMercuryExpectancy();
    let userSentence = `You are ${mercuryAge} years old and based on an 80 year life expectancy, are ${mercuryAgeExpectancy} years past that.`
    return userSentence;
  }


  //Venus Calculations
  calculateVenus() {
    let venusAgeCalculate = Math.floor(((this.earthAge * 365) / 225));
    return venusAgeCalculate;
  }

  calculateVenusExpectancy() {
    let venusAge = this.calculateVenus();
    let venusExpectancy = (this.lifeExpectancy - venusAge);
    return venusExpectancy;
  }




//Mars Calculations 
  calculateMars() {
    let marsAgeCalculate = Math.floor(((this.earthAge * 365) / 687));
    return marsAgeCalculate;
  }

  calculateMarsExpectancy() {
    let marsAge = this.calculateMars();
    let marsExpectancy = (this.lifeExpectancy - marsAge);
    return marsExpectancy;
  }




//Jupiter Calculations 
  calculateJupiter() {
    let jupiterAgeCalculate = Math.floor((this.earthAge / 12));
    return jupiterAgeCalculate;
  }

  calculateJupiterExpectancy() {
    let jupiterAge = this.calculateJupiter();
    let jupiterExpectancy = (this.lifeExpectancy - jupiterAge);
    return jupiterExpectancy;
  }
}