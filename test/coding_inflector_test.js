var expect = require("expect");
var codingInflector = require('../dist/coding_inflector');

var underscoreString = 'foo_bar';
var camelizedString = 'fooBar';
var dasherizedString = 'foo-bar';

describe('coding_inflector', function() {
  describe('#camelize', function() {
    it('should work on underscore strings', function () {
      expect(codingInflector.camelize(underscoreString)).toBe(camelizedString);
    });

    it('should work on dashcase strings', function() {
      expect(codingInflector.camelize(dasherizedString)).toBe(camelizedString);
    });
  });

  describe('#decamelize', function() {
    it('should convert to snakecase', function() {
      expect(codingInflector.decamelize(camelizedString)).toBe(underscoreString);
    });
  });

  describe('#dasherize', function() {
    it('should work on snakecase strings', function() {
      expect(codingInflector.dasherize(underscoreString)).toBe(dasherizedString);
    });

    it('should work on camelcase strings', function() {
      expect(codingInflector.dasherize(camelizedString)).toBe(dasherizedString);
    });
  });
});
