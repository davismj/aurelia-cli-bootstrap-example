define('app',["exports", "bootstrap"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.items = [{
      title: "Charmander",
      text: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
    }, {
      title: "Squirtle",
      text: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
    }, {
      title: "Bulbasaur",
      text: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
    }];
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><div class=\"container\"><h1>Pokémon</h1><div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" repeat.for=\"item of items\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading-${$index}\"><h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-${$index}\" aria-expanded=\"true\" aria-controls=\"collapse-${$index}\">${item.title}</a></h4></div><div id=\"collapse-${$index}\" class=\"panel-collapse collapse ${$first && 'in'}\" role=\"tabpanel\" aria-labelledby=\"heading-${index}\"><div class=\"panel-body\">${item.text}</div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map