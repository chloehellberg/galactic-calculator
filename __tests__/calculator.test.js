import Calculator from './../src/js/calculator';

describe('Calculator', () => {

  test('should correctly calculate a persons age on Mercury', () => {
    const mercuryAge = new Calculator (30);
    expect(mercuryAge.calculateMercury).toEqual(124);
  })
})