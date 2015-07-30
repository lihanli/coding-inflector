(function() {
  'use strict';

  var STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
  var STRING_UNDERSCORE_REGEXP_2 = (/\-|\s+/g);
  var STRING_DASHERIZE_REGEXP = (/[ _]/g);
  var STRING_DECAMELIZE_REGEXP = (/([a-z\d])([A-Z])/g);
  var STRING_CAMELIZE_REGEXP = /[_.-](\w|$)/g;

  var codingInflector = {
    camelize: function(str) {
      return str.replace(STRING_CAMELIZE_REGEXP, function(__, x) {
        return x.toUpperCase();
      });
    },

    decamelize: function(str) {
      return str.replace(STRING_DECAMELIZE_REGEXP, "$1_$2").toLowerCase();
    },

    underscore: function(str) {
      return str.replace(STRING_UNDERSCORE_REGEXP_1, "$1_$2").replace(STRING_UNDERSCORE_REGEXP_2, "_").toLowerCase();
    },

    dasherize: function(str) {
      return this.decamelize(str).replace(STRING_DASHERIZE_REGEXP, "-");
    }
  };

  if (typeof exports !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = codingInflector;
  } else {
    window.codingInflector = codingInflector;
  }
})();
