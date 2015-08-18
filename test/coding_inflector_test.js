'use strict';

const expect = require("expect");
const codingInflector = require('../dist/coding_inflector');
const _ = require('underscore');

const strings = {
  snakeCase: 'foo_bar',
  camelCase: 'fooBar',
  dashCase: 'foo-bar',
};

const stringValues = _.values(strings);

describe('codingInflector', function() {
  for (const k in strings) {
    const exampleString = strings[k];
    const methodName = (function() {
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
        const string = stringValues[i];

        it(`should convert ${string} to ${exampleString}`, function() {
          expect(codingInflector[methodName](string)).toBe(exampleString);
        });
      }
    });
  }
});
