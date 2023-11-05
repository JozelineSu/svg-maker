const Square = require('./square');

describe('square', () => {
  test('should make an SVG logo with a square shape', () => {
    const squareObject = new Square('black', 'SVG', 'pink');

    expect(squareObject.render())
    .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="black" />
            <text x="100" y="125" font-size="90" text-anchor="middle" fill="pink">SVG</text>
        </svg>`);
  });
});