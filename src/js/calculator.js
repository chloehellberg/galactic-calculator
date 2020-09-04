export default class Calculator {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
  }


  calculateMercury() {
    let mercuryAge = 0;
    let mercuryAgeCalculate = Math.floor(((this.earthAge * 365) / 88));
    
    return mercuryAgeCalculate;
  }

  calculateVenus() {
    let venusAge = 0;
    let venusAgeCalculate = Math.floor(((this.earthAge * 365) / 225));

    return venusAgeCalculate;
  }

  calculateMars() {
    let marsAge = 0;
    let marsAgeCalculate = Math.floor(((this.earthAge * 365) / 687));

    return marsAgeCalculate;
  }

  calculateJupiter() {
    let jupiterAge = 0;
    let jupiterAgeCalculate = Math.floor((this.earthAge / 12));

    return jupiterAgeCalculate;
  }

  calculateMercuryExpectancy() {
    let mercuryAge = this.calculateMercury();
    let mercuryExpectancy = (mercuryAge - 80);

    return mercuryExpectancy;
  }

  calculateVenusExpectancy() {
    let venusAge = this.calculateVenus();
    let venusExpectancy = (80 - venusAge);

    return venusExpectancy;
  }
}