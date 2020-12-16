const counterVogal = require('./counterVogal');

describe('Counter Vogal Challenge', () => {
  it('should count vogals', () => {
    const result = counterVogal('batetitotu');

    expect(result).toEqual(5);
  });

  it('should count vogals with multiple words string', () => {
    const result = counterVogal('bate titotu');

    expect(result).toEqual(5);
  });

  it('should throw an exception if a string is not provided', () => {
    

    expect(() => counterVogal(['yay'])).toThrow(TypeError);
  });

  it('should count lowercase and uppercase vogals', () => {
    const result = counterVogal('bAtetITotU');

    expect(result).toEqual(5);
  });
});

