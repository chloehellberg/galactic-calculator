export default class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
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
}