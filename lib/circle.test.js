const Circle = require('./circle');

describe('circle', () => {
  test('should make an SVG logo with a circle shape', () => {
    const circleObject = new Circle('green', 'SVG', 'white');

    expect(circleObject.render())
    .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);
  });
});