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

    it('should work on dasherized strings', function() {
      expect(codingInflector.camelize(dasherizedString)).toBe(camelizedString);
    });
  });

  describe('#decamelize', function() {
    it('should convert to underscore', function() {
      expect(codingInflector.decamelize(camelizedString)).toBe(underscoreString);
    });
  });
});