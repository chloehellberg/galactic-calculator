export default class Calculator {
  constructor() {
    this.earthAge = 30;
  }

  calculateMercury() {
    let mercuryAge = 0;
    let mercuryAgeCalculate = Math.floor(((this.earthAge * 365) / 88));
    
    return mercuryAgeCalculate;
    
  }
}