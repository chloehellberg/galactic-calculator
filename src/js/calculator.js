export default class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  calculateMercury() {
    let mercuryAge = 0;
    let mercuryAgeCalculate = Math.floor(((this.earthAge * 365) / 88));
    
    return mercuryAgeCalculate;
  }
}