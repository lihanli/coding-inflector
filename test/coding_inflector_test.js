"use strict";

let expect = require("expect");
let codingInflector = require('../dist/coding_inflector');
let _ = require('underscore');

let strings = {
  snakeCase: 'foo_bar',
  camelCase: 'fooBar',
  dashCase: 'foo-bar',
};

let stringValues = _.values(strings);

describe('coding_inflector', function() {
  for (let k in strings) {
    let exampleString = strings[k];
    let methodName = (function() {
      switch(k) {
        case 'camelCase':
          return 'camelize';
        case 'dashCase':
          return 'dasherize';
        case 'snakeCase':
          return 'underscore';
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
});
