"use strict";

let expect = require("expect");
let codingInflector = require('../dist/coding_inflector');
let _ = require('underscore');

let snakeCaseString = 'foo_bar';
let camelCaseString = 'fooBar';
let dashCaseString = 'foo-bar';

let strings = {
  snakeCase: 'foo_bar',
  camelCase: 'fooBar',
  dashCase: 'foo-bar',
};

let stringValues = _.values(strings);

describe('coding_inflector', function() {
  for (let k in strings) {
    if (k === 'snakeCase') continue;

    let exampleString = strings[k];

    let methodName = (function() {
      switch(k) {
        case 'camelCase':
          return 'camelize';
        case 'dashCase':
          return 'dasherize';
      };
    })();

    describe(`#${methodName}`, function() {
      for (let i = 0, len = stringValues.length; i < len; i++) {
        let string = stringValues[i];

        it(`should convert ${string} to ${exampleString}`, function() {
          expect(codingInflector[methodName](string)).toBe(exampleString);
        });
      }
    });
  }

  describe('#decamelize', function() {
    it('should convert to snakecase', function() {
      expect(codingInflector.decamelize(camelCaseString)).toBe(snakeCaseString);
    });
  });
});
