export default class Calculator {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsByPlanet = {
      mercury: 88,
      venus: 225,
      mars: 687,
      jupiter: 12
    }
  }



  //Refactored Calculator for All Planets
  calculateAge(planetName) {
    let calculateAge = Math.floor(((this.earthAge * 365) / this.yearsByPlanet[planetName]));
    if(planetName === 'jupiter') {
      calculateAge = Math.floor(this.earthAge  / this.yearsByPlanet[planetName]);
    }
    return calculateAge;
  }


  //Refactored Expectancy Calculator for All Planets
  calculateExpectancy(planetName) {
    let planetAge = this.calculateAge(planetName);
    let planetExpectancy = (this.lifeExpectancy - planetAge);
    return planetExpectancy;
  }

 //Refactored Sentences for All Planets
 updateSentence(planetName) {
   let firstPart = this.calculateAge(planetName);
   let secondPart = this.calculateExpectancy(planetName);
   let userSentence = `You are ${firstPart} years old and based on an 80 year life expectancy, you will live ${secondPart} more years.`
    return userSentence;
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

  venusSentence() {
    let venusAge = this.calculateVenus();
    let venusAgeExpectancy = this.calculateVenusExpectancy();
    let userSentence = `You are ${venusAge} years old and based on an 80 year life expectancy, you will live ${venusAgeExpectancy} more years.`
    return userSentence;
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

  marsSentence() {
    let marsAge = this.calculateMars();
    let marsAgeExpectancy = this.calculateMarsExpectancy();
    let userSentence = `You are ${marsAge} years old and based on an 80 year life expectancy, you will live ${marsAgeExpectancy} more years.`
    return userSentence;
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
  
  jupiterSentence() {
    let jupiterAge = this.calculateJupiter();
    let jupiterAgeExpectancy = this.calculateJupiterExpectancy();
    let userSentence = `You are ${jupiterAge} years old and based on an 80 year life expectancy, you will live ${jupiterAgeExpectancy} more years.`
    return userSentence;
  }
}

