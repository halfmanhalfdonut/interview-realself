let justify = require('./justify');

describe('UTIL: Justify', () => {
  it('Justifies a line of text', () => {
    let expected = 'The  quick  brown  fox  jumps  over  the  lazy  dog.';
    let input = 'The quick brown fox jumps over the lazy dog.';

    expect(justify(input, 52)).toBe(expected);
  });

  it('Returns a line unchanged if the length is shorter', () => {
    let expected = 'This is a string';

    expect(justify(expected, 2)).toBe(expected);
  });

  it('Returns the line unchanged if an invalid length is passed', () => {
    let expected = 'Test string';

    expect(justify(expected, 'a')).toBe(expected);
  });

  it('Returns an empty string if no line is provided', () => {
    let expected = '';

    expect(justify(null, 2)).toBe(expected);
  });
});
