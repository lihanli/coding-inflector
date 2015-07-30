var expect = require("expect");
var codingInflector = require('../dist/coding_inflector');

var snakeCaseString = 'foo_bar';
var camelCaseString = 'fooBar';
var dashCaseString = 'foo-bar';

describe('coding_inflector', function() {
  describe('#camelize', function() {
    it('should work on underscore strings', function () {
      expect(codingInflector.camelize(snakeCaseString)).toBe(camelCaseString);
    });

    it('should work on dashcase strings', function() {
      expect(codingInflector.camelize(dashCaseString)).toBe(camelCaseString);
    });

    it("shouldn't change camelcase strings", function() {
      expect(codingInflector.camelize(camelCaseString)).toBe(camelCaseString);
    });
  });

  describe('#decamelize', function() {
    it('should convert to snakecase', function() {
      expect(codingInflector.decamelize(camelCaseString)).toBe(snakeCaseString);
    });
  });

  describe('#dasherize', function() {
    it('should work on snakecase strings', function() {
      expect(codingInflector.dasherize(snakeCaseString)).toBe(dashCaseString);
    });

    it('should work on camelcase strings', function() {
      expect(codingInflector.dasherize(camelCaseString)).toBe(dashCaseString);
    });

    it('shouldnt change dashcase strings', function() {
      expect(codingInflector.dasherize(dashCaseString)).toBe(dashCaseString);
    })
  });
});
