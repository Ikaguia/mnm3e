/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

export default function() {
  Hooks.on("init", () => {
    // If you need to add Handlebars helpers, here are a few useful examples:
    Handlebars.registerHelper('concat', function() {
      var outStr = '';
      for (var arg in arguments) {
        if (typeof arguments[arg] != 'object') {
          outStr += arguments[arg];
        }
      }
      return outStr;
    });

    Handlebars.registerHelper('toLowerCase', function(str) {
      return str.toLowerCase();
    });

    Handlebars.registerHelper('isUndefined', function(val) {
      return val === undefined;
    });

    Handlebars.registerHelper('isDefined', function(val) {
      return val !== undefined;
    });

    Handlebars.registerHelper('isNull', function(val) {
      return val === null;
    });

    Handlebars.registerHelper('isNonNull', function(val) {
      return val !== null;
    });

    Handlebars.registerHelper('isEmpty', function(val) {
      return val === "";
    });

    Handlebars.registerHelper('isNonEmpty', function(val) {
      return val !== undefined && val !== null && val !== "";
    });
  });
}