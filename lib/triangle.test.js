const Triangle = require('./triangle');

describe('triangle', () => {
  test('should make an SVG logo with a triangle shape', () => {
    const triangleObject = new Triangle('purple', 'SVG', '#013220');

    expect(triangleObject.render())
    .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,30 30,270 270,270" fill="purple" />
            <text x="150" y="165" font-size="60" text-anchor="middle" fill="#013220">SVG</text>
        </svg>`);
  });
});