/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

// NAMESPACE OBJECT: ./src/strategies.ts
var strategies_namespaceObject = {};
__webpack_require__.r(strategies_namespaceObject);
__webpack_require__.d(strategies_namespaceObject, {
  "UCB": () => (UCB),
  "bernoulliThompson": () => (bernoulliThompson),
  "epsilonGreedy": () => (epsilonGreedy),
  "gaussianThompson": () => (gaussianThompson)
});

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/args.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable @typescript-eslint/no-explicit-any */

var Args = /*#__PURE__*/function () {
  function Args() {
    _classCallCheck(this, Args);
  }

  _createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;

      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]); // Check that the default value actually appears in the options.

      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }

      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);

          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;

          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }

          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c; // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.


      var spec_without_default = _objectSpread({}, spec); // Avoid "the operand of a 'delete' operator must be optional"


      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default); // Next, check that all default values actually appear in the options.

      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);

      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";

      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim()); // Parse all values, return the first error found if any

        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index])); // Otherwise, all values are good

        return result;
      };

      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = external_kolmafia_namespaceObject.Class.get(value); // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.

        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */

  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */

  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      var _objectSpread2;

      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });

      var argsWithHelp = _objectSpread(_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      }); // Create an object to hold argument results, with a default value for
      // each argument.


      var res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, specSymbol, argsWithHelp), _defineProperty(_objectSpread2, scriptSymbol, scriptName), _defineProperty(_objectSpread2, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread2, optionsSymbol, options !== null && options !== void 0 ? options : {}), _objectSpread2));

      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;

          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });

        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */

  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _a;

      var metadata = Args.getMetadata(args); // Load the list of keys and flags from the arg spec

      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;

        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      }); // Parse values from settings.

      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;

          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting

          var value_str = (0,external_kolmafia_namespaceObject.getProperty)(setting);
          if (value_str === "") return undefined; // no setting

          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      } // Parse new argments from the command line


      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;

        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting

        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */

  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */

  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;

      var metadata = Args.getMetadata(args);
      (0,external_kolmafia_namespaceObject.printHtml)("".concat(metadata.scriptHelp));
      (0,external_kolmafia_namespaceObject.printHtml)("");
      (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;

        if (arg.hidden) return;
        var nameText = "<font color='".concat((0,external_kolmafia_namespaceObject.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];

        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = _createForOfIteratorHelper(valueOptions),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;

              if (option.length === 1 || option[1] === undefined) {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        (0,external_kolmafia_namespaceObject.printHtml)("");
        (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */

  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);

  return Args;
}();
var ParseError = function ParseError(message) {
  _classCallCheck(this, ParseError);

  this.message = message;
};
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */

var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */

function parseAndValidate(arg, source, value) {
  var parsed_value;

  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }

  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */


var WrappedArgMetadata = /*#__PURE__*/function () {
  function WrappedArgMetadata(args) {
    _classCallCheck(this, WrappedArgMetadata);

    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */


  _createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */

  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */

  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);

  return WrappedArgMetadata;
}();
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */


function _loadDefaultValues(spec) {
  var result = {};

  for (var k in spec) {
    var argSpec = spec[k];

    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }

  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */


function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];

  for (var k in spec) {
    var argSpec = spec[k];

    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }

  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];

    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */


function _traverse(spec, process, onGroup) {
  var groups = [];

  for (var k in spec) {
    var argSpec = spec[k];

    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }

  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);

    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */


var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser);

    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */


  _createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;

      this.index = 0; // reset the parser

      var result = new Map();

      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;

        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }

        var startIndex = this.index;
        var key = this.parseKey();

        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }

        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value

          var _value = this.parseValue();

          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }

      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */

  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */

  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */

  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;

      if (this.finished()) throw "Expected ".concat(allowed);

      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */

  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;

      var _iterator4 = _createForOfIteratorHelper(searchValue),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */

  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */

  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;

      var valueEnder = " ";
      var quotes = ["'", '"'];

      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote

        this.consume([valueEnder]); // Consume opening quote
      }

      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);

      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      } // Consume the value (and closing quote)


      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);

  return CommandParser;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/utils.js
function utils_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || utils_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Type guard against null value
 *
 * @param value Value that can be null
 * @returns Whether the value is not null or... not
 */
function notNull(value) {
  return value !== null;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */

function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */

function utils_chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */

function countedMapToArray(map) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */

function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */

function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */

function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */

function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */

function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();

  var sortedB = _toConsumableArray(b).sort();

  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 *
 * @param map Map to invert
 * @returns Inverted map
 */

function invertMap(map) {
  var returnValue = new Map();

  var _iterator = utils_createForOfIteratorHelper(map),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */

function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";

  var _iterator2 = utils_createForOfIteratorHelper(str.split("")),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;

      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }

        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */

function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");

  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
          item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value: value,
        item: item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */

function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T, S> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T, S> that represents either a value of type T or a function returning a value of type T.
 * @param args The arguments to pass to the delay function
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function undelay(delayedObject) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */

function makeByXFunction(source) {
  return function (options) {
    var _options$val;

    var val = undelay(source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];

  var _iterator3 = utils_createForOfIteratorHelper(arr),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;

      if (Array.isArray(item) && depth > 0) {
        flatArray = flatArray.concat(flat(item, depth - 1));
      } else {
        flatArray.push(item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return flatArray;
}
/**
 * @param array Array to select from
 * @returns Random item from array
 */

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * Title cases a single word
 *
 * @param word Word to transform
 * @returns Word in title case
 */

var tc = word => word.charAt(0).toUpperCase() + word.slice(1);
;// CONCATENATED MODULE: ./node_modules/libram/dist/template-string.js



var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;

    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};

var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));

  if (match) {
    (0,external_kolmafia_namespaceObject.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0,external_kolmafia_namespaceObject.print)(message);
  }
};

var createSingleConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }

    (0,external_kolmafia_namespaceObject.abort)();
  };

  tagFunction.none = Type.none;
  return tagFunction;
};

var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

    if (input === "") {
      return Type.all();
    }

    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }

    (0,external_kolmafia_namespaceObject.abort)();
  };

  tagFunction.all = () => Type.all();

  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var $class = createSingleConstant(external_kolmafia_namespaceObject.Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(external_kolmafia_namespaceObject.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var template_string_$effect = createSingleConstant(external_kolmafia_namespaceObject.Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(external_kolmafia_namespaceObject.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(external_kolmafia_namespaceObject.Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(external_kolmafia_namespaceObject.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var template_string_$familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var template_string_$item = createSingleConstant(external_kolmafia_namespaceObject.Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var template_string_$items = createPluralConstant(external_kolmafia_namespaceObject.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var $location = createSingleConstant(external_kolmafia_namespaceObject.Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(external_kolmafia_namespaceObject.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */

var $modifier = createSingleConstant(external_kolmafia_namespaceObject.Modifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */

var $modifiers = createPluralConstant(external_kolmafia_namespaceObject.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var template_string_$skill = createSingleConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */

var $path = createSingleConstant(external_kolmafia_namespaceObject.Path);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */

var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45;

function lib_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function lib_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = lib_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function lib_slicedToArray(arr, i) { return lib_arrayWithHoles(arr) || lib_iterableToArrayLimit(arr, i) || lib_unsupportedIterableToArray(arr, i) || lib_nonIterableRest(); }

function lib_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lib_arrayLikeToArray(o, minLen); }

function lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lib_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function lib_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** @module GeneralLibrary */





/**
 * Determines the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 * @returns Maximum number of songs for player
 */

function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */

function isSong(skillOrEffect) {
  if (skillOrEffect instanceof external_kolmafia_namespaceObject.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof external_kolmafia_namespaceObject.Effect ? (0,external_kolmafia_namespaceObject.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 * @returns List of Effects
 */

function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 * @returns List of song Effects
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 * @returns Number of songs
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Determine whether player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 * @returns Whether player can remember another song
 */

function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Determine the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 * @returns Locations for monster
 */

function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Determine the player's remaining liver space
 *
 * @category General
 * @returns Remaining liver space
 */

function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Determine the player's remaining stomach space
 *
 * @category General
 * @returns Remaining stomach space
 */

function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Determine the player's remaining spleen space
 *
 * @category General
 * @returns Remaining spleen space
 */

function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */

function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof external_kolmafia_namespaceObject.Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof external_kolmafia_namespaceObject.Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }

  if (thing instanceof external_kolmafia_namespaceObject.Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof external_kolmafia_namespaceObject.Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }

  if (thing instanceof external_kolmafia_namespaceObject.Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }

  if (thing instanceof external_kolmafia_namespaceObject.Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Determine whether a given item is in the player's campground
 *
 * @category General
 * @param item The Item KoLmafia uses to represent the campground item
 * @returns Whether the item is in the campground
 */

function haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Determine whether the player has the specified counter
 *
 * @param counterName Name of the counter
 * @param minTurns Minimum turns the counter is set to
 * @param maxTurns Maximum turns the counter is set to
 * @category General
 * @returns Whether player has the counter
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return getCounters(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Determine whether the player has the specified wanderer's counter
 *
 * @param wanderer Wanderer to check
 * @category Wanderers
 * @returns Whether player has the wanderer counter
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Determine whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 * @returns Whether the vote wanderer is due
 */

function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Whether the wanderer is due
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer === Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Determines the chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 * @returns Chance that the sausage goblin is due (as a number between 0 and 1)
 */

function getKramcoWandererChance() {
  var fights = get("_sausageFights");
  var lastFight = get("_lastSausageMonsterTurn");
  var totalTurns = totalTurnsPlayed();

  if (fights < 1) {
    return lastFight === totalTurns && myTurncount() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Determines the chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 * @returns Chance that the familiar wanderer is due (as a number between 0 and 1)
 */

function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Determines the chance the player will encounter the specified wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Chance that the specified wanderer is due (as a number between 0 and 1)
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Determines whether the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 * @returns Whether it is the player's current familiar
 */

function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @returns List of items in the fold group
 */

function getFoldGroup(item) {
  return Object.entries(getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = lib_slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = lib_slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = lib_slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Determines the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 * @returns List of items in the zap group
 */

function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */

function getBanishedMonsters() {
  var banishes = chunk(get("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = lib_createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = lib_slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = toItem(banisher);

      if (banisher.toLowerCase() === "saber force") {
        result.set($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"]))), Monster.get(foe));
      } else if (banisher.toLowerCase() === "nanorhino") {
        result.set($skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Unleash Nanites"]))), Monster.get(foe));
      } else if ([Item.none, Item.get("training scroll:  Snokebomb"), Item.get("tomayohawk-style reflex hammer"), null].includes(banisherItem)) {
        if (Skill.get(banisher) === $skill.none) {
          break;
        } else {
          result.set(Skill.get(banisher), Monster.get(foe));
        }
      } else {
        result.set(banisherItem, Monster.get(foe));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Determines whether the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 * @returns Whether item is usable
 */

function canUse(item) {
  var path = myPath();

  if (path !== Path.get("Nuclear Autumn")) {
    if ($items(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === Path.get("G-Lover")) {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === Path.get("Bees Hate You")) {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 * @returns The thing specified or `null`
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.none ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.none ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.none ? null : thing;
  }

  return thing;
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value fo range
 */

function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = lib_slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Deternube tge average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */

function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */

function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName === "number" ? idOrName : parseInt(getPlayerId(idOrName));
  return {
    name: getPlayerName(id),
    id: id
  };
}
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */

function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);

  var _super = _createSuper(EnsureError);

  function EnsureError(cause, reason) {
    var _this;

    lib_classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }

  return EnsureError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }

    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Determiens the average value (based on mallprice and autosell) of a collection of items
 *
 * @param items items whose value you care about
 * @returns Average value of items
 */

function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, mallPrice(item) > Math.max(2 * autosellPrice(item), 100) ? MALL_VALUE_MODIFIER * mallPrice(item) : autosellPrice(item));
    } else {
      valueMap.set(item, mallPrice(item) > 100 ? MALL_VALUE_MODIFIER * mallPrice(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Determines the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 * @returns Weight-coefficient
 */

function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }

  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item.none);
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Determines the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose fairy multiplier you're interested in
 * @returns Weight-coefficient
 */

function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }

  if (familiar === $familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */

function getTodaysHolidayWanderers() {
  return flat((0,external_kolmafia_namespaceObject.holiday)().split("/").map(holiday => {
    var _holidayWanderers$get;

    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
}
/**
 * Determines whether or not we can safely call visitUrl(), based on whether we're in a fight, multi-fight, choice, etc
 *
 * @returns Whether urls can be safely visited
 */

function canVisitUrl() {
  if (currentRound()) {
    logger.debug("Current round is ".concat(currentRound(), "; you're in combat."));
    return false;
  }

  if (inMultiFight()) {
    logger.debug("You're in a multifight.");
    return false;
  }

  if (choiceFollowsFight()) {
    logger.debug("A choice follows this fight.");
    return false;
  }

  if (handlingChoice()) {
    logger.debug("You're currently in a choice adventure");
    return false;
  }

  return true;
}
/**
 * Calculate damage taken from a specific element after factoring in resistance
 *
 * @param baseDamage Base damage
 * @param element Element
 * @returns damage after factoring in resistances
 */

function damageTakenByElement(baseDamage, element) {
  if (baseDamage < 0) return 1;
  var res = elementalResistance(element);
  return Math.max(1, Math.ceil(baseDamage - baseDamage * res / 100));
}
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Get information from telescope
 *
 * @returns An object with all information the telescope gives you about the sorceress's contests and maze
 */

function telescope() {
  return {
    statContest: telescopeStats.get(get("telescope1")),
    elementContest: telescopeElements.get(get("telescope2")),
    hedge1: hedgeTrap1.get(get("telescope3")),
    hedge2: hedgeTrap2.get(get("telescope4")),
    hedge3: hedgeTrap3.get(get("telescope5"))
  };
}
/**
 * Visit the desc_x.php page for a given thing
 *
 * @param thing Thing to examine
 * @returns Contents of desc_x.php page
 */

function examine(thing) {
  var url = thing instanceof Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return visitUrl(url);
}
/**
 * Picks an option based on your primestat
 *
 * @param options An object keyed by stat; it must either contain all stats, or have a `default` parameter.
 * @returns The option corresponding to your primestat.
 */

var byStat = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myPrimestat)().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
 * @returns The option corresponding to your player class.
 */

var byClass = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myClass)().toString());
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */

function directlyUse(item) {
  return visitUrl("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Empty a slot, or unequip all instances of a given equipped item
 *
 * @param thing The slot or item in question
 * @returns Whether we succeeded completely--`false` if we unequip some but not all instances of the item.
 */

function unequip(thing) {
  if (thing instanceof Slot) return equip(thing, $item.none);
  var failedSlots = Slot.all().filter(s => {
    // Filter the slot out if it doesn't contain the relevant item
    if (equippedItem(s) !== thing) return false; // Filter the slot out if we succeed at unequipping it

    return !unequip(thing); // This leaves only slots that do contain the item but that we failed to unequip
  });
  if (failedSlots.length) logger.debug("Failed to unequip ".concat(thing, " from slots ").concat(failedSlots.join(", ")));
  return failedSlots.length === 0;
}
/**
 * @returns a Date object corresponding to the current in-game day, at midnight
 */

function gameDay() {
  var _todayToString$match;

  var _map = ((_todayToString$match = todayToString().match(/(\d{4})(\d{2})(\d{2})/)) !== null && _todayToString$match !== void 0 ? _todayToString$match : []).map(Number),
      _map2 = lib_slicedToArray(_map, 4),
      year = _map2[1],
      month = _map2[2],
      day = _map2[3];

  return new Date(year, month - 1, day, 0, 0, 0);
}
/**
 * @param [type="all"] the type of crafting to check for free crafts
 * @returns the number of free crafts available of that type
 */

function freeCrafts() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";

  var effectCrafts = effect => Math.floor(haveEffect(effect) / 5);

  var all = (have($skill(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Rapid Prototyping"])))) ? 5 - get("_rapidPrototypingUsed") : 0) + (have($skill(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Expert Corner-Cutter"])))) ? 5 - get("_expertCornerCutterUsed") : 0) + effectCrafts($effect(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Inigo's Incantation of Inspiration"])))) + effectCrafts($effect(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Craft Tea"])))) + // eslint-disable-next-line libram/verify-constants
  effectCrafts($effect(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Cooking Concentrate"]))));
  var food = type === "food" ? 5 - get("_cookbookbatCrafting") : 0;
  var smith = type === "smith" ? 5 - get("_thorsPliersCrafting") : 0;
  var booze = 0; // currently there is no booze specific free crafting skill

  return all + food + smith + booze;
}
var realmTypes = (/* unused pure expression or super */ null && (["spooky", "stench", "hot", "cold", "sleaze", "fantasy", "pirate"]));
/**
 * @param identifier which realm to check for
 * @returns if that realm is available
 */

function realmAvailable(identifier) {
  if (identifier === "fantasy") {
    return get("_frToday") || get("frAlways");
  } else if (identifier === "pirate") {
    return get("_prToday") || get("prAlways");
  }

  return get("_".concat(identifier, "AirportToday")) || get("".concat(identifier, "AirportAlways"));
}
/**
 * Compute the currently available Lucky Gold Ring Currencies
 * @param realm the realm type to consider
 * @returns The currency for the given zone
 */

function realmCurrency(realm) {
  switch (realm) {
    case "sleaze":
      return $item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Beach Buck"])));

    case "spooky":
      return $item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Coinspiracy"])));

    case "stench":
      return $item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["FunFunds\u2122"])));

    case "cold":
      return $item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Wal-Mart gift certificate"])));

    case "hot":
      return $item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Volcoino"])));

    case "fantasy":
      return $item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Rubee\u2122"])));
  }
}
/**
 * Compute which Lucky Gold Ring currencies are currently available
 * @returns a list of currently available currencies
 */

function lgrCurrencies() {
  return realmTypes.filter(realm => realmAvailable(realm) && !(realm === "hot" && get("_luckyGoldRingVolcoino"))).map(realmCurrency).filter(i => !!i);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/overlappingNames.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"];
var overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Cleave", "Boil", "Slice", "Rainbow"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_augSkillsCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */

function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */

function propertyTyping_isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */

function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */

function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */

function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */

function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */

function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */

function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */

function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function property_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function property_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { property_ownKeys(Object(source), true).forEach(function (key) { property_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { property_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function property_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function property_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function property_createClass(Constructor, protoProps, staticProps) { if (protoProps) property_defineProperties(Constructor.prototype, protoProps); if (staticProps) property_defineProperties(Constructor, staticProps); return Constructor; }

function property_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function property_slicedToArray(arr, i) { return property_arrayWithHoles(arr) || property_iterableToArrayLimit(arr, i) || property_unsupportedIterableToArray(arr, i) || property_nonIterableRest(); }

function property_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function property_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return property_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return property_arrayLikeToArray(o, minLen); }

function property_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function property_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function property_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter(value => {
  if (value === "") return null;
  var v = toType(value);
  return v === Type.none ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
var getPhylum = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
var getServant = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
var getSkill = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
var getSlot = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
var getStat = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
var getThrall = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */

function property_get(property, _default) {
  var value = getString(property); // Handle known properties.

  if (isBooleanProperty(property)) {
    var _getBoolean;

    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (propertyTyping_isNumericProperty(property)) {
    var _getNumber;

    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isStringProperty(property)) {
    return value;
  } // Not a KnownProperty from here on out.


  if (_default instanceof external_kolmafia_namespaceObject.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Phylum) {
    return getPhylum(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 * @returns Value that was set
 */

function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
  return value;
}
/**
 * Increment a property
 *
 * @param property Numeric property to increment
 * @param delta Number by which to increment
 * @param max Maximum value to set
 * @returns New value
 */



function increment(property) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var value = property_get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.min(max, value + delta);
  return _set(property, nextValue);
}
/**
 * Decrement a property
 *
 * @param property Numeric property to decrement
 * @param delta Number by which to decrement
 * @param min Maximum value to set
 * @returns New value
 */

function decrement(property) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var value = property_get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.max(min, value - delta);
  return _set(property, nextValue);
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */

function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = property_slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = property_slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, property_get(prop)];
  }));
  setProperties(properties);

  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */

function withProperty(property, value, callback) {
  return withProperties(property_defineProperty({}, property, value), callback);
}
/**
 * Carries out a callback during which a set of choices will be handled as supplied
 *
 * @param choices Choices to set during callback
 * @param callback Callback to execute with set choices
 * @returns Return value of the supplied callback
 */

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = property_slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
/**
 * Carries out a callback during which a choice will be handled as supplied
 *
 * @param choice Choice to set during callback
 * @param value How to handle choice during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */

function withChoice(choice, value, callback) {
  return withChoices(property_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    property_classCallCheck(this, PropertiesManager);

    property_defineProperty(this, "properties", {});
  }

  property_createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */

  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = property_slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = (0,external_kolmafia_namespaceObject.propertyExists)(propertyName) ? property_get(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
        }

        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */

  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = property_slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */

  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(property_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties)) continue;
        var value = this.properties[property];

        if (value === PropertiesManager.EMPTY_PREFERENCE) {
          (0,external_kolmafia_namespaceObject.removeProperty)(property);
        } else if (value) {
          _set(property, value);
        } else {
          _set(property, "");
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */

  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */

  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }

      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];

        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */

  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (property_get(property, 0) < value) {
        this.set(property_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (property_get(property, 0) > value) {
        this.set(property_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */

  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */

  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = property_get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== property_get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */

  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;

      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = property_slicedToArray(_thisProps[_i5], 2),
            propertyName = _thisProps$_i[0],
            propertyValue = _thisProps$_i[1];

        if (otherProps.get(propertyName) === propertyValue) return false;
      }

      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = property_objectSpread(property_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */

  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }

      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);

  return PropertiesManager;
}();

property_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = combat_getPrototypeOf(object); if (object === null) break; } return object; }

function combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function combat_toConsumableArray(arr) { return combat_arrayWithoutHoles(arr) || combat_iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || combat_nonIterableSpread(); }

function combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }

function combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }

function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); return Constructor; }

function combat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) combat_setPrototypeOf(subClass, superClass); }

function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }

function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }

function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function combat_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; combat_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !combat_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return combat_construct(Class, arguments, combat_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return combat_setPrototypeOf(Wrapper, Class); }; return combat_wrapNativeSuper(Class); }

function combat_construct(Parent, args, Class) { if (combat_isNativeReflectConstruct()) { combat_construct = Reflect.construct; } else { combat_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) combat_setPrototypeOf(instance, Class.prototype); return instance; }; } return combat_construct.apply(null, arguments); }

function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function combat_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }

function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }





var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_namespaceObject.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? external_kolmafia_namespaceObject.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */


function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.includes(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */


function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */


function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return external_kolmafia_namespaceObject.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */


function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}

var InvalidMacroError = /*#__PURE__*/function (_Error) {
  combat_inherits(InvalidMacroError, _Error);

  var _super = combat_createSuper(InvalidMacroError);

  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);

    return _super.apply(this, arguments);
  }

  return InvalidMacroError;
}( /*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */

var Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);

    combat_defineProperty(this, "components", []);

    combat_defineProperty(this, "name", MACRO_NAME);
  }

  combat_createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */

  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */

  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, combat_toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      (_this$components = this.components).push.apply(_this$components, combat_toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));

      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);

      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }

      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.name), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */

  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */

  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */

  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */

  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue) {
      return this.step("if !(".concat(Macro.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, combat_toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */

  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */

  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */

  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, combat_toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = combat_createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;

          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      var ballsCondition = "";

      if (condition instanceof external_kolmafia_namespaceObject.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof external_kolmafia_namespaceObject.Effect) {
        ballsCondition = "haseffect ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof external_kolmafia_namespaceObject.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof external_kolmafia_namespaceObject.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;

      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;

      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;

      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;

      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;

      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);

  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

combat_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

combat_defineProperty(Macro, "cachedMacroIds", new Map());

combat_defineProperty(Macro, "cachedAutoAttacks", new Map());

function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Macro) {
  combat_inherits(StrictMacro, _Macro);

  var _super2 = combat_createSuper(StrictMacro);

  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);

    return _super2.apply(this, arguments);
  }

  combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;

      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }

      return (_get2 = _get(combat_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;

      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }

      return (_get3 = _get(combat_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;

      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }

      return (_get4 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;

      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }

      return (_get5 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      var _get6;

      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }

      return (_get6 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */

  }], [{
    key: "skill",
    value: function skill() {
      var _this8;

      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;

      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;

      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;

      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;

      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]);

  return StrictMacro;
}(Macro)));
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/combat.js
function dist_combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dist_combat_setPrototypeOf(subClass, superClass); }

function dist_combat_setPrototypeOf(o, p) { dist_combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dist_combat_setPrototypeOf(o, p); }

function dist_combat_createSuper(Derived) { var hasNativeReflectConstruct = dist_combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dist_combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dist_combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dist_combat_possibleConstructorReturn(this, result); }; }

function dist_combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dist_combat_assertThisInitialized(self); }

function dist_combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dist_combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function dist_combat_getPrototypeOf(o) { dist_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dist_combat_getPrototypeOf(o); }

function dist_combat_toConsumableArray(arr) { return dist_combat_arrayWithoutHoles(arr) || dist_combat_iterableToArray(arr) || dist_combat_unsupportedIterableToArray(arr) || dist_combat_nonIterableSpread(); }

function dist_combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function dist_combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function dist_combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dist_combat_arrayLikeToArray(arr); }

function dist_combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dist_combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dist_combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dist_combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dist_combat_arrayLikeToArray(o, minLen); }

function dist_combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dist_combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dist_combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dist_combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) dist_combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) dist_combat_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */

var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    dist_combat_classCallCheck(this, CombatStrategy);

    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */


  dist_combat_createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;

      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];

        var _iterator = dist_combat_createForOfIteratorHelper(monsters),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */

  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;

      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];

        var _iterator2 = dist_combat_createForOfIteratorHelper(monsters),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */

  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */

  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof external_kolmafia_namespaceObject.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = dist_combat_createForOfIteratorHelper(monsters),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */

  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;

      if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];

      var _iterator4 = dist_combat_createForOfIteratorHelper(monsters),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */

  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */

  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */

  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */

  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;

      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */

  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = dist_combat_toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = dist_combat_toConsumableArray(this.default_macro);

      var _iterator5 = dist_combat_createForOfIteratorHelper(this.macros),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], dist_combat_toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (this.default_autoattack) result.default_autoattack = dist_combat_toConsumableArray(this.default_autoattack);

      var _iterator6 = dist_combat_createForOfIteratorHelper(this.autoattacks),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], dist_combat_toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      result.default_action = this.default_action;

      var _iterator7 = dist_combat_createForOfIteratorHelper(this.actions),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], dist_combat_toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */

  }, {
    key: "compile",
    value: function compile(resources, defaults, location) {
      var _a, _b;

      var result = new Macro(); // If there is macro precursor, do it now

      if (this.starting_macro) {
        result.step.apply(result, dist_combat_toConsumableArray(this.starting_macro.map(undelay)));
      } // Perform any monster-specific macros (these may or may not end the fight)


      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;

        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile()); // Perform the non-monster specific macro

      if (this.default_macro) result.step.apply(result, dist_combat_toConsumableArray(this.default_macro.map(undelay))); // Perform any monster-specific actions (these should end the fight)

      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;

        var macro = (_a = resources.getMacro(action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile()); // Perform the non-monster specific action (these should end the fight)

      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }

      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */

  }, {
    key: "compileAutoattack",
    value: function compileAutoattack() {
      var result = new Macro(); // Perform any monster-specific autoattacks (these may or may not end the fight)

      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;

        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile()); // Perform the non-monster specific macro

      if (this.default_autoattack) result.step.apply(result, dist_combat_toConsumableArray(this.default_autoattack.map(undelay)));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */

  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];

      var _iterator9 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(dist_combat_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */

  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        dist_combat_inherits(CombatStrategyWithActions, _this);

        var _super = dist_combat_createSuper(CombatStrategyWithActions);

        function CombatStrategyWithActions() {
          dist_combat_classCallCheck(this, CombatStrategyWithActions);

          return _super.apply(this, arguments);
        }

        return CombatStrategyWithActions;
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var proto = CombatStrategyWithActions.prototype;

      var _iterator10 = dist_combat_createForOfIteratorHelper(actions),
          _step10;

      try {
        var _loop = function _loop() {
          var action = _step10.value;

          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };

        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          _loop();
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any

      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return CombatStrategyWithActions;
    }
  }]);

  return CombatStrategy;
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */

var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    dist_combat_classCallCheck(this, CompressedMacro);

    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */


  dist_combat_createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;

      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */

  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);

  return CompressedMacro;
}();
/**
 * A class for providing resources to fulfil combat actions.
 */


var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    dist_combat_classCallCheck(this, CombatResources);

    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */


  dist_combat_createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */

  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */

  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */

  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof external_kolmafia_namespaceObject.Item) return new Macro().item(resource.do);
      if (resource.do instanceof external_kolmafia_namespaceObject.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do);
    }
  }]);

  return CombatResources;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/logger.js
var _defaultHandlers;

function logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) logger_defineProperties(Constructor, staticProps); return Constructor; }

function logger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var LogLevels;

(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));

var defaultHandlers = (_defaultHandlers = {}, logger_defineProperty(_defaultHandlers, LogLevels.INFO, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<b>[Libram Info]</b> ".concat(message));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.WARNING, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.ERROR, error => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(error));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.DEBUG, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), _defaultHandlers);

var Logger = /*#__PURE__*/function () {
  function Logger() {
    logger_classCallCheck(this, Logger);

    logger_defineProperty(this, "handlers", defaultHandlers);
  }

  logger_createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);

  return Logger;
}();

logger_defineProperty(Logger, "currentLevel", LogLevels.ERROR);

/* harmony default export */ const dist_logger = (new Logger());
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, maximize_templateObject6, maximize_templateObject7, maximize_templateObject8, maximize_templateObject9, maximize_templateObject10, maximize_templateObject11, maximize_templateObject12, maximize_templateObject13, maximize_templateObject14, maximize_templateObject15, maximize_templateObject16, maximize_templateObject17, maximize_templateObject18, maximize_templateObject19, maximize_templateObject20, maximize_templateObject21, maximize_templateObject22, maximize_templateObject23, maximize_templateObject24, maximize_templateObject25, maximize_templateObject26, maximize_templateObject27, maximize_templateObject28, maximize_templateObject29, maximize_templateObject30, maximize_templateObject31, maximize_templateObject32, maximize_templateObject33, maximize_templateObject34, maximize_templateObject35, maximize_templateObject36, maximize_templateObject37, maximize_templateObject38, maximize_templateObject39, maximize_templateObject40, maximize_templateObject41, maximize_templateObject42, maximize_templateObject43, maximize_templateObject44, maximize_templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50;

function maximize_slicedToArray(arr, i) { return maximize_arrayWithHoles(arr) || maximize_iterableToArrayLimit(arr, i) || maximize_unsupportedIterableToArray(arr, i) || maximize_nonIterableRest(); }

function maximize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function maximize_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function maximize_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function maximize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function maximize_createClass(Constructor, protoProps, staticProps) { if (protoProps) maximize_defineProperties(Constructor.prototype, protoProps); if (staticProps) maximize_defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function maximize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function maximize_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = maximize_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function maximize_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function maximize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function maximize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { maximize_ownKeys(Object(source), true).forEach(function (key) { maximize_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { maximize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function maximize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function maximize_toConsumableArray(arr) { return maximize_arrayWithoutHoles(arr) || maximize_iterableToArray(arr) || maximize_unsupportedIterableToArray(arr) || maximize_nonIterableSpread(); }

function maximize_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function maximize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return maximize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return maximize_arrayLikeToArray(o, minLen); }

function maximize_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function maximize_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return maximize_arrayLikeToArray(arr); }

function maximize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function toMaximizerName(_ref) {
  var name = _ref.name,
      id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */


function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;

  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(maximize_toConsumableArray(defaultOptions.forceEquip), maximize_toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(maximize_toConsumableArray(defaultOptions.preventEquip), maximize_toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;

      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(maximize_toConsumableArray(defaultOptions.bonusEquip), maximize_toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(maximize_toConsumableArray(defaultOptions.preventSlot), maximize_toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: maximize_objectSpread(maximize_objectSpread({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var modeableItems = {
  backupcamera: template_string_$item(maximize_templateObject || (maximize_templateObject = maximize_taggedTemplateLiteral(["backup camera"]))),
  umbrella: template_string_$item(maximize_templateObject2 || (maximize_templateObject2 = maximize_taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: template_string_$item(maximize_templateObject3 || (maximize_templateObject3 = maximize_taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: template_string_$item(maximize_templateObject4 || (maximize_templateObject4 = maximize_taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: template_string_$item(maximize_templateObject5 || (maximize_templateObject5 = maximize_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: template_string_$item(maximize_templateObject6 || (maximize_templateObject6 = maximize_taggedTemplateLiteral(["Jurassic Parka"]))),
  jillcandle: template_string_$item(maximize_templateObject7 || (maximize_templateObject7 = maximize_taggedTemplateLiteral(["LED candle"])))
};
var modeableState = {
  backupcamera: () => (0,external_kolmafia_namespaceObject.getProperty)("backupCameraMode"),
  umbrella: () => (0,external_kolmafia_namespaceObject.getProperty)("umbrellaState"),
  snowsuit: () => (0,external_kolmafia_namespaceObject.getProperty)("snowsuit"),
  edpiece: () => (0,external_kolmafia_namespaceObject.getProperty)("edPiece"),
  retrocape: () => (0,external_kolmafia_namespaceObject.getProperty)("retroCapeSuperhero") + " " + (0,external_kolmafia_namespaceObject.getProperty)("retroCapeWashingInstructions"),
  parka: () => (0,external_kolmafia_namespaceObject.getProperty)("parkaMode"),
  jillcandle: () => (0,external_kolmafia_namespaceObject.getProperty)("ledCandleMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */

function getCurrentModes() {
  var modes = {};

  var _iterator = maximize_createForOfIteratorHelper(modeableCommands),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */

function applyModes(modes) {
  var _iterator2 = maximize_createForOfIteratorHelper(modeableCommands),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;

      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          (0,external_kolmafia_namespaceObject.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Subset of slots that are valid for caching.

var cachedSlots = $slots(maximize_templateObject8 || (maximize_templateObject8 = maximize_taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  maximize_classCallCheck(this, CacheEntry);

  maximize_defineProperty(this, "equipment", void 0);

  maximize_defineProperty(this, "rider", void 0);

  maximize_defineProperty(this, "familiar", void 0);

  maximize_defineProperty(this, "canEquipItemCount", void 0);

  maximize_defineProperty(this, "modes", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
};

var _outfitSlots = /*#__PURE__*/new WeakMap();

var _useHistory = /*#__PURE__*/new WeakMap();

var _maxSize = /*#__PURE__*/new WeakMap();

var OutfitLRUCache = /*#__PURE__*/function () {
  // Current outfits allocated
  // Array of indices into #outfitSlots in order of use. Most recent at the front.
  function OutfitLRUCache(maxSize) {
    maximize_classCallCheck(this, OutfitLRUCache);

    _outfitSlots.set(this, {
      writable: true,
      value: []
    });

    _useHistory.set(this, {
      writable: true,
      value: []
    });

    _maxSize.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maxSize, maxSize);
  }

  maximize_createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));

      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);

      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;

      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();

        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);

        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);

        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _outfitSlots, []);

      _classPrivateFieldSet(this, _useHistory, []);
    }
  }]);

  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */


maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");

function saveOutfit(name) {
  (0,external_kolmafia_namespaceObject.cliExecute)("outfit save ".concat(name));
} // Objective cache entries.


var cachedObjectives = {}; // Outfit cache entries. Keep 6 by default to avoid cluttering list.

var outfitCache = new OutfitLRUCache(6); // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = $stats(maximize_templateObject9 || (maximize_templateObject9 = maximize_taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_namespaceObject.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = external_kolmafia_namespaceObject.Item.all().filter(item => (0,external_kolmafia_namespaceObject.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (options.updateOnFamiliarChange && (0,external_kolmafia_namespaceObject.myFamiliar)() !== entry.familiar) {
    dist_logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }

  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    dist_logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */


function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;

  if (outfitName) {
    if (!(0,external_kolmafia_namespaceObject.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_namespaceObject.outfit)(outfitName);
    }

    var familiarEquip = entry.equipment.get($slot(maximize_templateObject10 || (maximize_templateObject10 = maximize_taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_namespaceObject.equip)($slot(maximize_templateObject11 || (maximize_templateObject11 = maximize_taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = maximize_createForOfIteratorHelper(entry.equipment),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = maximize_slicedToArray(_step3.value, 2),
            slot = _step3$value[0],
            item = _step3$value[1];

        if ((0,external_kolmafia_namespaceObject.equippedItem)(slot) !== item && (0,external_kolmafia_namespaceObject.availableAmount)(item) > 0) {
          (0,external_kolmafia_namespaceObject.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);

      dist_logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject12 || (maximize_templateObject12 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject13 || (maximize_templateObject13 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_namespaceObject.enthroneFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject14 || (maximize_templateObject14 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) || template_string_$familiar.none);
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject15 || (maximize_templateObject15 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject16 || (maximize_templateObject16 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject17 || (maximize_templateObject17 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) || template_string_$familiar.none);
  }

  applyModes(maximize_objectSpread(maximize_objectSpread({}, entry.modes), options.modes));
}

var slotStructure = [$slots(maximize_templateObject18 || (maximize_templateObject18 = maximize_taggedTemplateLiteral(["hat"]))), $slots(maximize_templateObject19 || (maximize_templateObject19 = maximize_taggedTemplateLiteral(["back"]))), $slots(maximize_templateObject20 || (maximize_templateObject20 = maximize_taggedTemplateLiteral(["shirt"]))), $slots(maximize_templateObject21 || (maximize_templateObject21 = maximize_taggedTemplateLiteral(["weapon, off-hand"]))), $slots(maximize_templateObject22 || (maximize_templateObject22 = maximize_taggedTemplateLiteral(["pants"]))), $slots(maximize_templateObject23 || (maximize_templateObject23 = maximize_taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(maximize_templateObject24 || (maximize_templateObject24 = maximize_taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */

function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;

  var _iterator4 = maximize_createForOfIteratorHelper(slotStructure),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;

        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref2 => {
        var _ref3 = maximize_slicedToArray(_ref2, 2),
            item = _ref3[1];

        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref4 => {
        var _ref5 = maximize_slicedToArray(_ref4, 2),
            item = _ref5[1];

        return item;
      });
      var equippedSet = desiredSlots.map(_ref6 => {
        var _ref7 = maximize_slicedToArray(_ref6, 1),
            slot = _ref7[0];

        return (0,external_kolmafia_namespaceObject.equippedItem)(slot);
      });

      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          dist_logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }

        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject25 || (maximize_templateObject25 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject26 || (maximize_templateObject26 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject27 || (maximize_templateObject27 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply ".concat(entry.rider.get(template_string_$item(maximize_templateObject28 || (maximize_templateObject28 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat(template_string_$item(maximize_templateObject29 || (maximize_templateObject29 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }

      success = false;
    }
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject30 || (maximize_templateObject30 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject31 || (maximize_templateObject31 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject32 || (maximize_templateObject32 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_namespaceObject.myBjornedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply".concat(entry.rider.get(template_string_$item(maximize_templateObject33 || (maximize_templateObject33 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat(template_string_$item(maximize_templateObject34 || (maximize_templateObject34 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }

      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator5 = maximize_createForOfIteratorHelper(cachedSlots),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0,external_kolmafia_namespaceObject.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject35 || (maximize_templateObject35 = maximize_taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(maximize_templateObject36 || (maximize_templateObject36 = maximize_taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_namespaceObject.equippedItem)($slot(maximize_templateObject37 || (maximize_templateObject37 = maximize_taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject38 || (maximize_templateObject38 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set(template_string_$item(maximize_templateObject39 || (maximize_templateObject39 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject40 || (maximize_templateObject40 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set(template_string_$item(maximize_templateObject41 || (maximize_templateObject41 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = maximize_createForOfIteratorHelper(options.preventSlot),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    if (options.preventSlot.includes($slot(maximize_templateObject42 || (maximize_templateObject42 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(maximize_templateObject43 || (maximize_templateObject43 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes($slot(maximize_templateObject44 || (maximize_templateObject44 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(maximize_templateObject45 || (maximize_templateObject45 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = maximize_createForOfIteratorHelper(external_kolmafia_namespaceObject.Slot.all()),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (!options.onlySlot.includes($slot(_templateObject46 || (_templateObject46 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(_templateObject47 || (_templateObject47 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes($slot(_templateObject48 || (_templateObject48 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(_templateObject49 || (_templateObject49 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_namespaceObject.myFamiliar)(), canEquipItemCount(), maximize_objectSpread(maximize_objectSpread({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;

  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    dist_logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
      preventEquip = fullOptions.preventEquip,
      bonusEquip = fullOptions.bonusEquip,
      onlySlot = fullOptions.onlySlot,
      preventSlot = fullOptions.preventSlot,
      forceUpdate = fullOptions.forceUpdate; // Sort each group in objective to ensure consistent ordering in string

  var objective = maximize_toConsumableArray(new Set([].concat(maximize_toConsumableArray(objectives.sort()), maximize_toConsumableArray(forceEquip.map(item => "\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(preventEquip.map(item => "-\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), maximize_toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), maximize_toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref8 => {
    var _ref9 = maximize_slicedToArray(_ref8, 2),
        bonus = _ref9[1];

    return bonus !== 0;
  }).map(_ref10 => {
    var _ref11 = maximize_slicedToArray(_ref10, 2),
        item = _ref11[0],
        bonus = _ref11[1];

    return "".concat(Math.round(bonus * 100) / 100, " \"bonus ").concat(toMaximizerName(item), "\"");
  }).sort())))).join(", "); // Items equipped in slots not touched by the maximizer must be in the cache key


  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(maximize_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,external_kolmafia_namespaceObject.equippedItem)(slot))).sort()), [have(template_string_$effect(_templateObject50 || (_templateObject50 = maximize_taggedTemplateLiteral(["Offhand Remarkable"]))))]).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);

  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    dist_logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);

    if (verifyCached(cacheEntry)) {
      dist_logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }

    dist_logger.warning("Maximize cache application failed, maximizing...");
  }

  var result = (0,external_kolmafia_namespaceObject.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    maximize_classCallCheck(this, Requirement);

    _maximizeParameters.set(this, {
      writable: true,
      value: void 0
    });

    _maximizeOptions.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  maximize_createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;

      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement([].concat(maximize_toConsumableArray(this.maximizeParameters), maximize_toConsumableArray(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(maximize_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), maximize_toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(x => {
          var _other$maximizeOption2;

          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(maximize_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), maximize_toConsumableArray((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(x => {
          var _other$maximizeOption4;

          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(maximize_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), maximize_toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(maximize_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), maximize_toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(maximize_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), maximize_toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */

  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */

  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }

      Requirement.merge(requirements).maximize();
    }
  }]);

  return Requirement;
}();
/**
 * Clear all outfits cached by the maximizer.
 */

function clearMaximizerCache() {
  outfitCache.clear();

  for (var member in cachedObjectives) {
    delete cachedObjectives[member];
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/outfit.js
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, outfit_templateObject49, outfit_templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63;

function outfit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function outfit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { outfit_ownKeys(Object(source), true).forEach(function (key) { outfit_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { outfit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function outfit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function outfit_slicedToArray(arr, i) { return outfit_arrayWithHoles(arr) || outfit_iterableToArrayLimit(arr, i) || outfit_unsupportedIterableToArray(arr, i) || outfit_nonIterableRest(); }

function outfit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfit_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function outfit_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function outfit_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = outfit_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function outfit_toConsumableArray(arr) { return outfit_arrayWithoutHoles(arr) || outfit_iterableToArray(arr) || outfit_unsupportedIterableToArray(arr) || outfit_nonIterableSpread(); }

function outfit_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfit_arrayLikeToArray(o, minLen); }

function outfit_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function outfit_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return outfit_arrayLikeToArray(arr); }

function outfit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function outfit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function outfit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function outfit_createClass(Constructor, protoProps, staticProps) { if (protoProps) outfit_defineProperties(Constructor.prototype, protoProps); if (staticProps) outfit_defineProperties(Constructor, staticProps); return Constructor; }



var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var riderSlots = (/* unused pure expression or super */ null && (["buddy-bjorn", "crown-of-thrones"]));

var weaponHands = i => i ? (0,external_kolmafia_namespaceObject.weaponHands)(i) : 0;

var outfit_modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    outfit_classCallCheck(this, Outfit);

    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
  }
  /**
   * Create an outfit from your current player state.
   */


  outfit_createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return outfit_toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;

      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!have(item, this.equippedAmount(item) + 1)) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */

  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== template_string_$item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      if (slot !== undefined && slot !== (0,external_kolmafia_namespaceObject.toSlot)(item)) return false;
      if (this.equips.has((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;

      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }

          break;

        case $slot(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !(0,external_kolmafia_namespaceObject.canEquip)(this.familiar, item)) return false;
      }

      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["familiar"]))) && !(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set((0,external_kolmafia_namespaceObject.toSlot)(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(outfit_toConsumableArray($slots(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["acc1"])))) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;

      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }

      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["weapon"])))) return false;

      if (this.equips.has($slot(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }

      if (this.equips.has($slot(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!have(template_string_$skill(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set($slot(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["weapon"]))):
          return template_string_$familiar(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["Disembodied Hand"])));

        case $slot(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["off-hand"]))):
          return template_string_$familiar(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["Left-Hand Man"])));

        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */

  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;

      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns Whether the bonus was successfully asigned.
     */

  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      this.bonuses.set(item, value);
      return this.bonuses.get(item) === value;
    }
    /**
     * Adds a value to any existing bonus this item has; if it started without a bonus, sets the bonus equal to that value.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */

  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      var previous = this.getBonus(item);
      this.setBonus(item, previous + value);
      return this.getBonus(item);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["familiar"]))))) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      if (familiar === undefined || !this.equip(familiar)) return false;
      this.equips.set($slot(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;

      if (familiar !== template_string_$familiar.none) {
        if (!have(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }

      var item = this.equips.get($slot(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== template_string_$item.none && !(0,external_kolmafia_namespaceObject.canEquip)(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;

      var _a, _b, _c, _d;

      var succeeded = true;

      var _iterator = outfit_createForOfIteratorHelper(outfitSlots),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slotName = _step.value;
          var slot = (_a = new Map([["famequip", $slot(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
          var itemOrItems = spec[slotName];
          if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = outfit_createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;
          if (!this.equip(_item)) succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }

      (_this$avoid = this.avoid).push.apply(_this$avoid, outfit_toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));

      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);

      if (spec.modifier) {
        var _this$modifier;

        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, outfit_toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }

      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }

      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }

      if (spec.bonuses) {
        var _iterator3 = outfit_createForOfIteratorHelper(spec.bonuses),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = outfit_slicedToArray(_step3.value, 2),
                item = _step3$value[0],
                value = _step3$value[1];

            this.addBonus(item, value);
            succeeded && (succeeded = this.bonuses.has(item));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */

  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */

  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }

      if (thing instanceof external_kolmafia_namespaceObject.Item) return this.equipItem(thing, slot);
      if (thing instanceof external_kolmafia_namespaceObject.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value:
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
    function bjornify(target) {
      var current = this.riders.get($slot(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));

      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }

        return false;
      }

      if (Array.isArray(target)) {
        var fam = target.find(f => have(f) && this.familiar !== f && this.riders.get($slot(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["crown-of-thrones"])))) !== f);

        if (fam) {
          this.riders.set($slot(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), fam);
          return true;
        }

        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), target);
          return true;
        }

        return false;
      }
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */

  }, {
    key: "enthrone",
    value: function enthrone(target) {
      var current = this.riders.get($slot(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));

      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }

        return false;
      }

      if (Array.isArray(target)) {
        var fam = target.find(f => have(f) && this.familiar !== f && this.riders.get($slot(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["buddy-bjorn"])))) !== f);

        if (fam) {
          this.riders.set($slot(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), fam);
          return true;
        }

        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), target);
          return true;
        }

        return false;
      }
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */

  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;

      var compatible = true; // Check if the new modes are compatible with existing modes

      var _iterator4 = outfit_createForOfIteratorHelper(outfit_modeableCommands),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var mode = _step4.value;
          if (mode === "retrocape") continue; // checked below

          if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
            compatible = false;
          }
        } // Check if retrocape modes are compatible
        // (Parts that are undefined are compatible with everything)

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }

        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }

        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }

      this.modes = outfit_objectSpread(outfit_objectSpread({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */

  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */

  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
    /**
     * Equip this outfit.
     */

  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set(); // First, we equip non-accessory equipment.

      var nonaccessorySlots = $slots(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(outfit_templateObject36 || (outfit_templateObject36 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));

      if (bjorn && (this.equips.get($slot(outfit_templateObject37 || (outfit_templateObject37 = outfit_taggedTemplateLiteral(["back"])))) === template_string_$item(outfit_templateObject38 || (outfit_templateObject38 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus(template_string_$item(outfit_templateObject39 || (outfit_templateObject39 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(outfit_templateObject40 || (outfit_templateObject40 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject41 || (outfit_templateObject41 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }

      var crown = this.riders.get($slot(outfit_templateObject42 || (outfit_templateObject42 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));

      if (crown && (this.equips.get($slot(outfit_templateObject43 || (outfit_templateObject43 = outfit_taggedTemplateLiteral(["hat"])))) === template_string_$item(outfit_templateObject44 || (outfit_templateObject44 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus(template_string_$item(outfit_templateObject45 || (outfit_templateObject45 = outfit_taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(outfit_templateObject46 || (outfit_templateObject46 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject47 || (outfit_templateObject47 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      } // We must manually remove equipment that we want to use in a different
      // slot than where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans


      var _iterator5 = outfit_createForOfIteratorHelper(nonaccessorySlots),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var slot = _step5.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot) || this.avoid.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) || slot === $slot(_templateObject51 || (_templateObject51 = outfit_taggedTemplateLiteral(["weapon"]))) && weaponHands((0,external_kolmafia_namespaceObject.equippedItem)(slot)) !== 1 && this.equips.has($slot(_templateObject52 || (_templateObject52 = outfit_taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(_templateObject53 || (_templateObject53 = outfit_taggedTemplateLiteral(["weapon"]))))) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item.none);
        } // Then we equip all the non-accessory equipment.

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = outfit_createForOfIteratorHelper(nonaccessorySlots),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot = _step6.value;
          var equipment = this.equips.get(_slot);

          if (equipment) {
            (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        } // Next, we equip accessories

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var accessorySlots = $slots(outfit_templateObject48 || (outfit_templateObject48 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined); // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.

      var missingAccessories = []; // accessories that are not already equipped

      var _iterator7 = outfit_createForOfIteratorHelper(accessoryEquips),
          _step7;

      try {
        var _loop = function _loop() {
          var accessory = _step7.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && (0,external_kolmafia_namespaceObject.equippedItem)(slot) === accessory);

          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };

        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop();
        } // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.

      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      for (var _i2 = 0, _missingAccessories = missingAccessories; _i2 < _missingAccessories.length; _i2++) {
        var accessory = _missingAccessories[_i2];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));

        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }

        (0,external_kolmafia_namespaceObject.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      } // Remaining slots are filled by the maximizer


      var modes = convertToLibramModes(this.modes);

      if (this.modifier.length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: outfit_toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);

        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            (0,external_kolmafia_namespaceObject.cliExecute)("refresh inventory");

            this._dress(true);

            return;
          } else throw new Error("Failed to maximize properly!");
        }

        (0,external_kolmafia_namespaceObject.logprint)("Maximize: ".concat(this.modifier));
      } // Set the modes of any equipped items.


      applyModes(modes); // Handle the rider slots next

      if (bjorn) {
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() === bjorn) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() !== bjorn) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(bjorn);
      }

      if (crown) {
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() === crown) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() !== crown) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(crown);
      } // Verify that all equipment was indeed equipped


      if (this.familiar !== undefined && (0,external_kolmafia_namespaceObject.myFamiliar)() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");

      var _iterator8 = outfit_createForOfIteratorHelper(nonaccessorySlots),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _slot2 = _step8.value;

          if (this.equips.has(_slot2) && (0,external_kolmafia_namespaceObject.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = outfit_createForOfIteratorHelper(accessoryEquips),
          _step9;

      try {
        var _loop2 = function _loop2() {
          var accessory = _step9.value;

          if ((0,external_kolmafia_namespaceObject.equippedAmount)(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };

        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      for (var _i3 = 0, _arr2 = [[$slot(outfit_templateObject49 || (outfit_templateObject49 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), external_kolmafia_namespaceObject.myBjornedFamiliar], [$slot(outfit_templateObject50 || (outfit_templateObject50 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), external_kolmafia_namespaceObject.myEnthronedFamiliar]]; _i3 < _arr2.length; _i3++) {
        var _arr2$_i = outfit_slicedToArray(_arr2[_i3], 2),
            rider = _arr2$_i[0],
            checkingFunction = _arr2$_i[1];

        var wanted = this.riders.get(rider);

        if (wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      this._dress(false);
    }
    /**
     * Build an Outfit identical to this outfit.
     */

  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = outfit_toConsumableArray(this.modifier);
      result.avoid = outfit_toConsumableArray(this.avoid);
      result.modes = outfit_objectSpread({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */

  }, {
    key: "spec",
    value: function spec() {
      var _a;

      var result = {
        modifier: outfit_toConsumableArray(this.modifier),
        avoid: outfit_toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: outfit_objectSpread({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar) result.familiar = this.familiar; // Add all equipment forced in a particular slot

      var _iterator10 = outfit_createForOfIteratorHelper(outfitSlots),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var slotName = _step10.value;
          var entry = this.equips.get((_a = new Map([["famequip", $slot(_templateObject56 || (_templateObject56 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject57 || (_templateObject57 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName));
          if (entry) result[slotName] = entry;
        } // Include the riders

      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject54 || (_templateObject54 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject55 || (_templateObject55 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;

      var outfit = new Outfit();
      var familiar = (0,external_kolmafia_namespaceObject.myFamiliar)();

      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }

      var _iterator11 = outfit_createForOfIteratorHelper(outfitSlots),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var slotName = _step11.value;
          var slot = (_a = new Map([["famequip", $slot(_templateObject62 || (_templateObject62 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject63 || (_templateObject63 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
          var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);

          if (!outfit.equip(item, slot)) {
            throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject58 || (_templateObject58 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject59 || (_templateObject59 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject60 || (_templateObject60 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject61 || (_templateObject61 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
      outfit.setModes(outfit_getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var outfit = new Outfit();
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);

  return Outfit;
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */

function convertToLibramModes(modes) {
  var _a;

  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"]
  };
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */

function outfit_getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */

function getMode(property, options) {
  var val = property_get(property, "");
  return options.find(s => s === val); // .includes has type issues
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/engine.js
var engine_templateObject;

function engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function engine_toConsumableArray(arr) { return engine_arrayWithoutHoles(arr) || engine_iterableToArray(arr) || engine_unsupportedIterableToArray(arr) || engine_nonIterableSpread(); }

function engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_arrayLikeToArray(arr); }

function engine_slicedToArray(arr, i) { return engine_arrayWithHoles(arr) || engine_iterableToArrayLimit(arr, i) || engine_unsupportedIterableToArray(arr, i) || engine_nonIterableRest(); }

function engine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function engine_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function engine_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_arrayLikeToArray(o, minLen); }

function engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_defineProperties(Constructor, staticProps); return Constructor; }

function engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var EngineOptions = function EngineOptions() {
  engine_classCallCheck(this, EngineOptions);
};
var grimoireCCS = "grimoire_macro";
var Engine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function Engine(tasks, options) {
    engine_classCallCheck(this, Engine);

    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.tasks = tasks;
    this.options = options !== null && options !== void 0 ? options : {};

    var _iterator = engine_createForOfIteratorHelper(tasks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */


  engine_createClass(Engine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */

  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */

  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */

  }, {
    key: "available",
    value: function available(task) {
      var _a;

      var _iterator2 = engine_createForOfIteratorHelper((_a = task.after) !== null && _a !== void 0 ? _a : []),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed()) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (task.ready && !task.ready()) return false;
      if (task.completed()) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */

  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;

      (0,external_kolmafia_namespaceObject.print)("");
      (0,external_kolmafia_namespaceObject.print)("Executing ".concat(task.name), "blue"); // Determine the proper postcondition for after the task executes.

      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a); // Acquire any items and effects first, possibly for later execution steps.

      this.acquireItems(task);
      this.acquireEffects(task); // Prepare the outfit, with resources.

      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit); // Prepare combat and choices

      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager); // Actually perform the task

      var _iterator3 = engine_createForOfIteratorHelper(task_resources.all()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.prepare(task);
      this.do(task);

      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }

      this.post(task); // Mark that we tried the task, and apply limits

      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */

  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;

      var acquire = undelay(task.acquire);

      var _iterator4 = engine_createForOfIteratorHelper(acquire || []),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;

          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            (0,external_kolmafia_namespaceObject.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0,external_kolmafia_namespaceObject.getRelated)(to_get.item, "fold")).length > 0) {
            (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0,external_kolmafia_namespaceObject.retrieveItem)(to_get.item, num_needed);
          }

          if ((0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */

  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;

      var effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys((0,external_kolmafia_namespaceObject.myEffects)()).map(effectName => (0,external_kolmafia_namespaceObject.toEffect)(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));

      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();

        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }

      var _iterator5 = engine_createForOfIteratorHelper(effects),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */

  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();

      if (spec !== undefined) {
        if (!outfit.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }

      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */

  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.setLocation)(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */

    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */

  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {// do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */

    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */

  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;

      for (var _i = 0, _Object$entries = Object.entries((_a = task.choices) !== null && _a !== void 0 ? _a : {}); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = engine_slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            func = _Object$entries$_i[1];

        if (func === undefined) continue;
        manager.setChoice(parseInt(key), undelay(func));
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */

  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a; // Save regular combat macro


      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof external_kolmafia_namespaceObject.Location ? task.do : undefined);
      macro.save();

      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(engine_toConsumableArray(otherCCSEntries)).join("\n"); // Log Macro + other CCS

        (0,external_kolmafia_namespaceObject.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));

        if (ccsContents !== this.cachedCcsContents) {
          (0,external_kolmafia_namespaceObject.writeCcs)(ccsContents, grimoireCCS);
          (0,external_kolmafia_namespaceObject.cliExecute)("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs

          this.cachedCcsContents = ccsContents;
        }
      } // Save autoattack combat macro


      var autoattack = task_combat.compileAutoattack();

      if (autoattack.toString().length > 1) {
        (0,external_kolmafia_namespaceObject.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */

  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;

      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */

  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do() : task.do;
      if (result instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.adv1)(result, -1, "");
      (0,external_kolmafia_namespaceObject.runCombat)();

      while ((0,external_kolmafia_namespaceObject.inMultiFight)()) {
        (0,external_kolmafia_namespaceObject.runCombat)();
      }

      if ((0,external_kolmafia_namespaceObject.choiceFollowsFight)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */

  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof external_kolmafia_namespaceObject.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */

  }, {
    key: "post",
    value: function post(task) {
      var _a;

      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */

  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */

  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;

      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";

      if (!task.completed()) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof external_kolmafia_namespaceObject.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
      }

      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */

  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a; // Properties adapted from garbo


      manager.set(this.getDefaultSettings());

      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && (0,external_kolmafia_namespaceObject.readCcs)(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          (0,external_kolmafia_namespaceObject.writeCcs)("[ default ]\nabort", grimoireCCS);
        }

        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);

  return Engine;
}();
Engine.defaultSettings = {
  logPreferenceChange: true,
  logPreferenceChangeFilter: engine_toConsumableArray(new Set([].concat(engine_toConsumableArray(property_get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: true,
  autoSatisfyWithNPCs: true,
  autoSatisfyWithCoinmasters: true,
  autoSatisfyWithStash: false,
  dontStopForCounters: true,
  maximizerFoldables: true,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: true,
  autoPinkyRing: true,
  autoGarish: true,
  allowNonMoodBurning: false,
  allowSummonBurning: true,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return have(template_string_$skill(engine_templateObject || (engine_templateObject = engine_taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set([// Halloweener dog noncombats
"Wooof! Wooooooof!", "Playing Fetch*", // June cleaver noncombats
"Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet", // Lil' Doctor™ bag noncombat
"A Pound of Cure", // Turtle taming noncombats
"Nantucket Snapper", "Blue Monday", "Capital!", "Training Day", "Boxed In", "Duel Nature", "Slow Food", "A Rolling Turtle Gathers No Moss", "Slow Road to Hell", "C'mere, Little Fella", "The Real Victims", "Like That Time in Tortuga", "Cleansing your Palette", "Harem Scarum", "Turtle in peril", "No Man, No Hole", "Slow and Steady Wins the Brawl", "Stormy Weather", "Turtles of the Universe", "O Turtle Were Art Thou", "Allow 6-8 Weeks For Delivery", "Kick the Can", "Turtles All The Way Around", "More eXtreme Than Usual", "Jewel in the Rough", "The worst kind of drowning", "Even Tamer Than Usual", "Never Break the Chain", "Close, but Yes Cigar", "Armchair Quarterback", "This Turtle Rocks!", "Really Sticking Her Neck Out", "It Came from Beneath the Sewer? Great!", "Don't Be Alarmed, Now", "Puttin' it on Wax", "More Like... Hurtle", "Musk! Musk! Musk!", "Silent Strolling"]);
var zoneSpecificNCs = new Map([["The Horror...", ["Frat House"]] // Duplicate choice name
]);
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */

function lastEncounterWasWanderingNC() {
  var _a;

  var last = property_get("lastEncounter");

  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes(property_get("lastAdventure"));
  } else {
    return wanderingNCs.has(last);
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/index.js







;// CONCATENATED MODULE: ./src/args.ts


var args = Args.create("pvp_mab", "A multi-armed bandit script for pvp", {
  breakStone: Args.flag({
    help: "Should pvp_mab break your stone?",
    default: true
  }),
  target: Args.custom({
    default: (0,external_kolmafia_namespaceObject.canInteract)() ? "loot" : "fame",
    options: [["fame"], ["loot"], ["flowers"]]
  }, x => x, "pvp target"),
  debug: Args.flag({
    help: "Print debugging information for strategies",
    default: false
  }),
  strategy: Args.custom({
    default: "bernoulliThompson",
    options: [["UCB"], // ["Exp3"],
    // ["Exp3IX"],
    ["bernoulliThompson"], ["epsilonGreedy"], ["gaussianThompson"]]
  }, x => x, "multi-armed bandit strategy"),
  no_optimize: Args.flag({
    help: "Skip the uberpvpoptimizer step",
    default: false
  })
});
;// CONCATENATED MODULE: ./src/distributions.ts
function sampleNormal() {
  var mean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stdev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  // Taken from https://stackoverflow.com/a/36481059
  var u = 1 - Math.random(); // Converting [0,1) to (0,1]

  var v = Math.random();
  var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v); // Transform to the desired mean and standard deviation:

  return z * stdev + mean;
}
function sampleGamma(a) {
  // Adapted from https://dl.acm.org/doi/pdf/10.1145/358407.358414
  var d = a - 1.0 / 3;
  var c = 1 / Math.sqrt(9 * d);
  var count = 0; // eslint-disable-next-line no-constant-condition

  while (true) {
    var x = sampleNormal();
    var v = Math.pow(1 + c * x, 3);
    var U = Math.random();
    if (U < 1 - 0.0331 * Math.pow(x, 4)) return d * v;else if (Math.log(U) < 0.5 * Math.pow(x, 2) + d * (1 - v + Math.log(v))) return d * v;
    if (count++ >= 10000) return d * v; // Don't infinite loop
  }
}
function sampleBeta(a, b) {
  var X = sampleGamma(a);
  var Y = sampleGamma(b);
  return X / (X + Y);
}
;// CONCATENATED MODULE: ./src/strategies.ts
function strategies_slicedToArray(arr, i) { return strategies_arrayWithHoles(arr) || strategies_iterableToArrayLimit(arr, i) || strategies_unsupportedIterableToArray(arr, i) || strategies_nonIterableRest(); }

function strategies_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function strategies_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return strategies_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return strategies_arrayLikeToArray(o, minLen); }

function strategies_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function strategies_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function strategies_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function UCB() {
  if (args.debug) (0,external_kolmafia_namespaceObject.print)("Using UCB strategy", "blue");
  var fightRecords = getFightRecords();
  var t = Math.max(1, sumNumbers(fightRecords.map(_ref => {
    var _ref2 = strategies_slicedToArray(_ref, 2),
        wins = _ref2[0],
        losses = _ref2[1];

    return wins + losses;
  })));
  var logConst = 2 * Math.log(t);
  var payoffs = pvpIDs.map(i => {
    var _fightRecords$i = strategies_slicedToArray(fightRecords[i], 2),
        wins = _fightRecords$i[0],
        losses = _fightRecords$i[1];

    var n = wins + losses;
    var payoff = n > 0 ? wins / n + Math.sqrt(logConst / n) : 10; // Try all at least once at the start

    if (args.debug) (0,external_kolmafia_namespaceObject.print)("".concat(activeMinisSorted[i], ": ").concat(payoff.toFixed(3)), "blue");
    return payoff;
  });
  return sortedPvpIDs[maxBy(pvpIDs, i => payoffs[i])];
}
function gaussianThompson() {
  if (args.debug) (0,external_kolmafia_namespaceObject.print)("Using Gaussian Thompson strategy", "blue");
  var fightRecords = getFightRecords();
  var payoffs = pvpIDs.map(i => {
    var _fightRecords$i2 = strategies_slicedToArray(fightRecords[i], 2),
        wins = _fightRecords$i2[0],
        losses = _fightRecords$i2[1];

    var n = wins + losses;
    var payoff = n > 0 ? sampleNormal(wins / n, 1.0 / Math.sqrt(n)) : sampleNormal(0.5, 1e-2);
    if (args.debug) (0,external_kolmafia_namespaceObject.print)("".concat(activeMinisSorted[i], ": ").concat(payoff.toFixed(3)), "blue");
    return payoff;
  });
  return sortedPvpIDs[maxBy(pvpIDs, i => payoffs[i])];
}
function bernoulliThompson() {
  if (args.debug) (0,external_kolmafia_namespaceObject.print)("Using Bernoulli Thompson strategy", "blue");
  var fightRecords = getFightRecords();
  var payoffs = pvpIDs.map(i => {
    var _fightRecords$i3 = strategies_slicedToArray(fightRecords[i], 2),
        wins = _fightRecords$i3[0],
        losses = _fightRecords$i3[1];

    var payoff = sampleBeta(wins, losses);
    if (args.debug) (0,external_kolmafia_namespaceObject.print)("".concat(activeMinisSorted[i], ": ").concat(payoff.toFixed(3)), "blue");
    return payoff;
  });
  return sortedPvpIDs[maxBy(pvpIDs, i => payoffs[i])];
}
function epsilonGreedy() {
  if (args.debug) (0,external_kolmafia_namespaceObject.print)("Using Epsilon Greedy strategy", "blue");
  var fightRecords = getFightRecords();
  var t = Math.max(1, sumNumbers(fightRecords.map(_ref3 => {
    var _ref4 = strategies_slicedToArray(_ref3, 2),
        wins = _ref4[0],
        losses = _ref4[1];

    return wins + losses;
  })));
  var payoffs = pvpIDs.map(i => {
    var _fightRecords$i4 = strategies_slicedToArray(fightRecords[i], 2),
        wins = _fightRecords$i4[0],
        losses = _fightRecords$i4[1];

    var payoff = wins / (wins + losses);
    if (args.debug) (0,external_kolmafia_namespaceObject.print)("".concat(activeMinisSorted[i], ": ").concat(payoff.toFixed(3)), "blue");
    return payoff;
  });
  var idx = Math.random() <= 1.0 / Math.sqrt(t) ? Math.floor(Math.random() * activeMinis.length) : maxBy(pvpIDs, i => payoffs[i]);
  return sortedPvpIDs[idx];
}
/*
export function Exp3(): number {
  if (args.debug) print("Using Exp3 strategy", "blue");
  const Ls = pvpIDs.map((i) => {
    const L = Number(get(`myCurrentPVPMiniExp3Weight_${i}`));
    return L === 0.0 ? 1.0 : L;
  });
  const Ps = getExp3Probabilities(Ls);
  if (args.debug) Ps.forEach((P, i) => print(`${activeMinisSorted[i]}: ${P.toFixed(3)}`, "blue"));

  const idx = sampleProbabilitiesIdx(Ps);

  return sortedPvpIDs[idx];
}

export function Exp3IX(): number {
  if (args.debug) print("Using Exp3IX strategy", "blue");
  const Ls = pvpIDs.map((i) => Number(get(`myCurrentPVPMiniExp3IXWeight_${i}`)));
  const Ps = getExp3IXProbabilities(Ls);
  if (args.debug) Ps.forEach((P, i) => print(`${activeMinisSorted[i]}: ${P.toFixed(3)}`, "blue"));

  const idx = sampleProbabilitiesIdx(Ps);

  return sortedPvpIDs[idx];
}
*/
;// CONCATENATED MODULE: ./node_modules/fuzzball/dist/esm/fuzzball.esm.min.js
var se,
    pe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    he = {
  exports: {}
},
    de = Math.floor,
    ge = Math.max,
    ve = Math.min,
    _calculateRatio = function _calculateRatio(se, pe) {
  return pe ? 2 * se / pe : 1;
},
    _arrayCmp = function _arrayCmp(se, pe) {
  var he, de, ge, ye, _e, be;

  for (_e = [se.length, pe.length], he = ye = 0, be = ve(de = _e[0], ge = _e[1]); 0 <= be ? ye < be : ye > be; he = 0 <= be ? ++ye : --ye) {
    if (se[he] < pe[he]) return -1;
    if (se[he] > pe[he]) return 1;
  }

  return de - ge;
},
    _has = function _has(se, pe) {
  return Object.prototype.hasOwnProperty.call(se, pe);
},
    ye = function () {
  function SequenceMatcher(se, pe, he, de) {
    this.isjunk = se, null == pe && (pe = ""), null == he && (he = ""), this.autojunk = null == de || de, this.a = this.b = null, this.setSeqs(pe, he);
  }

  return SequenceMatcher.prototype.setSeqs = function (se, pe) {
    return this.setSeq1(se), this.setSeq2(pe);
  }, SequenceMatcher.prototype.setSeq1 = function (se) {
    if (se !== this.a) return this.a = se, this.matchingBlocks = this.opcodes = null;
  }, SequenceMatcher.prototype.setSeq2 = function (se) {
    if (se !== this.b) return this.b = se, this.matchingBlocks = this.opcodes = null, this.fullbcount = null, this._chainB();
  }, SequenceMatcher.prototype._chainB = function () {
    var se, pe, he, ge, ve, ye, _e, be, me, xe, we, je, ke, Ee;

    for (se = this.b, this.b2j = pe = {}, ge = xe = 0, je = se.length; xe < je; ge = ++xe) {
      he = se[ge], (_has(pe, he) ? pe[he] : pe[he] = []).push(ge);
    }

    if (ye = {}, ve = this.isjunk) for (we = 0, ke = (Ee = Object.keys(pe)).length; we < ke; we++) {
      ve(he = Ee[we]) && (ye[he] = !0, delete pe[he]);
    }
    if (me = {}, _e = se.length, this.autojunk && _e >= 200) for (he in be = de(_e / 100) + 1, pe) {
      pe[he].length > be && (me[he] = !0, delete pe[he]);
    }
    return this.isbjunk = function (se) {
      return _has(ye, se);
    }, this.isbpopular = function (se) {
      return _has(me, se);
    };
  }, SequenceMatcher.prototype.findLongestMatch = function (se, pe, he, de) {
    var ge, ve, ye, _e, be, me, xe, we, je, ke, Ee, Ae, Se, Oe, Re, Ce, Ie, ze, $e, Me, Ne;

    for (ge = (Ce = [this.a, this.b, this.b2j, this.isbjunk])[0], ve = Ce[1], ye = Ce[2], we = Ce[3], _e = (Ie = [se, he, 0])[0], be = Ie[1], me = Ie[2], ke = {}, xe = Se = se; se <= pe ? Se < pe : Se > pe; xe = se <= pe ? ++Se : --Se) {
      for (Ae = {}, Oe = 0, Re = (ze = _has(ye, ge[xe]) ? ye[ge[xe]] : []).length; Oe < Re; Oe++) {
        if (!((je = ze[Oe]) < he)) {
          if (je >= de) break;
          (Ee = Ae[je] = (ke[je - 1] || 0) + 1) > me && (_e = ($e = [xe - Ee + 1, je - Ee + 1, Ee])[0], be = $e[1], me = $e[2]);
        }
      }

      ke = Ae;
    }

    for (; _e > se && be > he && !we(ve[be - 1]) && ge[_e - 1] === ve[be - 1];) {
      _e = (Me = [_e - 1, be - 1, me + 1])[0], be = Me[1], me = Me[2];
    }

    for (; _e + me < pe && be + me < de && !we(ve[be + me]) && ge[_e + me] === ve[be + me];) {
      me++;
    }

    for (; _e > se && be > he && we(ve[be - 1]) && ge[_e - 1] === ve[be - 1];) {
      _e = (Ne = [_e - 1, be - 1, me + 1])[0], be = Ne[1], me = Ne[2];
    }

    for (; _e + me < pe && be + me < de && we(ve[be + me]) && ge[_e + me] === ve[be + me];) {
      me++;
    }

    return [_e, be, me];
  }, SequenceMatcher.prototype.getMatchingBlocks = function () {
    var se, pe, he, de, ge, ve, ye, _e, be, me, xe, we, je, ke, Ee, Ae, Se, Oe, Re, Ce, Ie, ze, $e, Me, Ne, Pe;

    if (this.matchingBlocks) return this.matchingBlocks;

    for (Oe = [[0, ke = (ze = [this.a.length, this.b.length])[0], 0, Ee = ze[1]]], Ae = []; Oe.length;) {
      pe = ($e = Oe.pop())[0], se = $e[1], de = $e[2], he = $e[3], ge = (Me = Re = this.findLongestMatch(pe, se, de, he))[0], _e = Me[1], (xe = Me[2]) && (Ae.push(Re), pe < ge && de < _e && Oe.push([pe, ge, de, _e]), ge + xe < se && _e + xe < he && Oe.push([ge + xe, se, _e + xe, he]));
    }

    for (Ae.sort(_arrayCmp), ve = be = we = 0, Se = [], Ce = 0, Ie = Ae.length; Ce < Ie; Ce++) {
      ye = (Ne = Ae[Ce])[0], me = Ne[1], je = Ne[2], ve + we === ye && be + we === me ? we += je : (we && Se.push([ve, be, we]), ve = (Pe = [ye, me, je])[0], be = Pe[1], we = Pe[2]);
    }

    return we && Se.push([ve, be, we]), Se.push([ke, Ee, 0]), this.matchingBlocks = Se;
  }, SequenceMatcher.prototype.getOpcodes = function () {
    var se, pe, he, de, ge, ve, ye, _e, be, me, xe, we;

    if (this.opcodes) return this.opcodes;

    for (de = ge = 0, this.opcodes = pe = [], _e = 0, be = (me = this.getMatchingBlocks()).length; _e < be; _e++) {
      se = (xe = me[_e])[0], he = xe[1], ve = xe[2], ye = "", de < se && ge < he ? ye = "replace" : de < se ? ye = "delete" : ge < he && (ye = "insert"), ye && pe.push([ye, de, se, ge, he]), de = (we = [se + ve, he + ve])[0], ge = we[1], ve && pe.push(["equal", se, de, he, ge]);
    }

    return pe;
  }, SequenceMatcher.prototype.getGroupedOpcodes = function (se) {
    var pe, he, de, ye, _e, be, me, xe, we, je, ke, Ee, Ae, Se, Oe;

    for (null == se && (se = 3), (pe = this.getOpcodes()).length || (pe = [["equal", 0, 1, 0, 1]]), "equal" === pe[0][0] && (we = (Ee = pe[0])[0], ye = Ee[1], _e = Ee[2], be = Ee[3], me = Ee[4], pe[0] = [we, ge(ye, _e - se), _e, ge(be, me - se), me]), "equal" === pe[pe.length - 1][0] && (we = (Ae = pe[pe.length - 1])[0], ye = Ae[1], _e = Ae[2], be = Ae[3], me = Ae[4], pe[pe.length - 1] = [we, ye, ve(_e, ye + se), be, ve(me, be + se)]), xe = se + se, de = [], he = [], je = 0, ke = pe.length; je < ke; je++) {
      we = (Se = pe[je])[0], ye = Se[1], _e = Se[2], be = Se[3], me = Se[4], "equal" === we && _e - ye > xe && (he.push([we, ye, ve(_e, ye + se), be, ve(me, be + se)]), de.push(he), he = [], ye = (Oe = [ge(ye, _e - se), ge(be, me - se)])[0], be = Oe[1]), he.push([we, ye, _e, be, me]);
    }

    return !he.length || 1 === he.length && "equal" === he[0][0] || de.push(he), de;
  }, SequenceMatcher.prototype.ratio = function () {
    var se, pe, he, de;

    for (se = 0, pe = 0, he = (de = this.getMatchingBlocks()).length; pe < he; pe++) {
      se += de[pe][2];
    }

    return _calculateRatio(se, this.a.length + this.b.length);
  }, SequenceMatcher.prototype.quickRatio = function () {
    var se, pe, he, de, ge, ve, ye, _e, be, me, xe;

    if (!this.fullbcount) for (this.fullbcount = he = {}, ve = 0, _e = (me = this.b).length; ve < _e; ve++) {
      he[pe = me[ve]] = (he[pe] || 0) + 1;
    }

    for (he = this.fullbcount, se = {}, de = 0, ye = 0, be = (xe = this.a).length; ye < be; ye++) {
      pe = xe[ye], ge = _has(se, pe) ? se[pe] : he[pe] || 0, se[pe] = ge - 1, ge > 0 && de++;
    }

    return _calculateRatio(de, this.a.length + this.b.length);
  }, SequenceMatcher.prototype.realQuickRatio = function () {
    var se, pe, he;
    return he = [this.a.length, this.b.length], _calculateRatio(ve(se = he[0], pe = he[1]), se + pe);
  }, SequenceMatcher;
}(),
    _e = {
  exports: {}
};

se = _e, function () {
  var pe, he, de, ge, ve, ye, _e, be, me, xe, we, je, ke, Ee, Ae;

  de = Math.floor, xe = Math.min, he = function he(se, pe) {
    return se < pe ? -1 : se > pe ? 1 : 0;
  }, me = function me(se, pe, ge, ve, ye) {
    var _e;

    if (null == ge && (ge = 0), null == ye && (ye = he), ge < 0) throw new Error("lo must be non-negative");

    for (null == ve && (ve = se.length); ge < ve;) {
      ye(pe, se[_e = de((ge + ve) / 2)]) < 0 ? ve = _e : ge = _e + 1;
    }

    return [].splice.apply(se, [ge, ge - ge].concat(pe)), pe;
  }, ye = function ye(se, pe, de) {
    return null == de && (de = he), se.push(pe), Ee(se, 0, se.length - 1, de);
  }, ve = function ve(se, pe) {
    var de, ge;
    return null == pe && (pe = he), de = se.pop(), se.length ? (ge = se[0], se[0] = de, Ae(se, 0, pe)) : ge = de, ge;
  }, be = function be(se, pe, de) {
    var ge;
    return null == de && (de = he), ge = se[0], se[0] = pe, Ae(se, 0, de), ge;
  }, _e = function _e(se, pe, de) {
    var ge;
    return null == de && (de = he), se.length && de(se[0], pe) < 0 && (pe = (ge = [se[0], pe])[0], se[0] = ge[1], Ae(se, 0, de)), pe;
  }, ge = function ge(se, pe) {
    var ge, ve, ye, _e, be, me;

    for (null == pe && (pe = he), be = [], ve = 0, ye = (_e = function () {
      me = [];

      for (var pe = 0, he = de(se.length / 2); 0 <= he ? pe < he : pe > he; 0 <= he ? pe++ : pe--) {
        me.push(pe);
      }

      return me;
    }.apply(this).reverse()).length; ve < ye; ve++) {
      ge = _e[ve], be.push(Ae(se, ge, pe));
    }

    return be;
  }, ke = function ke(se, pe, de) {
    var ge;
    if (null == de && (de = he), -1 !== (ge = se.indexOf(pe))) return Ee(se, 0, ge, de), Ae(se, ge, de);
  }, we = function we(se, pe, de) {
    var ve, ye, be, me, xe;
    if (null == de && (de = he), !(ye = se.slice(0, pe)).length) return ye;

    for (ge(ye, de), be = 0, me = (xe = se.slice(pe)).length; be < me; be++) {
      ve = xe[be], _e(ye, ve, de);
    }

    return ye.sort(de).reverse();
  }, je = function je(se, pe, de) {
    var ye, _e, be, we, je, ke, Ee, Ae, Se;

    if (null == de && (de = he), 10 * pe <= se.length) {
      if (!(be = se.slice(0, pe).sort(de)).length) return be;

      for (_e = be[be.length - 1], we = 0, ke = (Ee = se.slice(pe)).length; we < ke; we++) {
        de(ye = Ee[we], _e) < 0 && (me(be, ye, 0, null, de), be.pop(), _e = be[be.length - 1]);
      }

      return be;
    }

    for (ge(se, de), Se = [], je = 0, Ae = xe(pe, se.length); 0 <= Ae ? je < Ae : je > Ae; 0 <= Ae ? ++je : --je) {
      Se.push(ve(se, de));
    }

    return Se;
  }, Ee = function Ee(se, pe, de, ge) {
    var ve, ye, _e;

    for (null == ge && (ge = he), ve = se[de]; de > pe && ge(ve, ye = se[_e = de - 1 >> 1]) < 0;) {
      se[de] = ye, de = _e;
    }

    return se[de] = ve;
  }, Ae = function Ae(se, pe, de) {
    var ge, ve, ye, _e, be;

    for (null == de && (de = he), ve = se.length, be = pe, ye = se[pe], ge = 2 * pe + 1; ge < ve;) {
      (_e = ge + 1) < ve && !(de(se[ge], se[_e]) < 0) && (ge = _e), se[pe] = se[ge], ge = 2 * (pe = ge) + 1;
    }

    return se[pe] = ye, Ee(se, be, pe, de);
  }, pe = function () {
    function Heap(se) {
      this.cmp = null != se ? se : he, this.nodes = [];
    }

    return Heap.push = ye, Heap.pop = ve, Heap.replace = be, Heap.pushpop = _e, Heap.heapify = ge, Heap.updateItem = ke, Heap.nlargest = we, Heap.nsmallest = je, Heap.prototype.push = function (se) {
      return ye(this.nodes, se, this.cmp);
    }, Heap.prototype.pop = function () {
      return ve(this.nodes, this.cmp);
    }, Heap.prototype.peek = function () {
      return this.nodes[0];
    }, Heap.prototype.contains = function (se) {
      return -1 !== this.nodes.indexOf(se);
    }, Heap.prototype.replace = function (se) {
      return be(this.nodes, se, this.cmp);
    }, Heap.prototype.pushpop = function (se) {
      return _e(this.nodes, se, this.cmp);
    }, Heap.prototype.heapify = function () {
      return ge(this.nodes, this.cmp);
    }, Heap.prototype.updateItem = function (se) {
      return ke(this.nodes, se, this.cmp);
    }, Heap.prototype.clear = function () {
      return this.nodes = [];
    }, Heap.prototype.empty = function () {
      return 0 === this.nodes.length;
    }, Heap.prototype.size = function () {
      return this.nodes.length;
    }, Heap.prototype.clone = function () {
      var se;
      return (se = new Heap()).nodes = this.nodes.slice(0), se;
    }, Heap.prototype.toArray = function () {
      return this.nodes.slice(0);
    }, Heap.prototype.insert = Heap.prototype.push, Heap.prototype.top = Heap.prototype.peek, Heap.prototype.front = Heap.prototype.peek, Heap.prototype.has = Heap.prototype.contains, Heap.prototype.copy = Heap.prototype.clone, Heap;
  }(), se.exports = pe;
}.call(pe);
var be,
    me,
    xe,
    we = _e.exports,
    je = {
  exports: {}
};
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="intersection,difference,uniq,intersectionWith,differenceWith,uniqWith,toArray,partialRight,keys,isArray,forEach,orderBy" -p -o ./lib/lodash.custom.min.js`
 */

!function (se, he) {
  (function () {
    function t(se, pe, he) {
      switch (he.length) {
        case 0:
          return se.call(pe);

        case 1:
          return se.call(pe, he[0]);

        case 2:
          return se.call(pe, he[0], he[1]);

        case 3:
          return se.call(pe, he[0], he[1], he[2]);
      }

      return se.apply(pe, he);
    }

    function e(se, pe) {
      for (var he = -1, de = null == se ? 0 : se.length; ++he < de && !1 !== pe(se[he], he, se);) {
        ;
      }

      return se;
    }

    function n(se, pe) {
      var he;

      if (he = !(null == se || !se.length)) {
        if (pe == pe) e: {
          he = -1;

          for (var de = se.length; ++he < de;) {
            if (se[he] === pe) break e;
          }

          he = -1;
        } else e: {
          he = f;
          de = se.length;

          for (var ge = -1; ++ge < de;) {
            if (he(se[ge], ge, se)) {
              he = ge;
              break e;
            }
          }

          he = -1;
        }
        he = -1 < he;
      }

      return he;
    }

    function u(se, pe, he) {
      for (var de = -1, ge = null == se ? 0 : se.length; ++de < ge;) {
        if (he(pe, se[de])) return !0;
      }

      return !1;
    }

    function o(se, pe) {
      for (var he = -1, de = null == se ? 0 : se.length, ge = Array(de); ++he < de;) {
        ge[he] = pe(se[he], he, se);
      }

      return ge;
    }

    function i(se, pe) {
      for (var he = -1, de = pe.length, ge = se.length; ++he < de;) {
        se[ge + he] = pe[he];
      }

      return se;
    }

    function c(se, pe) {
      for (var he = -1, de = null == se ? 0 : se.length; ++he < de;) {
        if (pe(se[he], he, se)) return !0;
      }

      return !1;
    }

    function f(se) {
      return se != se;
    }

    function s(se) {
      return function (pe) {
        return se(pe);
      };
    }

    function b(se, pe) {
      return se.has(pe);
    }

    function p(se) {
      var pe = -1,
          he = Array(se.size);
      return se.forEach(function (se, de) {
        he[++pe] = [de, se];
      }), he;
    }

    function y(se) {
      var pe = Object;
      return function (he) {
        return se(pe(he));
      };
    }

    function _(se, pe) {
      for (var he = -1, de = se.length, ge = 0, ve = []; ++he < de;) {
        var ye = se[he];
        ye !== pe && "__lodash_placeholder__" !== ye || (se[he] = "__lodash_placeholder__", ve[ge++] = he);
      }

      return ve;
    }

    function g(se) {
      var pe = -1,
          he = Array(se.size);
      return se.forEach(function (se) {
        he[++pe] = se;
      }), he;
    }

    function v() {}

    function d(se) {
      this.__wrapped__ = se, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
    }

    function j(se) {
      var pe = -1,
          he = null == se ? 0 : se.length;

      for (this.clear(); ++pe < he;) {
        var de = se[pe];
        this.set(de[0], de[1]);
      }
    }

    function w(se) {
      var pe = -1,
          he = null == se ? 0 : se.length;

      for (this.clear(); ++pe < he;) {
        var de = se[pe];
        this.set(de[0], de[1]);
      }
    }

    function A(se) {
      var pe = -1,
          he = null == se ? 0 : se.length;

      for (this.clear(); ++pe < he;) {
        var de = se[pe];
        this.set(de[0], de[1]);
      }
    }

    function m(se) {
      var pe = -1,
          he = null == se ? 0 : se.length;

      for (this.__data__ = new A(); ++pe < he;) {
        this.add(se[pe]);
      }
    }

    function O(se) {
      this.size = (this.__data__ = new w(se)).size;
    }

    function S(se, pe) {
      var he = tn(se),
          de = !he && en(se),
          ge = !he && !de && rn(se),
          ve = !he && !de && !ge && an(se);

      if (he = he || de || ge || ve) {
        de = se.length;

        for (var ye = String, _e = -1, be = Array(de); ++_e < de;) {
          be[_e] = ye(_e);
        }

        de = be;
      } else de = [];

      var me;
      ye = de.length;

      for (me in se) {
        !pe && !Ke.call(se, me) || he && ("length" == me || ge && ("offset" == me || "parent" == me) || ve && ("buffer" == me || "byteLength" == me || "byteOffset" == me) || xt(me, ye)) || de.push(me);
      }

      return de;
    }

    function k(se, pe, he) {
      var ge = se[pe];
      Ke.call(se, pe) && Ct(ge, he) && (he !== de || pe in se) || F(se, pe, he);
    }

    function x(se, pe) {
      for (var he = se.length; he--;) {
        if (Ct(se[he][0], pe)) return he;
      }

      return -1;
    }

    function F(se, pe, he) {
      "__proto__" == pe && hr ? hr(se, pe, {
        configurable: !0,
        enumerable: !0,
        value: he,
        writable: !0
      }) : se[pe] = he;
    }

    function I(se, pe, he, ge, ve, ye) {
      var _e,
          be = 1 & pe,
          me = 2 & pe,
          xe = 4 & pe;

      if (he && (_e = ve ? he(se, ge, ve, ye) : he(se)), _e !== de) return _e;
      if (!qt(se)) return se;

      if (ge = tn(se)) {
        if (_e = function Ot(se) {
          var pe = se.length,
              he = new se.constructor(pe);
          return pe && "string" == typeof se[0] && Ke.call(se, "index") && (he.index = se.index, he.input = se.input), he;
        }(se), !be) return ot(se, _e);
      } else {
        var we = Ur(se),
            je = "[object Function]" == we || "[object GeneratorFunction]" == we;
        if (rn(se)) return function et(se, pe) {
          if (pe) return se.slice();
          var he = se.length;
          he = ar ? ar(he) : new se.constructor(he);
          return se.copy(he), he;
        }(se, be);

        if ("[object Object]" == we || "[object Arguments]" == we || je && !ve) {
          if (_e = me || je || "function" != typeof se.constructor || Et(se) ? {} : Fr(ir(se)), !be) return me ? function ft(se, pe) {
            return it(se, Hr(se), pe);
          }(se, function E(se, pe) {
            return se && it(pe, re(pe), se);
          }(_e, se)) : function ct(se, pe) {
            return it(se, Lr(se), pe);
          }(se, function z(se, pe) {
            return se && it(pe, ee(pe), se);
          }(_e, se));
        } else {
          if (!Ne[we]) return ve ? se : {};

          _e = function St(se, pe, he) {
            var de = se.constructor;

            switch (pe) {
              case "[object ArrayBuffer]":
                return rt(se);

              case "[object Boolean]":
              case "[object Date]":
                return new de(+se);

              case "[object DataView]":
                return pe = he ? rt(se.buffer) : se.buffer, new se.constructor(pe, se.byteOffset, se.byteLength);

              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return pe = he ? rt(se.buffer) : se.buffer, new se.constructor(pe, se.byteOffset, se.length);

              case "[object Map]":
                return new de();

              case "[object Number]":
              case "[object String]":
                return new de(se);

              case "[object RegExp]":
                return (pe = new se.constructor(se.source, Ae.exec(se))).lastIndex = se.lastIndex, pe;

              case "[object Set]":
                return new de();

              case "[object Symbol]":
                return Nr ? Object(Nr.call(se)) : {};
            }
          }(se, we, be);
        }
      }

      if (ye || (ye = new O()), ve = ye.get(se)) return ve;
      if (ye.set(se, _e), on(se)) return se.forEach(function (de) {
        _e.add(I(de, pe, he, de, se, ye));
      }), _e;
      if (nn(se)) return se.forEach(function (de, ge) {
        _e.set(ge, I(de, pe, he, ge, se, ye));
      }), _e;
      me = xe ? me ? vt : gt : me ? re : ee;
      var ke = ge ? de : me(se);
      return e(ke || se, function (de, ge) {
        ke && (de = se[ge = de]), k(_e, ge, I(de, pe, he, ge, se, ye));
      }), _e;
    }

    function M(se, pe, he, de) {
      var ge = -1,
          ve = n,
          ye = !0,
          _e = se.length,
          be = [],
          me = pe.length;
      if (!_e) return be;
      he && (pe = o(pe, s(he))), de ? (ve = u, ye = !1) : 200 <= pe.length && (ve = b, ye = !1, pe = new m(pe));

      e: for (; ++ge < _e;) {
        var xe = se[ge],
            we = null == he ? xe : he(xe);
        xe = de || 0 !== xe ? xe : 0;

        if (ye && we == we) {
          for (var je = me; je--;) {
            if (pe[je] === we) continue e;
          }

          be.push(xe);
        } else ve(pe, we, de) || be.push(xe);
      }

      return be;
    }

    function $(se, pe, he, de, ge) {
      var ve = -1,
          ye = se.length;

      for (he || (he = kt), ge || (ge = []); ++ve < ye;) {
        var _e = se[ve];
        0 < pe && he(_e) ? 1 < pe ? $(_e, pe - 1, he, de, ge) : i(ge, _e) : de || (ge[ge.length] = _e);
      }

      return ge;
    }

    function U(se, pe) {
      for (var he = 0, ge = (pe = tt(pe, se)).length; null != se && he < ge;) {
        se = se[Ut(pe[he++])];
      }

      return he && he == ge ? se : de;
    }

    function B(se, pe, he) {
      return pe = pe(se), tn(se) ? pe : i(pe, he(se));
    }

    function D(se) {
      if (null == se) se = se === de ? "[object Undefined]" : "[object Null]";else if (pr && pr in Object(se)) {
        var pe = Ke.call(se, pr),
            he = se[pr];

        try {
          se[pr] = de;
          var ge = !0;
        } catch (se) {}

        var ve = er.call(se);
        ge && (pe ? se[pr] = he : delete se[pr]), se = ve;
      } else se = er.call(se);
      return se;
    }

    function R(se, pe, he) {
      for (var ge = he ? u : n, ve = se[0].length, ye = se.length, _e = ye, be = Array(ye), me = 1 / 0, xe = []; _e--;) {
        var we = se[_e];
        _e && pe && (we = o(we, s(pe))), me = _r(we.length, me), be[_e] = !he && (pe || 120 <= ve && 120 <= we.length) ? new m(_e && we) : de;
      }

      we = se[0];
      var je = -1,
          ke = be[0];

      e: for (; ++je < ve && xe.length < me;) {
        var Ee = we[je],
            Ae = pe ? pe(Ee) : Ee;
        Ee = he || 0 !== Ee ? Ee : 0;

        if (ke ? !b(ke, Ae) : !ge(xe, Ae, he)) {
          for (_e = ye; --_e;) {
            var Se = be[_e];
            if (Se ? !b(Se, Ae) : !ge(se[_e], Ae, he)) continue e;
          }

          ke && ke.push(Ae), xe.push(Ee);
        }
      }

      return xe;
    }

    function L(se) {
      return Gt(se) && "[object Arguments]" == D(se);
    }

    function P(se, pe, he, ge, ve) {
      if (se === pe) pe = !0;else if (null == se || null == pe || !Gt(se) && !Gt(pe)) pe = se != se && pe != pe;else e: {
        var ye,
            _e,
            be = tn(se),
            me = tn(pe),
            xe = "[object Object]" == (ye = "[object Arguments]" == (ye = be ? "[object Array]" : Ur(se)) ? "[object Object]" : ye);

        me = "[object Object]" == (_e = "[object Arguments]" == (_e = me ? "[object Array]" : Ur(pe)) ? "[object Object]" : _e);

        if ((_e = ye == _e) && rn(se)) {
          if (!rn(pe)) {
            pe = !1;
            break e;
          }

          be = !0, xe = !1;
        }

        if (_e && !xe) ve || (ve = new O()), pe = be || an(se) ? yt(se, pe, he, ge, P, ve) : _t(se, pe, ye, he, ge, P, ve);else {
          if (!(1 & he) && (be = xe && Ke.call(se, "__wrapped__"), ye = me && Ke.call(pe, "__wrapped__"), be || ye)) {
            se = be ? se.value() : se, pe = ye ? pe.value() : pe, ve || (ve = new O()), pe = P(se, pe, he, ge, ve);
            break e;
          }

          if (_e) {
            t: if (ve || (ve = new O()), be = 1 & he, ye = gt(se), me = ye.length, _e = gt(pe).length, me == _e || be) {
              for (xe = me; xe--;) {
                var we = ye[xe];

                if (!(be ? we in pe : Ke.call(pe, we))) {
                  pe = !1;
                  break t;
                }
              }

              if ((_e = ve.get(se)) && ve.get(pe)) pe = _e == pe;else {
                _e = !0, ve.set(se, pe), ve.set(pe, se);

                for (var je = be; ++xe < me;) {
                  var ke = se[we = ye[xe]],
                      Ee = pe[we];
                  if (ge) var Ae = be ? ge(Ee, ke, we, pe, se, ve) : ge(ke, Ee, we, se, pe, ve);

                  if (Ae === de ? ke !== Ee && !P(ke, Ee, he, ge, ve) : !Ae) {
                    _e = !1;
                    break;
                  }

                  je || (je = "constructor" == we);
                }

                _e && !je && (he = se.constructor) != (ge = pe.constructor) && "constructor" in se && "constructor" in pe && !("function" == typeof he && he instanceof he && "function" == typeof ge && ge instanceof ge) && (_e = !1), ve.delete(se), ve.delete(pe), pe = _e;
              }
            } else pe = !1;
          } else pe = !1;
        }
      }
      return pe;
    }

    function W(se) {
      return "function" == typeof se ? se : null == se ? oe : "object" == typeof se ? tn(se) ? function K(se, pe) {
        return zt(se) && pe == pe && !qt(pe) ? Ft(Ut(se), pe) : function (he) {
          var ge = Zt(he, se);
          return ge === de && ge === pe ? te(he, se) : P(pe, ge, 3);
        };
      }(se[0], se[1]) : function G(se) {
        var pe = function At(se) {
          for (var pe = ee(se), he = pe.length; he--;) {
            var de = pe[he],
                ge = se[de];
            pe[he] = [de, ge, ge == ge && !qt(ge)];
          }

          return pe;
        }(se);

        return 1 == pe.length && pe[0][2] ? Ft(pe[0][0], pe[0][1]) : function (he) {
          return he === se || function N(se, pe) {
            var he = pe.length,
                ge = he;
            if (null == se) return !ge;

            for (se = Object(se); he--;) {
              if ((ve = pe[he])[2] ? ve[1] !== se[ve[0]] : !(ve[0] in se)) return !1;
            }

            for (; ++he < ge;) {
              var ve,
                  ye = (ve = pe[he])[0],
                  _e = se[ye],
                  be = ve[1];

              if (ve[2]) {
                if (_e === de && !(ye in se)) return !1;
              } else if (!P(be, _e, 3, void 0, ve = new O())) return !1;
            }

            return !0;
          }(he, pe);
        };
      }(se) : fe(se);
    }

    function H(se, pe, he) {
      var ge = -1;
      return pe = o(pe.length ? pe : [oe], s(jt())), function l(se, pe) {
        var he = se.length;

        for (se.sort(pe); he--;) {
          se[he] = se[he].c;
        }

        return se;
      }(se = function q(se, pe) {
        var he = -1,
            de = Nt(se) ? Array(se.length) : [];
        return Dr(se, function (se, ge, ve) {
          de[++he] = pe(se, ge, ve);
        }), de;
      }(se, function (se) {
        return {
          a: o(pe, function (pe) {
            return pe(se);
          }),
          b: ++ge,
          c: se
        };
      }), function (se, pe) {
        var ge;

        e: {
          ge = -1;

          for (var ve = se.a, ye = pe.a, _e = ve.length, be = he.length; ++ge < _e;) {
            var me;

            t: {
              me = ve[ge];
              var xe = ye[ge];

              if (me !== xe) {
                var we = me !== de,
                    je = null === me,
                    ke = me == me,
                    Ee = Ht(me),
                    Ae = xe !== de,
                    Se = null === xe,
                    Oe = xe == xe,
                    Re = Ht(xe);

                if (!Se && !Re && !Ee && me > xe || Ee && Ae && Oe && !Se && !Re || je && Ae && Oe || !we && Oe || !ke) {
                  me = 1;
                  break t;
                }

                if (!je && !Ee && !Re && me < xe || Re && we && ke && !je && !Ee || Se && we && ke || !Ae && ke || !Oe) {
                  me = -1;
                  break t;
                }
              }

              me = 0;
            }

            if (me) {
              ge = ge >= be ? me : me * ("desc" == he[ge] ? -1 : 1);
              break e;
            }
          }

          ge = se.b - pe.b;
        }

        return ge;
      });
    }

    function Q(se) {
      return Gr(It(se, oe), se + "");
    }

    function X(se) {
      if ("string" == typeof se) return se;
      if (tn(se)) return o(se, X) + "";
      if (Ht(se)) return Pr ? Pr.call(se) : "";
      var pe = se + "";
      return "0" == pe && 1 / se == -ge ? "-0" : pe;
    }

    function Y(se, pe, he) {
      var de = -1,
          ge = n,
          ve = se.length,
          ye = !0,
          _e = [],
          be = _e;
      if (he) ye = !1, ge = u;else if (200 <= ve) {
        if (ge = pe ? null : Xr(se)) return g(ge);
        ye = !1, ge = b, be = new m();
      } else be = pe ? [] : _e;

      e: for (; ++de < ve;) {
        var me = se[de],
            xe = pe ? pe(me) : me;
        me = he || 0 !== me ? me : 0;

        if (ye && xe == xe) {
          for (var we = be.length; we--;) {
            if (be[we] === xe) continue e;
          }

          pe && be.push(xe), _e.push(me);
        } else ge(be, xe, he) || (be !== _e && be.push(xe), _e.push(me));
      }

      return _e;
    }

    function Z(se) {
      return Tt(se) ? se : [];
    }

    function tt(se, pe) {
      return tn(se) ? se : zt(se, pe) ? [se] : Qr(Yt(se));
    }

    function rt(se) {
      var pe = new se.constructor(se.byteLength);
      return new or(pe).set(new or(se)), pe;
    }

    function nt(se, pe, he, de) {
      var ge = -1,
          ve = se.length,
          ye = he.length,
          _e = -1,
          be = pe.length,
          me = yr(ve - ye, 0),
          xe = Array(be + me);

      for (de = !de; ++_e < be;) {
        xe[_e] = pe[_e];
      }

      for (; ++ge < ye;) {
        (de || ge < ve) && (xe[he[ge]] = se[ge]);
      }

      for (; me--;) {
        xe[_e++] = se[ge++];
      }

      return xe;
    }

    function ut(se, pe, he, de) {
      var ge = -1,
          ve = se.length,
          ye = -1,
          _e = he.length,
          be = -1,
          me = pe.length,
          xe = yr(ve - _e, 0),
          we = Array(xe + me);

      for (de = !de; ++ge < xe;) {
        we[ge] = se[ge];
      }

      for (xe = ge; ++be < me;) {
        we[xe + be] = pe[be];
      }

      for (; ++ye < _e;) {
        (de || ge < ve) && (we[xe + he[ye]] = se[ge++]);
      }

      return we;
    }

    function ot(se, pe) {
      var he = -1,
          de = se.length;

      for (pe || (pe = Array(de)); ++he < de;) {
        pe[he] = se[he];
      }

      return pe;
    }

    function it(se, pe, he) {
      var ge = !he;
      he || (he = {});

      for (var ve = -1, ye = pe.length; ++ve < ye;) {
        var _e = pe[ve],
            be = de;
        be === de && (be = se[_e]), ge ? F(he, _e, be) : k(he, _e, be);
      }

      return he;
    }

    function lt(se) {
      return function () {
        switch ((pe = arguments).length) {
          case 0:
            return new se();

          case 1:
            return new se(pe[0]);

          case 2:
            return new se(pe[0], pe[1]);

          case 3:
            return new se(pe[0], pe[1], pe[2]);

          case 4:
            return new se(pe[0], pe[1], pe[2], pe[3]);

          case 5:
            return new se(pe[0], pe[1], pe[2], pe[3], pe[4]);

          case 6:
            return new se(pe[0], pe[1], pe[2], pe[3], pe[4], pe[5]);

          case 7:
            return new se(pe[0], pe[1], pe[2], pe[3], pe[4], pe[5], pe[6]);
        }

        var pe,
            he = Fr(se.prototype);
        return qt(pe = se.apply(he, pe)) ? pe : he;
      };
    }

    function st(se, pe, he) {
      var ge = lt(se);
      return function u() {
        for (var ve = arguments.length, ye = Array(ve), _e = ve, be = dt(u); _e--;) {
          ye[_e] = arguments[_e];
        }

        return (ve -= (_e = 3 > ve && ye[0] !== be && ye[ve - 1] !== be ? [] : _(ye, be)).length) < he ? pt(se, pe, ht, u.placeholder, de, ye, _e, de, de, he - ve) : t(this && this !== Xe && this instanceof u ? ge : se, this, ye);
      };
    }

    function ht(se, pe, he, ge, ve, ye, _e, be, me, xe) {
      var we = 128 & pe,
          je = 1 & pe,
          ke = 2 & pe,
          Ee = 24 & pe,
          Ae = 512 & pe,
          Se = ke ? de : lt(se);
      return function l() {
        for (var Oe = arguments.length, Re = Array(Oe), Ce = Oe; Ce--;) {
          Re[Ce] = arguments[Ce];
        }

        if (Ee) {
          var Ie,
              ze = dt(l);
          Ce = Re.length;

          for (Ie = 0; Ce--;) {
            Re[Ce] === ze && ++Ie;
          }
        }

        if (ge && (Re = nt(Re, ge, ve, Ee)), ye && (Re = ut(Re, ye, _e, Ee)), Oe -= Ie, Ee && Oe < xe) return ze = _(Re, ze), pt(se, pe, ht, l.placeholder, he, Re, ze, be, me, xe - Oe);

        if (ze = je ? he : this, Ce = ke ? ze[se] : se, Oe = Re.length, be) {
          Ie = Re.length;

          for (var $e = _r(be.length, Ie), Me = ot(Re); $e--;) {
            var Ne = be[$e];
            Re[$e] = xt(Ne, Ie) ? Me[Ne] : de;
          }
        } else Ae && 1 < Oe && Re.reverse();

        return we && me < Oe && (Re.length = me), this && this !== Xe && this instanceof l && (Ce = Se || lt(Ce)), Ce.apply(ze, Re);
      };
    }

    function bt(se, pe, he, de) {
      var ge = 1 & pe,
          ve = lt(se);
      return function o() {
        for (var pe = -1, ye = arguments.length, _e = -1, be = de.length, me = Array(be + ye), xe = this && this !== Xe && this instanceof o ? ve : se; ++_e < be;) {
          me[_e] = de[_e];
        }

        for (; ye--;) {
          me[_e++] = arguments[++pe];
        }

        return t(xe, ge ? he : this, me);
      };
    }

    function pt(se, pe, he, ge, ve, ye, _e, be, me, xe) {
      var we = 8 & pe,
          je = we ? _e : de;
      4 & (pe = (pe | (we ? 32 : 64)) & ~(we ? 64 : 32)) || (pe &= -4), ve = [se, pe, ve, we ? ye : de, je, ye = we ? de : ye, _e = we ? de : _e, be, me, xe], he = he.apply(de, ve);

      e: for (be = se.name + "", me = Sr[be], xe = Ke.call(Sr, be) ? me.length : 0; xe--;) {
        if (we = me[xe], je = we.func, null == je || je == se) {
          be = we.name;
          break e;
        }
      }

      return "function" == typeof (me = v[be]) && be in d.prototype ? se === me ? be = !0 : be = !!(be = Br(me)) && se === be[0] : be = !1, be && Wr(he, ve), he.placeholder = ge, Mt(he, se, pe);
    }

    function yt(se, pe, he, ge, ve, ye) {
      var _e = 1 & he,
          be = se.length;

      if (be != (me = pe.length) && !(_e && me > be)) return !1;
      if ((me = ye.get(se)) && ye.get(pe)) return me == pe;
      var me = -1,
          xe = !0,
          we = 2 & he ? new m() : de;

      for (ye.set(se, pe), ye.set(pe, se); ++me < be;) {
        var je = se[me],
            ke = pe[me];
        if (ge) var Ee = _e ? ge(ke, je, me, pe, se, ye) : ge(je, ke, me, se, pe, ye);

        if (Ee !== de) {
          if (Ee) continue;
          xe = !1;
          break;
        }

        if (we) {
          if (!c(pe, function (se, pe) {
            if (!b(we, pe) && (je === se || ve(je, se, he, ge, ye))) return we.push(pe);
          })) {
            xe = !1;
            break;
          }
        } else if (je !== ke && !ve(je, ke, he, ge, ye)) {
          xe = !1;
          break;
        }
      }

      return ye.delete(se), ye.delete(pe), xe;
    }

    function _t(se, pe, he, de, ge, ve, ye) {
      switch (he) {
        case "[object DataView]":
          if (se.byteLength != pe.byteLength || se.byteOffset != pe.byteOffset) break;
          se = se.buffer, pe = pe.buffer;

        case "[object ArrayBuffer]":
          if (se.byteLength != pe.byteLength || !ve(new or(se), new or(pe))) break;
          return !0;

        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Ct(+se, +pe);

        case "[object Error]":
          return se.name == pe.name && se.message == pe.message;

        case "[object RegExp]":
        case "[object String]":
          return se == pe + "";

        case "[object Map]":
          var _e = p;

        case "[object Set]":
          if (_e || (_e = g), se.size != pe.size && !(1 & de)) break;
          return (he = ye.get(se)) ? he == pe : (de |= 2, ye.set(se, pe), pe = yt(_e(se), _e(pe), de, ge, ve, ye), ye.delete(se), pe);

        case "[object Symbol]":
          if (Nr) return Nr.call(se) == Nr.call(pe);
      }

      return !1;
    }

    function gt(se) {
      return B(se, ee, Lr);
    }

    function vt(se) {
      return B(se, re, Hr);
    }

    function dt(se) {
      return (Ke.call(v, "placeholder") ? v : se).placeholder;
    }

    function jt() {
      var se = (se = v.iteratee || ie) === ie ? W : se;
      return arguments.length ? se(arguments[0], arguments[1]) : se;
    }

    function wt(se, pe) {
      var he = se.__data__,
          de = typeof pe;
      return ("string" == de || "number" == de || "symbol" == de || "boolean" == de ? "__proto__" !== pe : null === pe) ? he["string" == typeof pe ? "string" : "hash"] : he.map;
    }

    function mt(se, pe) {
      var he = null == se ? de : se[pe];
      return !qt(he) || Je && Je in he || !(Vt(he) ? tr : Re).test(Bt(he)) ? de : he;
    }

    function kt(se) {
      return tn(se) || en(se) || !!(lr && se && se[lr]);
    }

    function xt(se, pe) {
      var he = typeof se;
      return !!(pe = null == pe ? 9007199254740991 : pe) && ("number" == he || "symbol" != he && Ie.test(se)) && -1 < se && 0 == se % 1 && se < pe;
    }

    function zt(se, pe) {
      if (tn(se)) return !1;
      var he = typeof se;
      return !("number" != he && "symbol" != he && "boolean" != he && null != se && !Ht(se)) || be.test(se) || !_e.test(se) || null != pe && se in Object(pe);
    }

    function Et(se) {
      var pe = se && se.constructor;
      return se === ("function" == typeof pe && pe.prototype || Ve);
    }

    function Ft(se, pe) {
      return function (he) {
        return null != he && he[se] === pe && (pe !== de || se in Object(he));
      };
    }

    function It(se, pe) {
      var he = yr((he = void 0) === de ? se.length - 1 : he, 0);
      return function () {
        for (var de = arguments, ge = -1, ve = yr(de.length - he, 0), ye = Array(ve); ++ge < ve;) {
          ye[ge] = de[he + ge];
        }

        for (ge = -1, ve = Array(he + 1); ++ge < he;) {
          ve[ge] = de[ge];
        }

        return ve[he] = pe(ye), t(se, this, ve);
      };
    }

    function Mt(se, pe, he) {
      var de = pe + "";
      pe = Gr;
      var ge,
          ve = Dt;
      return he = ve(ge = (ge = de.match(je)) ? ge[1].split(ke) : [], he), (ve = he.length) && (he[ge = ve - 1] = (1 < ve ? "& " : "") + he[ge], he = he.join(2 < ve ? ", " : " "), de = de.replace(we, "{\n/* [wrapped with " + he + "] */\n")), pe(se, de);
    }

    function $t(se) {
      var pe = 0,
          he = 0;
      return function () {
        var ge = br(),
            ve = 16 - (ge - he);

        if (he = ge, 0 < ve) {
          if (800 <= ++pe) return arguments[0];
        } else pe = 0;

        return se.apply(de, arguments);
      };
    }

    function Ut(se) {
      if ("string" == typeof se || Ht(se)) return se;
      var pe = se + "";
      return "0" == pe && 1 / se == -ge ? "-0" : pe;
    }

    function Bt(se) {
      if (null != se) {
        try {
          return Ze.call(se);
        } catch (se) {}

        return se + "";
      }

      return "";
    }

    function Dt(se, pe) {
      return e(ye, function (he) {
        var de = "_." + he[0];
        pe & he[1] && !n(se, de) && se.push(de);
      }), se.sort();
    }

    function Rt(se) {
      var pe = null == se ? 0 : se.length;
      return pe ? se[pe - 1] : de;
    }

    function Lt(se, pe) {
      return (tn(se) ? e : Dr)(se, jt(pe, 3));
    }

    function Pt(se, pe) {
      function r() {
        var he = arguments,
            de = pe ? pe.apply(this, he) : he[0],
            ge = r.cache;
        return ge.has(de) ? ge.get(de) : (he = se.apply(this, he), r.cache = ge.set(de, he) || ge, he);
      }

      if ("function" != typeof se || null != pe && "function" != typeof pe) throw new TypeError("Expected a function");
      return r.cache = new (Pt.Cache || A)(), r;
    }

    function Ct(se, pe) {
      return se === pe || se != se && pe != pe;
    }

    function Nt(se) {
      return null != se && Wt(se.length) && !Vt(se);
    }

    function Tt(se) {
      return Gt(se) && Nt(se);
    }

    function Vt(se) {
      return !!qt(se) && ("[object Function]" == (se = D(se)) || "[object GeneratorFunction]" == se || "[object AsyncFunction]" == se || "[object Proxy]" == se);
    }

    function Wt(se) {
      return "number" == typeof se && -1 < se && 0 == se % 1 && 9007199254740991 >= se;
    }

    function qt(se) {
      var pe = typeof se;
      return null != se && ("object" == pe || "function" == pe);
    }

    function Gt(se) {
      return null != se && "object" == typeof se;
    }

    function Kt(se) {
      return "string" == typeof se || !tn(se) && Gt(se) && "[object String]" == D(se);
    }

    function Ht(se) {
      return "symbol" == typeof se || Gt(se) && "[object Symbol]" == D(se);
    }

    function Jt(se) {
      return se ? (se = Xt(se)) === ge || se === -ge ? 17976931348623157e292 * (0 > se ? -1 : 1) : se == se ? se : 0 : 0 === se ? se : 0;
    }

    function Qt(se) {
      var pe = (se = Jt(se)) % 1;
      return se == se ? pe ? se - pe : se : 0;
    }

    function Xt(se) {
      if ("number" == typeof se) return se;
      if (Ht(se)) return ve;
      if (qt(se) && (se = qt(se = "function" == typeof se.valueOf ? se.valueOf() : se) ? se + "" : se), "string" != typeof se) return 0 === se ? se : +se;
      se = se.replace(xe, "");
      var pe = Oe.test(se);
      return pe || Ce.test(se) ? Fe(se.slice(2), pe ? 2 : 8) : Se.test(se) ? ve : +se;
    }

    function Yt(se) {
      return null == se ? "" : X(se);
    }

    function Zt(se, pe, he) {
      return (se = null == se ? de : U(se, pe)) === de ? he : se;
    }

    function te(se, pe) {
      var he;

      if (he = null != se) {
        for (var de, ge = -1, ve = (de = tt(pe, he = se)).length, ye = !1; ++ge < ve;) {
          var _e = Ut(de[ge]);

          if (!(ye = null != he && null != he && _e in Object(he))) break;
          he = he[_e];
        }

        ye || ++ge != ve ? he = ye : he = !!(ve = null == he ? 0 : he.length) && Wt(ve) && xt(_e, ve) && (tn(he) || en(he));
      }

      return he;
    }

    function ee(se) {
      if (Nt(se)) se = S(se);else if (Et(se)) {
        var pe,
            he = [];

        for (pe in Object(se)) {
          Ke.call(se, pe) && "constructor" != pe && he.push(pe);
        }

        se = he;
      } else se = vr(se);
      return se;
    }

    function re(se) {
      if (Nt(se)) se = S(se, !0);else if (qt(se)) {
        var pe,
            he = Et(se),
            de = [];

        for (pe in se) {
          ("constructor" != pe || !he && Ke.call(se, pe)) && de.push(pe);
        }

        se = de;
      } else {
        if (pe = [], null != se) for (he in Object(se)) {
          pe.push(he);
        }
        se = pe;
      }
      return se;
    }

    function ne(se) {
      return null == se ? [] : function h(se, pe) {
        return o(pe, function (pe) {
          return se[pe];
        });
      }(se, ee(se));
    }

    function ue(se) {
      return function () {
        return se;
      };
    }

    function oe(se) {
      return se;
    }

    function ie(se) {
      return W("function" == typeof se ? se : I(se, 1));
    }

    function ce() {}

    function fe(se) {
      return zt(se) ? function a(se) {
        return function (pe) {
          return null == pe ? de : pe[se];
        };
      }(Ut(se)) : function J(se) {
        return function (pe) {
          return U(pe, se);
        };
      }(se);
    }

    function ae() {
      return [];
    }

    function le() {
      return !1;
    }

    var de,
        ge = 1 / 0,
        ve = NaN,
        ye = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
        _e = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        be = /^\w*$/,
        me = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        xe = /^\s+|\s+$/g,
        we = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        je = /\{\n\/\* \[wrapped with (.+)\] \*/,
        ke = /,? & /,
        Ee = /\\(\\)?/g,
        Ae = /\w*$/,
        Se = /^[-+]0x[0-9a-f]+$/i,
        Oe = /^0b[01]+$/i,
        Re = /^\[object .+?Constructor\]$/,
        Ce = /^0o[0-7]+$/i,
        Ie = /^(?:0|[1-9]\d*)$/,
        ze = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*", "g"),
        $e = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
        Me = {};
    Me["[object Float32Array]"] = Me["[object Float64Array]"] = Me["[object Int8Array]"] = Me["[object Int16Array]"] = Me["[object Int32Array]"] = Me["[object Uint8Array]"] = Me["[object Uint8ClampedArray]"] = Me["[object Uint16Array]"] = Me["[object Uint32Array]"] = !0, Me["[object Arguments]"] = Me["[object Array]"] = Me["[object ArrayBuffer]"] = Me["[object Boolean]"] = Me["[object DataView]"] = Me["[object Date]"] = Me["[object Error]"] = Me["[object Function]"] = Me["[object Map]"] = Me["[object Number]"] = Me["[object Object]"] = Me["[object RegExp]"] = Me["[object Set]"] = Me["[object String]"] = Me["[object WeakMap]"] = !1;
    var Ne = {};
    Ne["[object Arguments]"] = Ne["[object Array]"] = Ne["[object ArrayBuffer]"] = Ne["[object DataView]"] = Ne["[object Boolean]"] = Ne["[object Date]"] = Ne["[object Float32Array]"] = Ne["[object Float64Array]"] = Ne["[object Int8Array]"] = Ne["[object Int16Array]"] = Ne["[object Int32Array]"] = Ne["[object Map]"] = Ne["[object Number]"] = Ne["[object Object]"] = Ne["[object RegExp]"] = Ne["[object Set]"] = Ne["[object String]"] = Ne["[object Symbol]"] = Ne["[object Uint8Array]"] = Ne["[object Uint8ClampedArray]"] = Ne["[object Uint16Array]"] = Ne["[object Uint32Array]"] = !0, Ne["[object Error]"] = Ne["[object Function]"] = Ne["[object WeakMap]"] = !1;
    var Pe,
        Fe = parseInt,
        qe = "object" == typeof pe && pe && pe.Object === Object && pe,
        Te = "object" == typeof self && self && self.Object === Object && self,
        Xe = qe || Te || Function("return this")(),
        Be = he && !he.nodeType && he,
        Le = Be && se && !se.nodeType && se,
        He = Le && Le.exports === Be,
        Ue = He && qe.process;

    e: {
      try {
        Pe = Ue && Ue.binding && Ue.binding("util");
        break e;
      } catch (t) {}

      Pe = void 0;
    }

    var De = Pe && Pe.isMap,
        We = Pe && Pe.isSet,
        Ge = Pe && Pe.isTypedArray,
        Qe = Array.prototype,
        Ve = Object.prototype,
        Ye = Xe["__core-js_shared__"],
        Ze = Function.prototype.toString,
        Ke = Ve.hasOwnProperty,
        Je = function () {
      var se = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
      return se ? "Symbol(src)_1." + se : "";
    }(),
        er = Ve.toString,
        tr = RegExp("^" + Ze.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        rr = He ? Xe.Buffer : de,
        nr = Xe.Symbol,
        or = Xe.Uint8Array,
        ar = rr ? rr.f : de,
        ir = y(Object.getPrototypeOf),
        cr = Object.create,
        ur = Ve.propertyIsEnumerable,
        sr = Qe.splice,
        lr = nr ? nr.isConcatSpreadable : de,
        fr = nr ? nr.iterator : de,
        pr = nr ? nr.toStringTag : de,
        hr = function () {
      try {
        var se = mt(Object, "defineProperty");
        return se({}, "", {}), se;
      } catch (se) {}
    }(),
        dr = Object.getOwnPropertySymbols,
        gr = rr ? rr.isBuffer : de,
        vr = y(Object.keys),
        yr = Math.max,
        _r = Math.min,
        br = Date.now,
        mr = mt(Xe, "DataView"),
        xr = mt(Xe, "Map"),
        wr = mt(Xe, "Promise"),
        jr = mt(Xe, "Set"),
        kr = mt(Xe, "WeakMap"),
        Er = mt(Object, "create"),
        Ar = kr && new kr(),
        Sr = {},
        Or = Bt(mr),
        Cr = Bt(xr),
        Ir = Bt(wr),
        zr = Bt(jr),
        $r = Bt(kr),
        Mr = nr ? nr.prototype : de,
        Nr = Mr ? Mr.valueOf : de,
        Pr = Mr ? Mr.toString : de,
        Fr = function () {
      function t() {}

      return function (se) {
        return qt(se) ? cr ? cr(se) : (t.prototype = se, se = new t(), t.prototype = de, se) : {};
      };
    }();

    d.prototype = Fr(function () {}.prototype), d.prototype.constructor = d, j.prototype.clear = function () {
      this.__data__ = Er ? Er(null) : {}, this.size = 0;
    }, j.prototype.delete = function (se) {
      return se = this.has(se) && delete this.__data__[se], this.size -= se ? 1 : 0, se;
    }, j.prototype.get = function (se) {
      var pe = this.__data__;
      return Er ? "__lodash_hash_undefined__" === (se = pe[se]) ? de : se : Ke.call(pe, se) ? pe[se] : de;
    }, j.prototype.has = function (se) {
      var pe = this.__data__;
      return Er ? pe[se] !== de : Ke.call(pe, se);
    }, j.prototype.set = function (se, pe) {
      var he = this.__data__;
      return this.size += this.has(se) ? 0 : 1, he[se] = Er && pe === de ? "__lodash_hash_undefined__" : pe, this;
    }, w.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, w.prototype.delete = function (se) {
      var pe = this.__data__;
      return !(0 > (se = x(pe, se)) || (se == pe.length - 1 ? pe.pop() : sr.call(pe, se, 1), --this.size, 0));
    }, w.prototype.get = function (se) {
      var pe = this.__data__;
      return 0 > (se = x(pe, se)) ? de : pe[se][1];
    }, w.prototype.has = function (se) {
      return -1 < x(this.__data__, se);
    }, w.prototype.set = function (se, pe) {
      var he = this.__data__,
          de = x(he, se);
      return 0 > de ? (++this.size, he.push([se, pe])) : he[de][1] = pe, this;
    }, A.prototype.clear = function () {
      this.size = 0, this.__data__ = {
        hash: new j(),
        map: new (xr || w)(),
        string: new j()
      };
    }, A.prototype.delete = function (se) {
      return se = wt(this, se).delete(se), this.size -= se ? 1 : 0, se;
    }, A.prototype.get = function (se) {
      return wt(this, se).get(se);
    }, A.prototype.has = function (se) {
      return wt(this, se).has(se);
    }, A.prototype.set = function (se, pe) {
      var he = wt(this, se),
          de = he.size;
      return he.set(se, pe), this.size += he.size == de ? 0 : 1, this;
    }, m.prototype.add = m.prototype.push = function (se) {
      return this.__data__.set(se, "__lodash_hash_undefined__"), this;
    }, m.prototype.has = function (se) {
      return this.__data__.has(se);
    }, O.prototype.clear = function () {
      this.__data__ = new w(), this.size = 0;
    }, O.prototype.delete = function (se) {
      var pe = this.__data__;
      return se = pe.delete(se), this.size = pe.size, se;
    }, O.prototype.get = function (se) {
      return this.__data__.get(se);
    }, O.prototype.has = function (se) {
      return this.__data__.has(se);
    }, O.prototype.set = function (se, pe) {
      var he = this.__data__;

      if (he instanceof w) {
        var de = he.__data__;
        if (!xr || 199 > de.length) return de.push([se, pe]), this.size = ++he.size, this;
        he = this.__data__ = new A(de);
      }

      return he.set(se, pe), this.size = he.size, this;
    };

    var Dr = function Dr(se, pe) {
      if (null == se) return se;
      if (!Nt(se)) return function (se, pe) {
        return se && Rr(se, pe, ee);
      }(se, pe);

      for (var he = se.length, de = -1, ge = Object(se); ++de < he && !1 !== pe(ge[de], de, ge);) {
        ;
      }

      return se;
    },
        Rr = function Rr(se, pe, he) {
      for (var de = -1, ge = Object(se), ve = (he = he(se)).length; ve--;) {
        var ye = he[++de];
        if (!1 === pe(ge[ye], ye, ge)) break;
      }

      return se;
    },
        qr = Ar ? function (se, pe) {
      return Ar.set(se, pe), se;
    } : oe,
        Tr = hr ? function (se, pe) {
      return hr(se, "toString", {
        configurable: !0,
        enumerable: !1,
        value: ue(pe),
        writable: !0
      });
    } : oe,
        Xr = jr && 1 / g(new jr([, -0]))[1] == ge ? function (se) {
      return new jr(se);
    } : ce,
        Br = Ar ? function (se) {
      return Ar.get(se);
    } : ce,
        Lr = dr ? function (se) {
      return null == se ? [] : (se = Object(se), function r(se, pe) {
        for (var he = -1, de = null == se ? 0 : se.length, ge = 0, ve = []; ++he < de;) {
          var ye = se[he];
          pe(ye, he, se) && (ve[ge++] = ye);
        }

        return ve;
      }(dr(se), function (pe) {
        return ur.call(se, pe);
      }));
    } : ae,
        Hr = dr ? function (se) {
      for (var pe = []; se;) {
        i(pe, Lr(se)), se = ir(se);
      }

      return pe;
    } : ae,
        Ur = D;

    (mr && "[object DataView]" != Ur(new mr(new ArrayBuffer(1))) || xr && "[object Map]" != Ur(new xr()) || wr && "[object Promise]" != Ur(wr.resolve()) || jr && "[object Set]" != Ur(new jr()) || kr && "[object WeakMap]" != Ur(new kr())) && (Ur = function Ur(se) {
      var pe = D(se);
      if (se = (se = "[object Object]" == pe ? se.constructor : de) ? Bt(se) : "") switch (se) {
        case Or:
          return "[object DataView]";

        case Cr:
          return "[object Map]";

        case Ir:
          return "[object Promise]";

        case zr:
          return "[object Set]";

        case $r:
          return "[object WeakMap]";
      }
      return pe;
    });

    var Wr = $t(qr),
        Gr = $t(Tr),
        Qr = function (se) {
      var pe = (se = Pt(se, function (se) {
        return 500 === pe.size && pe.clear(), se;
      })).cache;
      return se;
    }(function (se) {
      var pe = [];
      return 46 === se.charCodeAt(0) && pe.push(""), se.replace(me, function (se, he, de, ge) {
        pe.push(de ? ge.replace(Ee, "$1") : he || se);
      }), pe;
    }),
        Vr = Q(function (se, pe) {
      return Tt(se) ? M(se, $(pe, 1, Tt, !0)) : [];
    }),
        Yr = Q(function (se, pe) {
      var he = Rt(pe);
      return Tt(he) && (he = de), Tt(se) ? M(se, $(pe, 1, Tt, !0), de, he) : [];
    }),
        Zr = Q(function (se) {
      var pe = o(se, Z);
      return pe.length && pe[0] === se[0] ? R(pe) : [];
    }),
        Kr = Q(function (se) {
      var pe = Rt(se),
          he = o(se, Z);
      return (pe = "function" == typeof pe ? pe : de) && he.pop(), he.length && he[0] === se[0] ? R(he, de, pe) : [];
    });

    Pt.Cache = A;
    var Jr = Q(function (se, pe) {
      var he,
          ge,
          ve = _(pe, dt(Jr)),
          ye = se,
          _e = de,
          be = pe,
          me = ve,
          xe = 64;

      if (!(ve = 2 & xe) && "function" != typeof ye) throw new TypeError("Expected a function");
      var we = be ? be.length : 0;

      if (we || (xe &= -97, be = me = de), he = he === de ? he : yr(Qt(he), 0), ge = ge === de ? ge : Qt(ge), we -= me ? me.length : 0, 64 & xe) {
        var je = be,
            ke = me;
        be = me = de;
      }

      var Ee = ve ? de : Br(ye);
      return he = [ye, xe, _e, be, me, je, ke, void 0, he, ge], Ee && (_e = (be = he[1]) | (ye = Ee[1]), ge = 128 == ye && 8 == be || 128 == ye && 256 == be && he[7].length <= Ee[8] || 384 == ye && Ee[7].length <= Ee[8] && 8 == be, 131 > _e || ge) && (1 & ye && (he[2] = Ee[2], _e |= 1 & be ? 0 : 4), (be = Ee[3]) && (ge = he[3], he[3] = ge ? nt(ge, be, Ee[4]) : be, he[4] = ge ? _(he[3], "__lodash_placeholder__") : Ee[4]), (be = Ee[5]) && (ge = he[5], he[5] = ge ? ut(ge, be, Ee[6]) : be, he[6] = ge ? _(he[5], "__lodash_placeholder__") : Ee[6]), (be = Ee[7]) && (he[7] = be), 128 & ye && (he[8] = null == he[8] ? Ee[8] : _r(he[8], Ee[8])), null == he[9] && (he[9] = Ee[9]), he[0] = Ee[0], he[1] = _e), ye = he[0], xe = he[1], _e = he[2], be = he[3], me = he[4], !(ge = he[9] = he[9] === de ? ve ? 0 : ye.length : yr(he[9] - we, 0)) && 24 & xe && (xe &= -25), Mt((Ee ? qr : Wr)(xe && 1 != xe ? 8 == xe || 16 == xe ? st(ye, xe, ge) : 32 != xe && 33 != xe || me.length ? ht.apply(de, he) : bt(ye, xe, _e, be) : function at(se, pe, he) {
        var de = 1 & pe,
            ge = lt(se);
        return function n() {
          return (this && this !== Xe && this instanceof n ? ge : se).apply(de ? he : this, arguments);
        };
      }(ye, xe, _e), he), ye, xe);
    }),
        en = L(function () {
      return arguments;
    }()) ? L : function (se) {
      return Gt(se) && Ke.call(se, "callee") && !ur.call(se, "callee");
    },
        tn = Array.isArray,
        rn = gr || le,
        nn = De ? s(De) : function C(se) {
      return Gt(se) && "[object Map]" == Ur(se);
    },
        on = We ? s(We) : function T(se) {
      return Gt(se) && "[object Set]" == Ur(se);
    },
        an = Ge ? s(Ge) : function V(se) {
      return Gt(se) && Wt(se.length) && !!Me[D(se)];
    };
    v.constant = ue, v.difference = Vr, v.differenceWith = Yr, v.intersection = Zr, v.intersectionWith = Kr, v.iteratee = ie, v.keys = ee, v.keysIn = re, v.memoize = Pt, v.orderBy = function (se, pe, he, ge) {
      return null == se ? [] : (tn(pe) || (pe = null == pe ? [] : [pe]), tn(he = ge ? de : he) || (he = null == he ? [] : [he]), H(se, pe, he));
    }, v.partialRight = Jr, v.property = fe, v.toArray = function (se) {
      if (!se) return [];
      if (Nt(se)) return Kt(se) ? $e.test(se) ? se.match(ze) || [] : se.split("") : ot(se);

      if (fr && se[fr]) {
        se = se[fr]();

        for (var pe, he = []; !(pe = se.next()).done;) {
          he.push(pe.value);
        }

        return he;
      }

      return ("[object Map]" == (pe = Ur(se)) ? p : "[object Set]" == pe ? g : ne)(se);
    }, v.uniq = function (se) {
      return se && se.length ? Y(se) : [];
    }, v.uniqWith = function (se, pe) {
      return pe = "function" == typeof pe ? pe : de, se && se.length ? Y(se, de, pe) : [];
    }, v.values = ne, v.eq = Ct, v.forEach = Lt, v.get = Zt, v.hasIn = te, v.identity = oe, v.isArguments = en, v.isArray = tn, v.isArrayLike = Nt, v.isArrayLikeObject = Tt, v.isBuffer = rn, v.isFunction = Vt, v.isLength = Wt, v.isMap = nn, v.isObject = qt, v.isObjectLike = Gt, v.isSet = on, v.isString = Kt, v.isSymbol = Ht, v.isTypedArray = an, v.last = Rt, v.stubArray = ae, v.stubFalse = le, v.noop = ce, v.toFinite = Jt, v.toInteger = Qt, v.toNumber = Xt, v.toString = Yt, v.each = Lt, v.VERSION = "4.17.5", Jr.placeholder = v, Le ? ((Le.exports = v)._ = v, Be._ = v) : Xe._ = v;
  }).call(pe);
}(je, je.exports),
/*! https://mths.be/codepointat v0.2.0 by @mathias */
String.prototype.codePointAt || (be = function () {
  try {
    var se = {},
        pe = Object.defineProperty,
        he = pe(se, se, se) && pe;
  } catch (se) {}

  return he;
}(), me = function me(se) {
  if (null == this) throw TypeError();
  var pe = String(this),
      he = pe.length,
      de = se ? Number(se) : 0;

  if (de != de && (de = 0), !(de < 0 || de >= he)) {
    var ge,
        ve = pe.charCodeAt(de);
    return ve >= 55296 && ve <= 56319 && he > de + 1 && (ge = pe.charCodeAt(de + 1)) >= 56320 && ge <= 57343 ? 1024 * (ve - 55296) + ge - 56320 + 65536 : ve;
  }
}, be ? be(String.prototype, "codePointAt", {
  value: me,
  configurable: !0,
  writable: !0
}) : String.prototype.codePointAt = me)
/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
, String.fromCodePoint || function () {
  var se = function () {
    try {
      var se = {},
          pe = Object.defineProperty,
          he = pe(se, se, se) && pe;
    } catch (se) {}

    return he;
  }(),
      pe = String.fromCharCode,
      he = Math.floor,
      fromCodePoint = function fromCodePoint(se) {
    var de,
        ge,
        ve = 16384,
        ye = [],
        _e = -1,
        be = arguments.length;

    if (!be) return "";

    for (var me = ""; ++_e < be;) {
      var xe = Number(arguments[_e]);
      if (!isFinite(xe) || xe < 0 || xe > 1114111 || he(xe) != xe) throw RangeError("Invalid code point: " + xe);
      xe <= 65535 ? ye.push(xe) : (de = 55296 + ((xe -= 65536) >> 10), ge = xe % 1024 + 56320, ye.push(de, ge)), (_e + 1 == be || ye.length > ve) && (me += pe.apply(null, ye), ye.length = 0);
    }

    return me;
  };

  se ? se(String, "fromCodePoint", {
    value: fromCodePoint,
    configurable: !0,
    writable: !0
  }) : String.fromCodePoint = fromCodePoint;
}();

try {
  xe = "undefined" != typeof Intl && void 0 !== Intl.Collator ? Intl.Collator("generic", {
    sensitivity: "base"
  }) : null;
} catch (se) {
  void 0 !== typeof console && console.warn("Collator could not be initialized and wouldn't be used");
}

var ke,
    Ee = function leven(se, pe, he, de) {
  var ge = [],
      ve = [],
      ye = he && xe && he.useCollator,
      _e = 1;
  if (he && he.subcost && "number" == typeof he.subcost && (_e = he.subcost), se === pe) return 0;
  var be,
      me,
      we,
      je,
      ke = de(se),
      Ee = de(pe),
      Ae = ke.length,
      Se = Ee.length;
  if (0 === Ae) return Se;
  if (0 === Se) return Ae;

  for (var Oe = 0, Re = 0; Oe < Ae;) {
    ve[Oe] = ke[Oe].codePointAt(0), ge[Oe] = ++Oe;
  }

  if (ye) for (; Re < Se;) {
    for (be = Ee[Re].codePointAt(0), we = Re++, me = Re, Oe = 0; Oe < Ae; Oe++) {
      je = 0 === xe.compare(String.fromCodePoint(be), String.fromCodePoint(ve[Oe])) ? we : we + _e, we = ge[Oe], me = ge[Oe] = we > me ? je > me ? me + 1 : je : je > we ? we + 1 : je;
    }
  } else for (; Re < Se;) {
    for (be = Ee[Re].codePointAt(0), we = Re++, me = Re, Oe = 0; Oe < Ae; Oe++) {
      je = be === ve[Oe] ? we : we + _e, we = ge[Oe], me = ge[Oe] = we > me ? je > me ? me + 1 : je : je > we ? we + 1 : je;
    }
  }
  return me;
};

try {
  ke = "undefined" != typeof Intl && void 0 !== Intl.Collator ? Intl.Collator("generic", {
    sensitivity: "base"
  }) : null;
} catch (se) {
  void 0 !== typeof console && console.warn("Collator could not be initialized and wouldn't be used");
}

var Ae,
    Se = function leven(se, pe, he, de) {
  var ge = [],
      ve = [],
      ye = he && ke && he.useCollator,
      _e = 1;
  if (he && he.subcost && "number" == typeof he.subcost && (_e = he.subcost), se === pe) return 0;
  var be = se.length,
      me = pe.length;
  if (0 === be) return me;
  if (0 === me) return be;

  if (he && he.wildcards && "string" == typeof he.wildcards && he.wildcards.length > 0) {
    var xe, we, je, Ee, Ae, Se;

    if (!1 === he.full_process && !0 !== he.processed) {
      we = (xe = he.wildcards[0]).charCodeAt(0);

      var Oe = "[" + function escapeRegExp(se) {
        return se.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }(he.wildcards) + "]";

      if ((se = se.replace(new RegExp(Oe, "g"), xe)) === (pe = pe.replace(new RegExp(Oe, "g"), xe))) return 0;
    } else we = (xe = he.wildcards[0].toLowerCase()).charCodeAt(0);

    for (var Re = 0, Ce = 0; Re < be;) {
      ve[Re] = se.charCodeAt(Re), ge[Re] = ++Re;
    }

    if (ye) for (; Ce < me;) {
      for (je = pe.charCodeAt(Ce), Ae = Ce++, Ee = Ce, Re = 0; Re < be; Re++) {
        Se = 0 === ke.compare(String.fromCharCode(je), String.fromCharCode(ve[Re])) || je === we || ve[Re] === we ? Ae : Ae + _e, Ae = ge[Re], Ee = ge[Re] = Ae > Ee ? Se > Ee ? Ee + 1 : Se : Se > Ae ? Ae + 1 : Se;
      }
    } else for (; Ce < me;) {
      for (je = pe.charCodeAt(Ce), Ae = Ce++, Ee = Ce, Re = 0; Re < be; Re++) {
        Se = je === ve[Re] || je === we || ve[Re] === we ? Ae : Ae + _e, Ae = ge[Re], Ee = ge[Re] = Ae > Ee ? Se > Ee ? Ee + 1 : Se : Se > Ae ? Ae + 1 : Se;
      }
    }
    return Ee;
  }

  return de(se, pe, he);
};

try {
  Ae = "undefined" != typeof Intl && void 0 !== Intl.Collator ? Intl.Collator("generic", {
    sensitivity: "base"
  }) : null;
} catch (se) {
  void 0 !== typeof console && console.warn("Collator could not be initialized and wouldn't be used");
}

var Oe = function leven(se, pe, he) {
  var de = [],
      ge = [],
      ve = he && Ae && he.useCollator,
      ye = 1;
  if (he && he.subcost && "number" == typeof he.subcost && (ye = he.subcost), se === pe) return 0;

  var _e,
      be,
      me,
      xe,
      we = se.length,
      je = pe.length;

  if (0 === we) return je;
  if (0 === je) return we;

  for (var ke = 0, Ee = 0; ke < we;) {
    ge[ke] = se.charCodeAt(ke), de[ke] = ++ke;
  }

  if (ve) for (; Ee < je;) {
    for (_e = pe.charCodeAt(Ee), me = Ee++, be = Ee, ke = 0; ke < we; ke++) {
      xe = 0 === Ae.compare(String.fromCharCode(_e), String.fromCharCode(ge[ke])) ? me : me + ye, me = de[ke], be = de[ke] = me > be ? xe > be ? be + 1 : xe : xe > me ? me + 1 : xe;
    }
  } else for (; Ee < je;) {
    for (_e = pe.charCodeAt(Ee), me = Ee++, be = Ee, ke = 0; ke < we; ke++) {
      xe = _e === ge[ke] ? me : me + ye, me = de[ke], be = de[ke] = me > be ? xe > be ? be + 1 : xe : xe > me ? me + 1 : xe;
    }
  }
  return be;
};

!function (se, pe) {
  if (!se.setImmediate) {
    var he,
        de = 1,
        ge = {},
        ve = !1,
        ye = se.document,
        _e = Object.getPrototypeOf && Object.getPrototypeOf(se);

    _e = _e && _e.setTimeout ? _e : se, "[object process]" === {}.toString.call(se.process) ? function installNextTickImplementation() {
      he = function he(se) {
        process.nextTick(function () {
          runIfPresent(se);
        });
      };
    }() : !function canUsePostMessage() {
      if (se.postMessage && !se.importScripts) {
        var pe = !0,
            he = se.onmessage;
        return se.onmessage = function () {
          pe = !1;
        }, se.postMessage("", "*"), se.onmessage = he, pe;
      }
    }() ? se.MessageChannel ? function installMessageChannelImplementation() {
      var se = new MessageChannel();
      se.port1.onmessage = function (se) {
        runIfPresent(se.data);
      }, he = function he(pe) {
        se.port2.postMessage(pe);
      };
    }() : ye && "onreadystatechange" in ye.createElement("script") ? function installReadyStateChangeImplementation() {
      var se = ye.documentElement;

      he = function he(pe) {
        var he = ye.createElement("script");
        he.onreadystatechange = function () {
          runIfPresent(pe), he.onreadystatechange = null, se.removeChild(he), he = null;
        }, se.appendChild(he);
      };
    }() : function installSetTimeoutImplementation() {
      he = function he(se) {
        setTimeout(runIfPresent, 0, se);
      };
    }() : function installPostMessageImplementation() {
      var pe = "setImmediate$" + Math.random() + "$",
          onGlobalMessage = function onGlobalMessage(he) {
        he.source === se && "string" == typeof he.data && 0 === he.data.indexOf(pe) && runIfPresent(+he.data.slice(pe.length));
      };

      se.addEventListener ? se.addEventListener("message", onGlobalMessage, !1) : se.attachEvent("onmessage", onGlobalMessage), he = function he(_he) {
        se.postMessage(pe + _he, "*");
      };
    }(), _e.setImmediate = function setImmediate(se) {
      "function" != typeof se && (se = new Function("" + se));

      for (var pe = new Array(arguments.length - 1), ve = 0; ve < pe.length; ve++) {
        pe[ve] = arguments[ve + 1];
      }

      var ye = {
        callback: se,
        args: pe
      };
      return ge[de] = ye, he(de), de++;
    }, _e.clearImmediate = clearImmediate;
  }

  function clearImmediate(se) {
    delete ge[se];
  }

  function runIfPresent(se) {
    if (ve) setTimeout(runIfPresent, 0, se);else {
      var pe = ge[se];

      if (pe) {
        ve = !0;

        try {
          !function run(se) {
            var pe = se.callback,
                he = se.args;

            switch (he.length) {
              case 0:
                pe();
                break;

              case 1:
                pe(he[0]);
                break;

              case 2:
                pe(he[0], he[1]);
                break;

              case 3:
                pe(he[0], he[1], he[2]);
                break;

              default:
                pe.apply(void 0, he);
            }
          }(pe);
        } finally {
          clearImmediate(se), ve = !1;
        }
      }
    }
  }
}("undefined" == typeof self ? pe : self);
/*!
 * XRegExp 3.1.1-next
 * <xregexp.com>
 * Steven Levithan (c) 2007-2016 MIT License
 */

var Re = {
  astral: !1,
  natives: !1
},
    Ce = {
  exec: RegExp.prototype.exec,
  test: RegExp.prototype.test,
  match: String.prototype.match,
  replace: String.prototype.replace,
  split: String.prototype.split
},
    Ie = {},
    ze = {},
    $e = {},
    Me = [],
    Ne = {
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
},
    Pe = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,
    Fe = void 0 === Ce.exec.call(/()??/, "")[1],
    qe = void 0 !== /x/.flags,
    Te = {}.toString;

function hasNativeFlag(se) {
  var pe = !0;

  try {
    new RegExp("", se);
  } catch (se) {
    pe = !1;
  }

  return pe && "y" === se ? new RegExp("aa|.", "y").test("b") : pe;
}

var Xe = hasNativeFlag("u"),
    Be = hasNativeFlag("y"),
    Le = {
  g: !0,
  i: !0,
  m: !0,
  u: Xe,
  y: Be
};

function augment(se, pe, he, de, ge) {
  var ve;
  if (se.xregexp = {
    captureNames: pe
  }, ge) return se;
  if (se.__proto__) se.__proto__ = XRegExp$1.prototype;else for (ve in XRegExp$1.prototype) {
    se[ve] = XRegExp$1.prototype[ve];
  }
  return se.xregexp.source = he, se.xregexp.flags = de ? de.split("").sort().join("") : de, se;
}

function clipDuplicates(se) {
  return Ce.replace.call(se, /([\s\S])(?=[\s\S]*\1)/g, "");
}

function copyRegex(se, pe) {
  if (!XRegExp$1.isRegExp(se)) throw new TypeError("Type RegExp expected");

  var he = se.xregexp || {},
      de = function getNativeFlags(se) {
    return qe ? se.flags : Ce.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(se))[1];
  }(se),
      ge = "",
      ve = "",
      ye = null,
      _e = null;

  return (pe = pe || {}).removeG && (ve += "g"), pe.removeY && (ve += "y"), ve && (de = Ce.replace.call(de, new RegExp("[" + ve + "]+", "g"), "")), pe.addG && (ge += "g"), pe.addY && (ge += "y"), ge && (de = clipDuplicates(de + ge)), pe.isInternalOnly || (void 0 !== he.source && (ye = he.source), null != he.flags && (_e = ge ? clipDuplicates(he.flags + ge) : he.flags)), se = augment(new RegExp(pe.source || se.source, de), function hasNamedCapture(se) {
    return !(!se.xregexp || !se.xregexp.captureNames);
  }(se) ? he.captureNames.slice(0) : null, ye, _e, pe.isInternalOnly);
}

function dec(se) {
  return parseInt(se, 16);
}

function hex(se) {
  return parseInt(se, 10).toString(16);
}

function indexOf(se, pe) {
  var he,
      de = se.length;

  for (he = 0; he < de; ++he) {
    if (se[he] === pe) return he;
  }

  return -1;
}

function isQuantifierNext(se, pe, he) {
  return Ce.test.call(he.indexOf("x") > -1 ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/, se.slice(pe));
}

function pad4(se) {
  for (; se.length < 4;) {
    se = "0" + se;
  }

  return se;
}

function registerFlag(se) {
  if (!/^[\w$]$/.test(se)) throw new Error("Flag must be a single character A-Za-z0-9_$");
  Le[se] = !0;
}

function runTokens(se, pe, he, de, ge) {
  for (var ve, ye, _e = Me.length, be = se.charAt(he), me = null; _e--;) {
    if (!((ye = Me[_e]).leadChar && ye.leadChar !== be || ye.scope !== de && "all" !== ye.scope || ye.flag && -1 === pe.indexOf(ye.flag)) && (ve = XRegExp$1.exec(se, ye.regex, he, "sticky"))) {
      me = {
        matchLength: ve[0].length,
        output: ye.handler.call(ge, ve, de, pe),
        reparse: ye.reparse
      };
      break;
    }
  }

  return me;
}

function XRegExp$1(se, pe) {
  if (XRegExp$1.isRegExp(se)) {
    if (void 0 !== pe) throw new TypeError("Cannot supply flags when copying a RegExp");
    return copyRegex(se);
  }

  if (se = void 0 === se ? "" : String(se), pe = void 0 === pe ? "" : String(pe), XRegExp$1.isInstalled("astral") && -1 === pe.indexOf("A") && (pe += "A"), $e[se] || ($e[se] = {}), !$e[se][pe]) {
    for (var he, de = {
      hasNamedCapture: !1,
      captureNames: []
    }, ge = "default", ve = "", ye = 0, _e = function prepareFlags(se, pe) {
      var he;
      if (clipDuplicates(pe) !== pe) throw new SyntaxError("Invalid duplicate regex flag " + pe);

      for (se = Ce.replace.call(se, /^\(\?([\w$]+)\)/, function (se, he) {
        if (Ce.test.call(/[gy]/, he)) throw new SyntaxError("Cannot use flag g or y in mode modifier " + se);
        return pe = clipDuplicates(pe + he), "";
      }), he = 0; he < pe.length; ++he) {
        if (!Le[pe.charAt(he)]) throw new SyntaxError("Unknown regex flag " + pe.charAt(he));
      }

      return {
        pattern: se,
        flags: pe
      };
    }(se, pe), be = _e.pattern, me = _e.flags; ye < be.length;) {
      do {
        (he = runTokens(be, me, ye, ge, de)) && he.reparse && (be = be.slice(0, ye) + he.output + be.slice(ye + he.matchLength));
      } while (he && he.reparse);

      if (he) ve += he.output, ye += he.matchLength || 1;else {
        var xe = XRegExp$1.exec(be, Ne[ge], ye, "sticky")[0];
        ve += xe, ye += xe.length, "[" === xe && "default" === ge ? ge = "class" : "]" === xe && "class" === ge && (ge = "default");
      }
    }

    $e[se][pe] = {
      pattern: Ce.replace.call(ve, /(?:\(\?:\))+/g, "(?:)"),
      flags: Ce.replace.call(me, /[^gimuy]+/g, ""),
      captures: de.hasNamedCapture ? de.captureNames : null
    };
  }

  var we = $e[se][pe];
  return augment(new RegExp(we.pattern, we.flags), we.captures, se, pe);
}

XRegExp$1.prototype = new RegExp(), XRegExp$1.version = "3.1.1-next", XRegExp$1._clipDuplicates = clipDuplicates, XRegExp$1._hasNativeFlag = hasNativeFlag, XRegExp$1._dec = dec, XRegExp$1._hex = hex, XRegExp$1._pad4 = pad4, XRegExp$1.addToken = function (se, pe, he) {
  var de,
      ge = (he = he || {}).optionalFlags;
  if (he.flag && registerFlag(he.flag), ge) for (ge = Ce.split.call(ge, ""), de = 0; de < ge.length; ++de) {
    registerFlag(ge[de]);
  }
  Me.push({
    regex: copyRegex(se, {
      addG: !0,
      addY: Be,
      isInternalOnly: !0
    }),
    handler: pe,
    scope: he.scope || "default",
    flag: he.flag,
    reparse: he.reparse,
    leadChar: he.leadChar
  }), XRegExp$1.cache.flush("patterns");
}, XRegExp$1.cache = function (se, pe) {
  return ze[se] || (ze[se] = {}), ze[se][pe] || (ze[se][pe] = XRegExp$1(se, pe));
}, XRegExp$1.cache.flush = function (se) {
  "patterns" === se ? $e = {} : ze = {};
}, XRegExp$1.exec = function (se, pe, he, de) {
  var ge,
      ve,
      ye,
      _e = "g",
      be = !1;
  return (ge = Be && !!(de || pe.sticky && !1 !== de)) ? _e += "y" : de && (be = !0, _e += "FakeY"), pe.xregexp = pe.xregexp || {}, he = he || 0, (ye = pe.xregexp[_e] || (pe.xregexp[_e] = copyRegex(pe, {
    addG: !0,
    addY: ge,
    source: be ? pe.source + "|()" : void 0,
    removeY: !1 === de,
    isInternalOnly: !0
  }))).lastIndex = he, ve = Ie.exec.call(ye, se), be && ve && "" === ve.pop() && (ve = null), pe.global && (pe.lastIndex = ve ? ye.lastIndex : 0), ve;
}, XRegExp$1.isInstalled = function (se) {
  return !!Re[se];
}, XRegExp$1.isRegExp = function (se) {
  return "[object RegExp]" === Te.call(se);
}, XRegExp$1.replace = function (se, pe, he, de) {
  var ge,
      ve = XRegExp$1.isRegExp(pe),
      ye = pe.global && "one" !== de || "all" === de,
      _e = (ye ? "g" : "") + (pe.sticky ? "y" : "") || "noGY",
      be = pe;

  return ve ? (pe.xregexp = pe.xregexp || {}, be = pe.xregexp[_e] || (pe.xregexp[_e] = copyRegex(pe, {
    addG: !!ye,
    removeG: "one" === de,
    isInternalOnly: !0
  }))) : ye && (be = new RegExp(XRegExp$1.escape(String(pe)), "g")), ge = Ie.replace.call(function toObject(se) {
    if (null == se) throw new TypeError("Cannot convert null or undefined to object");
    return se;
  }(se), be, he), ve && pe.global && (pe.lastIndex = 0), ge;
}, Ie.exec = function (se) {
  var pe,
      he,
      de,
      ge = this.lastIndex,
      ve = Ce.exec.apply(this, arguments);

  if (ve) {
    if (!Fe && ve.length > 1 && indexOf(ve, "") > -1 && (he = copyRegex(this, {
      removeG: !0,
      isInternalOnly: !0
    }), Ce.replace.call(String(se).slice(ve.index), he, function () {
      var se,
          pe = arguments.length;

      for (se = 1; se < pe - 2; ++se) {
        void 0 === arguments[se] && (ve[se] = void 0);
      }
    })), this.xregexp && this.xregexp.captureNames) for (de = 1; de < ve.length; ++de) {
      (pe = this.xregexp.captureNames[de - 1]) && (ve[pe] = ve[de]);
    }
    this.global && !ve[0].length && this.lastIndex > ve.index && (this.lastIndex = ve.index);
  }

  return this.global || (this.lastIndex = ge), ve;
}, Ie.replace = function (se, pe) {
  var he,
      de,
      ge,
      ve = XRegExp$1.isRegExp(se);
  return ve ? (se.xregexp && (de = se.xregexp.captureNames), he = se.lastIndex) : se += "", ge = function isType(se, pe) {
    return Te.call(se) === "[object " + pe + "]";
  }(pe, "Function") ? Ce.replace.call(String(this), se, function () {
    var he,
        ge = arguments;
    if (de) for (ge[0] = new String(ge[0]), he = 0; he < de.length; ++he) {
      de[he] && (ge[0][de[he]] = ge[he + 1]);
    }
    return ve && se.global && (se.lastIndex = ge[ge.length - 2] + ge[0].length), pe.apply(void 0, ge);
  }) : Ce.replace.call(null == this ? this : String(this), se, function () {
    var se = arguments;
    return Ce.replace.call(String(pe), Pe, function (pe, he, ge) {
      var ve;

      if (he) {
        if ((ve = +he) <= se.length - 3) return se[ve] || "";
        if ((ve = de ? indexOf(de, he) : -1) < 0) throw new SyntaxError("Backreference to undefined group " + pe);
        return se[ve + 1] || "";
      }

      if ("$" === ge) return "$";
      if ("&" === ge || 0 == +ge) return se[0];
      if ("`" === ge) return se[se.length - 1].slice(0, se[se.length - 2]);
      if ("'" === ge) return se[se.length - 1].slice(se[se.length - 2] + se[0].length);

      if (ge = +ge, !isNaN(ge)) {
        if (ge > se.length - 3) throw new SyntaxError("Backreference to undefined group " + pe);
        return se[ge] || "";
      }

      throw new SyntaxError("Invalid token " + pe);
    });
  }), ve && (se.global ? se.lastIndex = 0 : se.lastIndex = he), ge;
}, Ie.split = function (se, pe) {
  if (!XRegExp$1.isRegExp(se)) return Ce.split.apply(this, arguments);
  var he,
      de = String(this),
      ge = [],
      ve = se.lastIndex,
      ye = 0;
  return pe = (void 0 === pe ? -1 : pe) >>> 0, XRegExp$1.forEach(de, se, function (se) {
    se.index + se[0].length > ye && (ge.push(de.slice(ye, se.index)), se.length > 1 && se.index < de.length && Array.prototype.push.apply(ge, se.slice(1)), he = se[0].length, ye = se.index + he);
  }), ye === de.length ? Ce.test.call(se, "") && !he || ge.push("") : ge.push(de.slice(ye)), se.lastIndex = ve, ge.length > pe ? ge.slice(0, pe) : ge;
}, XRegExp$1.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function (se, pe) {
  if ("B" === se[1] && "default" === pe) return se[0];
  throw new SyntaxError("Invalid escape " + se[0]);
}, {
  scope: "all",
  leadChar: "\\"
}), XRegExp$1.addToken(/\\u{([\dA-Fa-f]+)}/, function (se, pe, he) {
  var de = dec(se[1]);
  if (de > 1114111) throw new SyntaxError("Invalid Unicode code point " + se[0]);
  if (de <= 65535) return "\\u" + pad4(hex(de));
  if (Xe && he.indexOf("u") > -1) return se[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, {
  scope: "all",
  leadChar: "\\"
}), XRegExp$1.addToken(/\[(\^?)\]/, function (se) {
  return se[1] ? "[\\s\\S]" : "\\b\\B";
}, {
  leadChar: "["
}), XRegExp$1.addToken(/\(\?#[^)]*\)/, function (se, pe, he) {
  return isQuantifierNext(se.input, se.index + se[0].length, he) ? "" : "(?:)";
}, {
  leadChar: "("
}), XRegExp$1.addToken(/\s+|#[^\n]*\n?/, function (se, pe, he) {
  return isQuantifierNext(se.input, se.index + se[0].length, he) ? "" : "(?:)";
}, {
  flag: "x"
}), XRegExp$1.addToken(/\./, function () {
  return "[\\s\\S]";
}, {
  flag: "s",
  leadChar: "."
}), XRegExp$1.addToken(/\\k<([\w$]+)>/, function (se) {
  var pe = isNaN(se[1]) ? indexOf(this.captureNames, se[1]) + 1 : +se[1],
      he = se.index + se[0].length;
  if (!pe || pe > this.captureNames.length) throw new SyntaxError("Backreference to undefined group " + se[0]);
  return "\\" + pe + (he === se.input.length || isNaN(se.input.charAt(he)) ? "" : "(?:)");
}, {
  leadChar: "\\"
}), XRegExp$1.addToken(/\\(\d+)/, function (se, pe) {
  if (!("default" === pe && /^[1-9]/.test(se[1]) && +se[1] <= this.captureNames.length) && "0" !== se[1]) throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + se[0]);
  return se[0];
}, {
  scope: "all",
  leadChar: "\\"
}), XRegExp$1.addToken(/\(\?P?<([\w$]+)>/, function (se) {
  if (!isNaN(se[1])) throw new SyntaxError("Cannot use integer as capture name " + se[0]);
  if ("length" === se[1] || "__proto__" === se[1]) throw new SyntaxError("Cannot use reserved word as capture name " + se[0]);
  if (indexOf(this.captureNames, se[1]) > -1) throw new SyntaxError("Cannot use same name for multiple groups " + se[0]);
  return this.captureNames.push(se[1]), this.hasNamedCapture = !0, "(";
}, {
  leadChar: "("
}), XRegExp$1.addToken(/\((?!\?)/, function (se, pe, he) {
  return he.indexOf("n") > -1 ? "(?:" : (this.captureNames.push(null), "(");
}, {
  optionalFlags: "n",
  leadChar: "("
});
var He = XRegExp$1;
/*!
 * XRegExp Unicode Base 3.1.1-next
 * <xregexp.com>
 * Steven Levithan (c) 2008-2016 MIT License
 */

!function (se) {
  var pe = {},
      he = se._dec,
      de = se._hex,
      ge = se._pad4;

  function normalize(se) {
    return se.replace(/[- _]+/g, "").toLowerCase();
  }

  function charCode(se) {
    var pe = /^\\[xu](.+)/.exec(se);
    return pe ? he(pe[1]) : se.charCodeAt("\\" === se.charAt(0) ? 1 : 0);
  }

  function cacheInvertedBmp(he) {
    return pe[he]["b!"] || (pe[he]["b!"] = function invertBmp(pe) {
      var he = "",
          ve = -1;
      return se.forEach(pe, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function (se) {
        var pe = charCode(se[1]);
        pe > ve + 1 && (he += "\\u" + ge(de(ve + 1)), pe > ve + 2 && (he += "-\\u" + ge(de(pe - 1)))), ve = charCode(se[2] || se[1]);
      }), ve < 65535 && (he += "\\u" + ge(de(ve + 1)), ve < 65534 && (he += "-\\uFFFF")), he;
    }(pe[he].bmp));
  }

  se.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/, function (se, he, de) {
    var ge = "P" === se[1] || !!se[2],
        ve = normalize(se[4] || se[3]),
        ye = pe[ve];
    if ("P" === se[1] && se[2]) throw new SyntaxError("Invalid double negation " + se[0]);
    if (!pe.hasOwnProperty(ve)) throw new SyntaxError("Unknown Unicode token " + se[0]);

    if (ye.inverseOf) {
      if (ve = normalize(ye.inverseOf), !pe.hasOwnProperty(ve)) throw new ReferenceError("Unicode token missing data " + se[0] + " -> " + ye.inverseOf);
      ye = pe[ve], ge = !ge;
    }

    if (!ye.bmp) throw new SyntaxError("Astral mode required for Unicode token " + se[0]);
    return "class" === he ? ge ? cacheInvertedBmp(ve) : ye.bmp : (ge ? "[^" : "[") + ye.bmp + "]";
  }, {
    scope: "all",
    optionalFlags: "A",
    leadChar: "\\"
  }), se.addUnicodeData = function (he) {
    for (var de, ge = 0; ge < he.length; ++ge) {
      if (!(de = he[ge]).name) throw new Error("Unicode token requires name");
      if (!(de.inverseOf || de.bmp || de.astral)) throw new Error("Unicode token has no character data " + de.name);
      pe[normalize(de.name)] = de, de.alias && (pe[normalize(de.alias)] = de);
    }

    se.cache.flush("patterns");
  }, se._getUnicodeProperty = function (se) {
    var he = normalize(se);
    return pe[he];
  };
}(He), function (se) {
  if (!se.addUnicodeData) throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  se.addUnicodeData([{
    name: "L",
    alias: "Letter",
    bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
  }, {
    name: "N",
    alias: "Number",
    bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９"
  }]);
}(He);
var Ue = He,
    De = {
  exports: {}
};
!function (se) {
  se.exports = function (pe, he, de, ge) {
    return (se = {}).dedupe = function dedupe(se, ve) {
      var ye,
          _e = pe(ve);

      if (!he(se) && "object" != typeof se) throw new Error("contains_dupes must be an array or object");
      if (0 === Object.keys(se).length) return void 0 !== typeof console && console.warn("contains_dupes is empty"), [];
      _e.limit && (void 0 !== typeof console && console.warn("options.limit will be ignored in dedupe"), _e.limit = 0), _e.cutoff && "number" == typeof _e.cutoff || (void 0 !== typeof console && console.warn("Using default cutoff of 70"), _e.cutoff = 70), _e.scorer || (_e.scorer = de, void 0 !== typeof console && console.log("Using default scorer 'ratio' for dedupe")), ye = _e.processor && "function" == typeof _e.processor ? _e.processor : function (se) {
        return se;
      };
      var be = {};

      for (var me in se) {
        var xe = ye(se[me]);
        if ("string" != typeof xe && xe instanceof String == !1) throw new Error("Each processed item in dedupe must be a string.");
        var we = ge(xe, se, _e);
        _e.returnObjects ? (1 === we.length || (we = we.sort(function (se, pe) {
          var he = ye(se.choice),
              de = ye(pe.choice),
              ge = he.length,
              ve = de.length;
          return ge === ve ? he < de ? -1 : 1 : ve - ge;
        })), _e.keepmap ? be[ye(we[0].choice)] = {
          item: we[0].choice,
          key: we[0].key,
          matches: we
        } : be[ye(we[0].choice)] = {
          item: we[0].choice,
          key: we[0].key
        }) : (1 === we.length || (we = we.sort(function (se, pe) {
          var he = ye(se[0]),
              de = ye(pe[0]),
              ge = he.length,
              ve = de.length;
          return ge === ve ? he < de ? -1 : 1 : ve - ge;
        })), _e.keepmap ? be[ye(we[0][0])] = [we[0][0], we[0][2], we] : be[ye(we[0][0])] = [we[0][0], we[0][2]]);
      }

      var je = [];

      for (var ke in be) {
        je.push(be[ke]);
      }

      return je;
    }, se;
  };
}(De), function () {
  var se = ye,
      pe = we,
      de = je.exports.intersection,
      ge = je.exports.intersectionWith,
      ve = je.exports.difference,
      _e = je.exports.differenceWith,
      be = je.exports.uniq,
      me = je.exports.uniqWith,
      xe = je.exports.partialRight,
      ke = je.exports.forEach,
      Ae = je.exports.keys,
      Re = je.exports.isArray,
      Ce = je.exports.toArray,
      Ie = je.exports.orderBy,
      ze = Ee,
      $e = Se,
      Me = Oe,
      Ne = function (se, pe, he) {
    var de = {},
        ge = Ue,
        ve = Se,
        ye = Oe;

    function escapeRegExp(se) {
      return se.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function validate(se) {
      return ("string" == typeof se || se instanceof String) && se.length > 0;
    }

    de.validate = validate, de.process_and_sort = function process_and_sort(se) {
      return validate(se) ? se.match(/\S+/g).sort().join(" ").trim() : "";
    }, de.tokenize = function unique_tokens(de, ge) {
      if (ge && ge.wildcards && pe && he) {
        var _e = he(ve, ge, ye);

        return pe(de.match(/\S+/g), function (se, pe) {
          return 0 === _e(se, pe);
        });
      }

      return se(de.match(/\S+/g));
    };

    var _e = ge("[^\\pN|\\pL]", "g");

    return de.full_process = function full_process(se, pe) {
      if (!(se instanceof String) && "string" != typeof se) return "";
      var he;

      if (pe && "object" == typeof pe && pe.wildcards && "string" == typeof pe.wildcards && pe.wildcards.length > 0) {
        var de = pe.wildcards.toLowerCase();

        if (se = se.toLowerCase(), pe.force_ascii) {
          var ve = "[^\0 -|" + escapeRegExp(de) + "]";
          se = se.replace(new RegExp(ve, "g"), "");
          var ye = "[" + escapeRegExp(de) + "]",
              be = de[0];
          se = se.replace(new RegExp(ye, "g"), be);
          var me = "[^A-Za-z0-9" + escapeRegExp(de) + "]";
          he = (se = (se = se.replace(new RegExp(me, "g"), " ")).replace(/_/g, " ")).trim();
        } else {
          var xe = "[^\\pN|\\pL|" + escapeRegExp(de) + "]",
              we = ge(xe, "g");
          se = ge.replace(se, we, " ", "all"), ye = "[" + escapeRegExp(de) + "]", be = de[0], he = (se = se.replace(new RegExp(ye, "g"), be)).trim();
        }
      } else pe && (pe.force_ascii || !0 === pe) && (he = (se = se.replace(/[^\x00-\x7F]/g, "")).replace(/\W|_/g, " ").toLowerCase().trim()), he = ge.replace(se, _e, " ", "all").toLowerCase().trim();

      return pe && pe.collapseWhitespace && (he = he.replace(/\s+/g, " ")), he;
    }, de.clone_and_set_option_defaults = function (se) {
      if (se && se.isAClone) return se;
      var pe = {
        isAClone: !0
      };

      if (se) {
        var he,
            de = Object.keys(se);

        for (he = 0; he < de.length; he++) {
          pe[de[he]] = se[de[he]];
        }
      }

      return void 0 !== pe.full_process && !1 === pe.full_process || (pe.full_process = !0), void 0 !== pe.force_ascii && !0 === pe.force_ascii || (pe.force_ascii = !1), void 0 !== pe.normalize && !1 === pe.normalize || (pe.normalize = !0), void 0 !== pe.astral && !0 === pe.astral && (pe.full_process = !1), void 0 !== pe.collapseWhitespace && !1 === pe.collapseWhitespace || (pe.collapseWhitespace = !0), pe;
    }, de.isCustomFunc = function (se) {
      return "function" != typeof se || "token_set_ratio" !== se.name && "partial_token_set_ratio" !== se.name && "token_sort_ratio" !== se.name && "partial_token_sort_ratio" !== se.name && "QRatio" !== se.name && "WRatio" !== se.name && "distance" !== se.name && "partial_ratio" !== se.name;
    }, de;
  }(be, me, xe),
      Pe = Ne.validate,
      Fe = Ne.process_and_sort,
      qe = Ne.tokenize,
      Te = Ne.full_process,
      Xe = Ne.clone_and_set_option_defaults,
      Be = Ne.isCustomFunc,
      Le = De.exports(Xe, Re, QRatio, extract).dedupe;

  function QRatio(se, pe, he) {
    var de = Xe(he);
    return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? _ratio(se, pe, de) : 0;
  }

  function token_set_ratio(se, pe, he) {
    var de = Xe(he);
    return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? _token_set(se, pe, de) : 0;
  }

  function partial_token_set_ratio(se, pe, he) {
    var de = Xe(he);
    return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? (de.partial = !0, _token_set(se, pe, de)) : 0;
  }

  function token_sort_ratio(se, pe, he) {
    var de = Xe(he);
    return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? (de.proc_sorted || (se = Fe(se), pe = Fe(pe)), _ratio(se, pe, de)) : 0;
  }

  function partial_token_sort_ratio(se, pe, he) {
    var de = Xe(he);
    return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? (de.partial = !0, de.proc_sorted || (se = Fe(se), pe = Fe(pe)), _partial_ratio(se, pe, de)) : 0;
  }

  function extract(se, he, de) {
    var ge,
        ve = Xe(de);
    if (Re(he)) ge = he.length;else {
      if (!(he instanceof Object)) throw new Error("Invalid choices");
      ge = Ae(he).length;
    }
    if (!he || 0 === ge) return void 0 !== typeof console && console.warn("No choices"), [];
    if (ve.processor && "function" != typeof ve.processor) throw new Error("Invalid Processor");
    if (ve.processor || (ve.processor = function (se) {
      return se;
    }), ve.scorer && "function" != typeof ve.scorer) throw new Error("Invalid Scorer");
    ve.scorer || (ve.scorer = QRatio);
    var ye = Be(ve.scorer);
    ve.cutoff && "number" == typeof ve.cutoff || (ve.cutoff = -1);

    var pre_processor = function pre_processor(se, pe) {
      return se;
    };

    ve.full_process && (pre_processor = Te, ye || (ve.processed = !0));

    var _e = !1;

    ye || (se = pre_processor(se, ve), ve.full_process = !1, ve.astral && ve.normalize && (ve.normalize = !1, String.prototype.normalize ? (_e = !0, se = se.normalize()) : void 0 !== typeof console && console.warn("Normalization not supported in your environment")), 0 === se.length && void 0 !== typeof console && console.warn("Processed query is empty string"));
    var be,
        me,
        xe,
        we,
        je = [],
        Ee = !1,
        Se = !1,
        Oe = !1;

    if ("token_sort_ratio" === ve.scorer.name || "partial_token_sort_ratio" === ve.scorer.name) {
      var Ce = Fe(se);
      Se = !0;
    } else if ("token_set_ratio" === ve.scorer.name || "partial_token_set_ratio" === ve.scorer.name) {
      var Ie = qe(se, ve);
      Oe = !0;
    }

    return ve.returnObjects ? (xe = function xe(se, pe) {
      return se.score - pe.score;
    }, we = function we(se, pe) {
      return pe.score - se.score;
    }) : (xe = function xe(se, pe) {
      return se[1] - pe[1];
    }, we = function we(se, pe) {
      return pe[1] - se[1];
    }), ke(he, function (pe, he) {
      ve.tokens = void 0, ve.proc_sorted = !1, Se ? (ve.proc_sorted = !0, pe && pe.proc_sorted ? me = pe.proc_sorted : (me = pre_processor(ve.processor(pe), ve), me = Fe(_e ? me.normalize() : me)), be = ve.scorer(Ce, me, ve)) : Oe ? (me = "x", pe && pe.tokens ? (ve.tokens = [Ie, pe.tokens], ve.trySimple && (me = pre_processor(ve.processor(pe), ve))) : (me = pre_processor(ve.processor(pe), ve), ve.tokens = [Ie, qe(_e ? me.normalize() : me, ve)]), be = ve.scorer(se, me, ve)) : ye ? (me = ve.processor(pe), be = ve.scorer(se, me, ve)) : ("string" == typeof (me = pre_processor(ve.processor(pe), ve)) && 0 !== me.length || (Ee = !0), _e && "string" == typeof me && (me = me.normalize()), be = ve.scorer(se, me, ve)), be > ve.cutoff && (ve.returnObjects ? je.push({
        choice: pe,
        score: be,
        key: he
      }) : je.push([pe, be, he]));
    }), Ee && void 0 !== typeof console && console.log("One or more choices were empty. (post-processing if applied)"), ve.limit && "number" == typeof ve.limit && ve.limit > 0 && ve.limit < ge && !ve.unsorted ? je = pe.nlargest(je, ve.limit, xe) : ve.unsorted || (je = je.sort(we)), je;
  }

  function extractAsync(se, he, de, ge) {
    var ve,
        ye,
        _e = Xe(de);

    "object" == typeof de.abortController && (ve = de.abortController), "object" == typeof de.cancelToken && (ye = de.cancelToken);
    var be = 256;
    "number" == typeof _e.asyncLoopOffset && (be = _e.asyncLoopOffset < 1 ? 1 : _e.asyncLoopOffset);
    var me,
        xe = !1;
    if (he && he.length && Re(he)) me = he.length, xe = !0;else {
      if (!(he instanceof Object)) return void ge(new Error("Invalid choices"));
      me = Object.keys(he).length;
    }
    if (!he || 0 === me) return void 0 !== typeof console && console.warn("No choices"), void ge(null, []);
    if (_e.processor && "function" != typeof _e.processor) ge(new Error("Invalid Processor"));else if (_e.processor || (_e.processor = function (se) {
      return se;
    }), _e.scorer && "function" != typeof _e.scorer) ge(new Error("Invalid Scorer"));else {
      _e.scorer || (_e.scorer = QRatio);
      var we = Be(_e.scorer);
      _e.cutoff && "number" == typeof _e.cutoff || (_e.cutoff = -1);

      var pre_processor = function pre_processor(se, pe) {
        return se;
      };

      _e.full_process && (pre_processor = Te, we || (_e.processed = !0));
      var je = !1;
      we || (se = pre_processor(se, _e), _e.full_process = !1, _e.astral && _e.normalize && (_e.normalize = !1, String.prototype.normalize ? (je = !0, se = se.normalize()) : void 0 !== typeof console && console.warn("Normalization not supported in your environment")), 0 === se.length && void 0 !== typeof console && console.warn("Processed query is empty string"));
      var ke,
          Ee,
          Ae,
          Se,
          Oe,
          Ce = [],
          Ie = !1,
          ze = !1,
          $e = !1;

      if ("token_sort_ratio" === _e.scorer.name || "partial_token_sort_ratio" === _e.scorer.name) {
        var Me = Fe(se);
        ze = !0;
      } else if ("token_set_ratio" === _e.scorer.name || "partial_token_set_ratio" === _e.scorer.name) {
        var Ne = qe(se, _e);
        $e = !0;
      }

      _e.returnObjects ? (Se = function Se(se, pe) {
        return se.score - pe.score;
      }, Oe = function Oe(se, pe) {
        return pe.score - se.score;
      }) : (Se = function Se(se, pe) {
        return se[1] - pe[1];
      }, Oe = function Oe(se, pe) {
        return pe[1] - se[1];
      });
      var Pe = Object.keys(he);
      xe ? searchLoop(0) : searchLoop(Pe[0], 0);
    }

    function searchLoop(de, Re) {
      (xe || he.hasOwnProperty(de)) && (_e.tokens = void 0, _e.proc_sorted = !1, ze ? (_e.proc_sorted = !0, he[de] && he[de].proc_sorted ? Ee = he[de].proc_sorted : (Ee = pre_processor(_e.processor(he[de]), _e), Ee = Fe(je ? Ee.normalize() : Ee)), Ae = _e.scorer(Me, Ee, _e)) : $e ? (Ee = "x", he[de] && he[de].tokens ? (_e.tokens = [Ne, he[de].tokens], _e.trySimple && (Ee = pre_processor(_e.processor(he[de]), _e))) : (Ee = pre_processor(_e.processor(he[de]), _e), _e.tokens = [Ne, qe(je ? Ee.normalize() : Ee, _e)]), Ae = _e.scorer(se, Ee, _e)) : we ? (Ee = _e.processor(he[de]), Ae = _e.scorer(se, Ee, _e)) : ("string" == typeof (Ee = pre_processor(_e.processor(he[de]), _e)) && 0 !== Ee.length || (Ie = !0), je && "string" == typeof Ee && (Ee = Ee.normalize()), Ae = _e.scorer(se, Ee, _e)), ke = xe ? parseInt(de) : de, Ae > _e.cutoff && (_e.returnObjects ? Ce.push({
        choice: he[de],
        score: Ae,
        key: ke
      }) : Ce.push([he[de], Ae, ke]))), ve && !0 === ve.signal.aborted ? ge(new Error("aborted")) : ye && !0 === ye.canceled ? ge(new Error("canceled")) : xe && de < he.length - 1 ? de % be == 0 ? setImmediate(function () {
        searchLoop(de + 1);
      }) : searchLoop(de + 1) : Re < Pe.length - 1 ? Re % be == 0 ? setImmediate(function () {
        searchLoop(Pe[Re + 1], Re + 1);
      }) : searchLoop(Pe[Re + 1], Re + 1) : (Ie && void 0 !== typeof console && console.log("One or more choices were empty. (post-processing if applied)"), _e.limit && "number" == typeof _e.limit && _e.limit > 0 && _e.limit < me && !_e.unsorted ? Ce = pe.nlargest(Ce, _e.limit, Se) : _e.unsorted || (Ce = Ce.sort(Oe)), ge(null, Ce));
    }
  }

  var He = "%*SuperUniqueWildcardKey*%",
      We = !1;

  function _getCharacterCounts(se, pe) {
    var he = se;

    if (pe.astral) {
      pe.normalize && (String.prototype.normalize ? he = se.normalize() : We || (void 0 !== typeof console && console.warn("Normalization not supported in your environment"), We = !0));
      var de = Ce(he);
    } else de = he.split("");

    var ge = {};
    if (pe.wildcards) for (var ve = 0; ve < de.length; ve++) {
      var ye = de[ve];
      pe.wildcards.indexOf(ye) > -1 ? ge[He] ? ge[He] += 1 : ge[He] = 1 : ge[ye] ? ge[ye] += 1 : ge[ye] = 1;
    } else for (ve = 0; ve < de.length; ve++) {
      ge[ye = de[ve]] ? ge[ye] += 1 : ge[ye] = 1;
    }
    return ge;
  }

  function _token_similarity_sort(se, pe, he) {
    for (var ge = pe, ve = se.reduce(function (se, pe) {
      return se[pe] = _getCharacterCounts(pe, he), se;
    }, {}), ye = ge.reduce(function (se, pe) {
      return se[pe] = _getCharacterCounts(pe, he), se;
    }, {}), _e = [], be = 0; ge.length && be < se.length;) {
      var me = Ie(ge, function (pe) {
        return he = ve[se[be]], ge = ye[pe], _e = Object.keys(he), me = Object.keys(ge), xe = de(_e, me).map(function (se) {
          return he[se] * ge[se];
        }).reduce(function (se, pe) {
          return se + pe;
        }, 0), we = _e.map(function (se) {
          return Math.pow(he[se], 2);
        }).reduce(function (se, pe) {
          return se + pe;
        }, 0), je = me.map(function (se) {
          return Math.pow(ge[se], 2);
        }).reduce(function (se, pe) {
          return se + pe;
        }, 0), xe / (Math.sqrt(we) * Math.sqrt(je));

        var he, ge, _e, me, xe, we, je;
      }, "desc")[0];
      _e.push(me), be++, ge = ge.filter(function (se) {
        return se !== me;
      });
    }

    return _e.concat(ge);
  }

  function _order_token_lists(se, pe, he, de) {
    var ge = pe,
        ve = de;
    if (pe.length > de.length) ge = de, ve = pe;else if (pe.length === de.length) {
      if (se.length > he.length) ge = de, ve = pe;else [se, he].sort()[0] === he && (ge = de, ve = pe);
    }
    return [ge, ve];
  }

  function _token_similarity_sort_ratio(se, pe, he) {
    if (he.tokens) de = he.tokens[0], ge = he.tokens[1];else var de = qe(se, he),
        ge = qe(pe, he);

    var ve = _order_token_lists(se, de.sort(), pe, ge.sort()),
        ye = ve[0];

    var _e = _token_similarity_sort(ye, ve[1], he);

    return he.partial ? _partial_ratio(ye.join(" "), _e.join(" "), he) : _ratio(ye.join(" "), _e.join(" "), he);
  }

  function _token_set(se, pe, he) {
    if (he.tokens) ye = he.tokens[0], be = he.tokens[1];else var ye = qe(se, he),
        be = qe(pe, he);
    if (he.wildcards) var me = xe($e, he, Me),
        wildCompare = function wildCompare(se, pe) {
      return 0 === me(se, pe);
    },
        we = ge(ye, be, wildCompare),
        je = _e(ye, be, wildCompare),
        ke = _e(be, ye, wildCompare);else we = de(ye, be), je = ve(ye, be), ke = ve(be, ye);
    var Ee = we.sort().join(" "),
        Ae = je.sort(),
        Se = ke.sort();
    if (he.sortBySimilarity) var Oe = _order_token_lists(se, Ae, pe, Se),
        Re = Oe[0],
        Ce = Oe[1],
        Ie = Re.join(" "),
        ze = _token_similarity_sort(Re, Ce, he).join(" ");else Ie = Ae.join(" "), ze = Se.join(" ");
    var Ne = Ee + " " + Ie,
        Pe = Ee + " " + ze;
    Ee = Ee.trim(), Ne = Ne.trim(), Pe = Pe.trim();
    var Fe = _ratio;
    if (he.partial && (Fe = _partial_ratio, Ee.length > 0)) return 100;
    var Te = [Fe(Ee, Ne, he), Fe(Ee, Pe, he), Fe(Ne, Pe, he)];
    return he.trySimple && Te.push(Fe(se, pe, he)), Math.max.apply(null, Te);
  }

  var Ge,
      Qe,
      Ve,
      Ye,
      Ze = !1;

  function _ratio(pe, he, de) {
    if (!Pe(pe)) return 0;
    if (!Pe(he)) return 0;

    if (de.ratio_alg && "difflib" === de.ratio_alg) {
      var ge = new se(null, pe, he).ratio();
      return Math.round(100 * ge);
    }

    var ve, ye;
    return void 0 === de.subcost && (de.subcost = 2), de.astral ? (de.normalize && (String.prototype.normalize ? (pe = pe.normalize(), he = he.normalize()) : Ze || (void 0 !== typeof console && console.warn("Normalization not supported in your environment"), Ze = !0)), ve = ze(pe, he, de, Ce), ye = Ce(pe).length + Ce(he).length) : de.wildcards ? (ve = $e(pe, he, de, Me), ye = pe.length + he.length) : (ve = Me(pe, he, de), ye = pe.length + he.length), Math.round((ye - ve) / ye * 100);
  }

  function _partial_ratio(pe, he, de) {
    if (!Pe(pe)) return 0;
    if (!Pe(he)) return 0;
    if (pe.length <= he.length) var ge = pe,
        ve = he;else ge = he, ve = pe;

    for (var ye = new se(null, ge, ve).getMatchingBlocks(), _e = [], be = 0; be < ye.length; be++) {
      var me = ye[be][1] - ye[be][0] > 0 ? ye[be][1] - ye[be][0] : 0,
          xe = me + ge.length,
          we = _ratio(ge, ve.substring(me, xe), de);

      if (we > 99.5) return 100;

      _e.push(we);
    }

    return Math.max.apply(null, _e);
  }

  Object.keys || (Object.keys = (Ge = Object.prototype.hasOwnProperty, Qe = !{
    toString: null
  }.propertyIsEnumerable("toString"), Ye = (Ve = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (se) {
    if ("object" != typeof se && ("function" != typeof se || null === se)) throw new TypeError("Object.keys called on non-object");
    var pe,
        he,
        de = [];

    for (pe in se) {
      Ge.call(se, pe) && de.push(pe);
    }

    if (Qe) for (he = 0; he < Ye; he++) {
      Ge.call(se, Ve[he]) && de.push(Ve[he]);
    }
    return de;
  }));
  var Ke = void 0;
  "undefined" != typeof Promise && (Ke = function Ke(se, pe, he) {
    return new Promise(function (de, ge) {
      extractAsync(se, pe, he, function (se, pe) {
        se ? ge(se) : de(pe);
      });
    });
  });
  var Je = {
    distance: function distance(se, pe, he) {
      var de = Xe(he);
      return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, void 0 === de.subcost && (de.subcost = 1), de.astral ? ze(se, pe, de, Ce) : $e(se, pe, de, Me);
    },
    ratio: QRatio,
    partial_ratio: function partial_ratio(se, pe, he) {
      var de = Xe(he);
      return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? _partial_ratio(se, pe, de) : 0;
    },
    token_set_ratio: token_set_ratio,
    token_sort_ratio: token_sort_ratio,
    partial_token_set_ratio: partial_token_set_ratio,
    partial_token_sort_ratio: partial_token_sort_ratio,
    token_similarity_sort_ratio: function token_similarity_sort_ratio(se, pe, he) {
      var de = Xe(he);
      return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? _token_similarity_sort_ratio(se, pe, de) : 0;
    },
    partial_token_similarity_sort_ratio: function partial_token_similarity_sort_ratio(se, pe, he) {
      var de = Xe(he);
      return se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, Pe(se) && Pe(pe) ? (de.partial = !0, _token_similarity_sort_ratio(se, pe, de)) : 0;
    },
    WRatio: function WRatio(se, pe, he) {
      var de = Xe(he);
      if (se = de.full_process ? Te(se, de) : se, pe = de.full_process ? Te(pe, de) : pe, de.full_process = !1, !Pe(se)) return 0;
      if (!Pe(pe)) return 0;

      var ge = !0,
          ve = .95,
          ye = .9,
          _e = _ratio(se, pe, de),
          be = Math.max(se.length, pe.length) / Math.min(se.length, pe.length);

      if (be < 1.5 && (ge = !1), be > 8 && (ye = .6), ge) {
        var me = _partial_ratio(se, pe, de) * ye,
            xe = partial_token_sort_ratio(se, pe, de) * ve * ye,
            we = partial_token_set_ratio(se, pe, de) * ve * ye;
        return Math.round(Math.max(_e, me, xe, we));
      }

      var je = token_sort_ratio(se, pe, de) * ve,
          ke = token_set_ratio(se, pe, de) * ve;
      return Math.round(Math.max(_e, je, ke));
    },
    full_process: Te,
    extract: extract,
    extractAsync: extractAsync,
    extractAsPromised: Ke,
    process_and_sort: Fe,
    unique_tokens: qe,
    dedupe: Le
  };
  he.exports = Je;
}();
var We = he.exports;
var Ge = We.distance,
    Qe = We.ratio,
    Ve = We.partial_ratio,
    Ye = We.token_set_ratio,
    Ze = We.token_sort_ratio,
    Ke = We.partial_token_set_ratio,
    Je = We.partial_token_sort_ratio,
    er = We.token_similarity_sort_ratio,
    tr = We.partial_token_similarity_sort_ratio,
    rr = We.WRatio,
    nr = We.full_process,
    or = We.extract,
    ar = We.extractAsync,
    ir = We.extractAsPromised,
    cr = We.process_and_sort,
    ur = We.unique_tokens,
    sr = We.dedupe;

;// CONCATENATED MODULE: ./src/lib.ts
var lib_templateObject, lib_templateObject2, lib_templateObject3, lib_templateObject4, lib_templateObject5, lib_templateObject6, lib_templateObject7;

function src_lib_slicedToArray(arr, i) { return src_lib_arrayWithHoles(arr) || src_lib_iterableToArrayLimit(arr, i) || src_lib_unsupportedIterableToArray(arr, i) || src_lib_nonIterableRest(); }

function src_lib_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function src_lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_lib_arrayLikeToArray(o, minLen); }

function src_lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function src_lib_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function src_lib_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// The fight page does not sort the minis by alphabetical order






var prefChangeSettings = property_get("logPreferenceChange"); // So we have to reorder them to the rules page
// This will be empty if we haven't broken the stone or have 0 fites left

var activeMinis = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight"), "//select[@name='stance']/option/text()");
var activeMinisSorted = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=rules"), "//tr[@class='small']/td[@nowrap]/text()").map(sortedMini => sortedMini.slice(-1) === "*" ? sortedMini.slice(0, -1) : sortedMini);
var pvpIDs = Array.from(Array(activeMinisSorted.length).keys());
var sortedPvpIDs = pvpIDs; // Just a "declaration"; initialization to be delayed

function initializeSortedPvpIDs() {
  sortedPvpIDs = activeMinisSorted.map(sortedMini => activeMinis.indexOf(activeMinis.reduce((a, b) => Qe(a, sortedMini) > Qe(b, sortedMini) ? a : b)));

  if (!sortedPvpIDs.every((id, i) => id >= 0 && id < activeMinis.length && sortedPvpIDs.indexOf(id) === i)) {
    sortedPvpIDs.forEach((sortedID, id) => (0,external_kolmafia_namespaceObject.print)("Mapping ".concat(activeMinis[sortedID], " to ").concat(activeMinisSorted[id])));
    throw new Error("Error with sortedPvpIDs: ".concat(sortedPvpIDs, "!"));
  }

  if (sortedPvpIDs.filter((id, i) => sortedPvpIDs.indexOf(id) === i).length !== sortedPvpIDs.length) {
    sortedPvpIDs.forEach((sortedId, id) => (0,external_kolmafia_namespaceObject.print)("Mapping ".concat(activeMinis[sortedId], " to ").concat(activeMinisSorted[id])));
    throw new Error("Error with mapping!");
  }
}
var verbose = !property_get("PVP_MAB_reduced_verbosity", false);
function getFightRecords() {
  return pvpIDs.map(i => {
    var wins = property_get("myCurrentPVPWins_".concat(i), 0);
    var losses = property_get("myCurrentPVPLosses_".concat(i), 0);
    return [wins, losses];
  });
}
function getBestMini() {
  return strategies_namespaceObject[args.strategy]();
}
function useMeteoriteade() {
  if (!property_get("PVP_MAB_use_meteoriteade", false)) return;
  var potionsToUse = 3 - property_get("_meteoriteAdesUsed");
  if (potionsToUse <= 0) return;
  var potionsToBuy = potionsToUse - (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(lib_templateObject || (lib_templateObject = lib_taggedTemplateLiteral(["Meteorite-Ade"]))));
  if (potionsToBuy > 0) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(lib_templateObject2 || (lib_templateObject2 = lib_taggedTemplateLiteral(["Meteorite-Ade"]))), potionsToBuy, 10000);
  (0,external_kolmafia_namespaceObject.use)(template_string_$item(lib_templateObject3 || (lib_templateObject3 = lib_taggedTemplateLiteral(["Meteorite-Ade"]))), potionsToUse);
}
function usePunchingMirror() {
  // eslint-disable-next-line libram/verify-constants
  if (!have(template_string_$item(lib_templateObject4 || (lib_templateObject4 = lib_taggedTemplateLiteral(["punching mirror"])))) || property_get("_punchingMirrorUsed", false)) return; // eslint-disable-next-line libram/verify-constants

  (0,external_kolmafia_namespaceObject.use)(template_string_$item(lib_templateObject5 || (lib_templateObject5 = lib_taggedTemplateLiteral(["punching mirror"]))));
}
function useDiploma() {
  if (!have(template_string_$item(lib_templateObject6 || (lib_templateObject6 = lib_taggedTemplateLiteral(["School of Hard Knocks Diploma"])))) || property_get("_hardKnocksDiplomaUsed")) return;
  (0,external_kolmafia_namespaceObject.use)(template_string_$item(lib_templateObject7 || (lib_templateObject7 = lib_taggedTemplateLiteral(["School of Hard Knocks Diploma"]))));
}
function breakStone() {
  if (!args.breakStone && !(0,external_kolmafia_namespaceObject.hippyStoneBroken)()) {
    (0,external_kolmafia_namespaceObject.abort)("Your stone is unbroken, and you won't let us do it!");
  }

  var buffer = (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?confirm=on&action=smashstone&pwd");
  if (buffer.includes("Pledge allegiance to")) (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=pledge&place=fight&pwd"); // Update activeMinis if we just broke the stone

  activeMinis = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=fight"), "//select[@name='stance']/option/text()");
}
function updateSeason() {
  var _visitUrl$match;

  var currentSeason = Array.from((_visitUrl$match = (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=rules").match(RegExp(/<b>Current Season: <\/b>(.*?)( \\(Post-Season\\))?<br \/>/))) !== null && _visitUrl$match !== void 0 ? _visitUrl$match : ["", "0"])[1];
  if (property_get("myCurrentPVPSeason", "") === currentSeason) return;
  if (!(0,external_kolmafia_namespaceObject.hippyStoneBroken)()) throw new Error("We cannot update the season until you've broken your stone!"); // Reset wins and losses (pad all at 7 wins 7 losses [prime numbers good])

  pvpIDs.forEach(i => {
    _set("myCurrentPVPWins_".concat(i), 7);
    _set("myCurrentPVPLosses_".concat(i), 7);
    _set("myCurrentPVPMini_".concat(i), "");
    _set("myCurrentPVPMini_".concat(i), activeMinisSorted[i]);
  });
  /*
  pvpIDs.forEach((i) => {
    set(`myCurrentPVPMiniExp3Weight_${i}`, 1.0);
    set(`myCurrentPVPMiniExp3IXWeight_${i}`, 0.0);
  });
  */
  // The rules page simply sorts the minis by alphabetical order
  // We can always see this (even if we don't have any fites left)
  // Reset our season's wins and losses

  _set("totalSeasonPVPWins", 0);
  _set("totalSeasonPVPLosses", 0); // save pvp season as current pvp season

  _set("myCurrentPVPSeason", currentSeason);
}
function updateWinRate() {
  if (property_get("todaysPVPDate") !== (0,external_kolmafia_namespaceObject.todayToString)()) {
    _set("todaysPVPWins", 0);
    _set("todaysPVPLosses", 0);
    _set("todaysPVPDate", (0,external_kolmafia_namespaceObject.todayToString)());
  }
}
function equipPVPOutfit() {
  if (args.no_optimize) return; // Can we find a better way to determine if we are already wearing a PVP-optimal outfit?

  (0,external_kolmafia_namespaceObject.cliExecute)("unequip all");
  (0,external_kolmafia_namespaceObject.cliExecute)("UberPvPOptimizer");
}
function pvpAttack(attackType) {
  var pvpChoice = getBestMini();
  (0,external_kolmafia_namespaceObject.print)("");
  (0,external_kolmafia_namespaceObject.print)("Chose mini: ".concat(activeMinis[pvpChoice]), "green");
  return (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?action=fight&place=fight&ranked=1&stance=".concat(pvpChoice, "&attacktype=").concat(attackType, "&pwd"));
}
function printStats() {
  (0,external_kolmafia_namespaceObject.print)("");
  (0,external_kolmafia_namespaceObject.print)("Season ".concat(property_get("myCurrentPVPSeason", ""), " minigame statistics:"), "blue");
  pvpIDs.forEach(i => {
    var wins = property_get("myCurrentPVPWins_".concat(i), 0);
    var losses = property_get("myCurrentPVPLosses_".concat(i), 0);
    var mini = property_get("myCurrentPVPMini_".concat(i), "");
    if (wins + losses === 0) (0,external_kolmafia_namespaceObject.print)("- ".concat(mini, ": 0/0 (0.0%)"), "blue");else (0,external_kolmafia_namespaceObject.print)("- ".concat(mini, ": ").concat(wins, "/").concat(wins + losses, " (").concat(Math.round(1000 * wins / (wins + losses)) / 10, "%)"), "blue");
  });
}
function printStrategiesEstimates() {
  var fightRecords = getFightRecords();
  var t = Math.max(1, sumNumbers(fightRecords.map(_ref => {
    var _ref2 = src_lib_slicedToArray(_ref, 2),
        wins = _ref2[0],
        losses = _ref2[1];

    return wins + losses;
  })));
  var logConst = 2 * Math.log(t); // const Exp3Ls = pvpIDs.map((i) => get(`myCurrentPVPMiniExp3Weight_${i}`, 1.0));
  // const Exp3Ps = getExp3Probabilities(Exp3Ls);
  // const Exp3IXLs = pvpIDs.map((i) => get(`myCurrentPVPMiniExp3IXWeight_${i}`, 1.0));
  // const Exp3IXPs = getExp3IXProbabilities(Exp3IXLs);

  pvpIDs.forEach(i => {
    var _fightRecords$i = src_lib_slicedToArray(fightRecords[i], 2),
        wins = _fightRecords$i[0],
        losses = _fightRecords$i[1];

    var n = wins + losses; // payoffs

    var UCBPayoff = n > 0 ? wins / n + Math.sqrt(logConst / n) : 10;
    var gaussianThompsonPayoff = n > 0 ? sampleNormal(wins / n, 1.0 / Math.sqrt(n)) : sampleNormal(0.5, 1e-2);
    var bernoulliThompsonPayoff = sampleBeta(wins, losses);
    var epsilonGreedyPayoff = wins / (wins + losses); // const Exp3Payoff = Exp3Ps[i];
    // const Exp3IXPayoff = Exp3IXPs[i];

    var stats = [UCBPayoff, gaussianThompsonPayoff, bernoulliThompsonPayoff, epsilonGreedyPayoff // Exp3Payoff,
    // Exp3IXPayoff,
    ].map(val => val.toFixed(3)).join(" | ");
    (0,external_kolmafia_namespaceObject.print)("".concat(activeMinisSorted[i], ": ").concat(stats), "blue");
  });
  (0,external_kolmafia_namespaceObject.print)();
}
function sampleProbabilitiesIdx(Ps) {
  var carry = 0.0;
  var PCumSum = Ps.map(P => {
    carry += P;
    return carry;
  });
  var rnd = Math.random() * carry;
  return PCumSum.findIndex(v => v >= rnd);
}
/*
const Exp3Gamma = 0.05;
export function getExp3Probabilities(Ls: number[]): number[] {
  const K = activeMinis.length;

  const LSum = sumNumbers(Ls);
  return Ls.map((L) => ((1 - Exp3Gamma) * L) / LSum + Exp3Gamma / K);
}

const Exp3IXHorizon = 1000;
export function getExp3IXProbabilities(Ls: number[]): number[] {
  const K = activeMinis.length;

  const eta = Math.sqrt((2.0 * Math.log(K + 1)) / (Exp3IXHorizon * K));

  const Es = Ls.map((L) => Math.exp(-eta * L));
  const ESum = sumNumbers(Es);
  return Es.map((E) => E / ESum);
}

export function updateExpBandits(miniID: number, result: boolean): void {
  updateExp3Weights(miniID, result);
  updateExp3IXWeights(miniID, result);
}

function updateExp3Weights(miniID: number, result: boolean): void {
  const K = activeMinis.length;

  const Ls = pvpIDs.map((i) => {
    const L = Number(get(`myCurrentPVPMiniExp3Weight_${i}`));
    return L === 0.0 ? 1.0 : L;
  });
  const Ps = getExp3Probabilities(Ls);
  const reward = result ? 1.0 / Ps[miniID] : 0.0;

  set(`myCurrentPVPMiniExp3Weight_${miniID}`, Ls[miniID] * Math.exp((reward * Exp3Gamma) / K));
}

function updateExp3IXWeights(miniID: number, result: boolean): void {
  const K = activeMinis.length;

  const eta = Math.sqrt((2.0 * Math.log(K + 1)) / (Exp3IXHorizon * K));
  const gamma = eta / 2.0;

  const Ls = pvpIDs.map((i) => Number(get(`myCurrentPVPMiniExp3IXWeight_${i}`)));
  const Ps = getExp3IXProbabilities(Ls);

  const reward = result ? 1.0 : 0.0;

  set(`myCurrentPVPMiniExp3IXWeight_${miniID}`, Ls[miniID] + (1.0 - reward) / (Ps[miniID] + gamma));
}
*/
;// CONCATENATED MODULE: ./src/parsing.ts




function parseCompactMode(result, whoAreWe) {
  var slicedResult = result;
  var whoAmI = whoAreWe[0],
      whoAreThey = whoAreWe[1];

  var _loop = function _loop() {
    var _curString$match$map, _curString$match;

    slicedResult = slicedResult.slice(slicedResult.indexOf("<td nowrap>"));
    var curString = slicedResult.slice(0, slicedResult.indexOf("</td></tr>") + 9);
    var mini = ((_curString$match$map = (_curString$match = curString.match(RegExp(/<td nowrap><b>(.*?)<\/b><\/td>/))) === null || _curString$match === void 0 ? void 0 : _curString$match.map(s => s.replace("<td nowrap><b>", "").replace("</b></td>", ""))) !== null && _curString$match$map !== void 0 ? _curString$match$map : ["unknown mini"])[0];
    var miniID = activeMinisSorted.indexOf(activeMinisSorted.reduce((a, b) => Qe(a, mini) > Qe(b, mini) ? a : b));
    if (curString.includes("A tie-breaker")) (0,external_kolmafia_namespaceObject.print)("We tied the mini: ".concat(mini), "blue");else {
      // The winner is whosever's name is bolded
      var weWon = false;

      if (curString.includes(whoAmI)) {
        if (curString.includes("<b>".concat(whoAmI, "</b>"))) weWon = true;
      } else {
        if (!curString.includes("<b>".concat(whoAreThey, "</b>"))) weWon = true;
      }

      if (weWon) {
        if (verbose) (0,external_kolmafia_namespaceObject.print)("We won the mini: ".concat(mini), "green");
        _set("myCurrentPVPWins_".concat(miniID), property_get("myCurrentPVPWins_".concat(miniID), 0) + 1);
      } else {
        if (verbose) (0,external_kolmafia_namespaceObject.print)("We lost the mini: ".concat(mini), "red");
        _set("myCurrentPVPLosses_".concat(miniID), property_get("myCurrentPVPLosses_".concat(miniID), 0) + 1);
      } // updateExpBandits(miniID, weWon);

    }
    slicedResult = slicedResult.slice(slicedResult.indexOf("</td></tr>") + 9);
  };

  while (slicedResult.includes("td nowrap")) {
    _loop();
  }

  return slicedResult.includes(whoAmI);
}
function parseNonCompactMode(result, whoAreWe) {
  var slicedResult = result;
  var whoAmI = whoAreWe[0];

  var _loop2 = function _loop2() {
    var _curString$match$map2, _curString$match2;

    var splitIdx = slicedResult.slice(5).includes("Round ") ? slicedResult.slice(5).indexOf("Round ") + 5 : slicedResult.indexOf('<div class="final">');
    var curString = slicedResult.slice(0, splitIdx);
    var mini = ((_curString$match$map2 = (_curString$match2 = curString.match(RegExp(/<b class="miniclick">(.*?)<\/b>/))) === null || _curString$match2 === void 0 ? void 0 : _curString$match2.map(s => s.replace('<b class="miniclick">', "").replace("</b>", ""))) !== null && _curString$match$map2 !== void 0 ? _curString$match$map2 : ["unknown mini"])[0];
    var miniID = activeMinisSorted.indexOf(activeMinisSorted.reduce((a, b) => Qe(a, mini) > Qe(b, mini) ? a : b));

    if (curString.includes("A tie-breaker")) {
      if (verbose) (0,external_kolmafia_namespaceObject.print)("We tied the mini: ".concat(mini), "blue");
    } else {
      var weWon = false;
      if (curString.includes('<td width="80"></td></tr>')) weWon = true;

      if (weWon) {
        if (verbose) (0,external_kolmafia_namespaceObject.print)("We won the mini: ".concat(mini), "green");
        _set("myCurrentPVPWins_".concat(miniID), property_get("myCurrentPVPWins_".concat(miniID), 0) + 1);
      } else {
        if (verbose) (0,external_kolmafia_namespaceObject.print)("We lost the mini: ".concat(mini), "red");
        _set("myCurrentPVPLosses_".concat(miniID), property_get("myCurrentPVPLosses_".concat(miniID), 0) + 1);
      } // updateExpBandits(miniID, weWon);

    }

    slicedResult = slicedResult.slice(splitIdx);
  };

  while (slicedResult.includes("Round ")) {
    _loop2();
  }

  return slicedResult.includes(whoAmI);
}
function parseResult(result) {
  var _result$match$filter$, _result$match;

  var whoAreWe = (_result$match$filter$ = (_result$match = result.match(RegExp(/<a(.*?)showplayer(.*?)>(.*?)<\/a>(.*?)showplayer(.*?)>(.*?)<\/a>/))) === null || _result$match === void 0 ? void 0 : _result$match.filter((s, i) => [3, 6].includes(i)).map(s => s.replace("<b>", "").replace("</b>", ""))) !== null && _result$match$filter$ !== void 0 ? _result$match$filter$ : [];
  var whoAmI = whoAreWe[0],
      whoAreThey = whoAreWe[1];
  var slicedResult = result.slice(result.indexOf(whoAmI));

  if (slicedResult.includes("Wins!")) {
    slicedResult = slicedResult.slice(0, slicedResult.indexOf("Wins!") + 4);
  } else {
    slicedResult = slicedResult.slice(slicedResult.indexOf("Round ") + 5, slicedResult.indexOf("the fight,") + 9);
  } // Vanilla KoL has a comact mode for PVP, which returns different html results


  var compactMode = slicedResult.includes("td nowrap");
  var wonFight = compactMode ? parseCompactMode(slicedResult, whoAreWe) : parseNonCompactMode(slicedResult, whoAreWe);
  if (wonFight) (0,external_kolmafia_namespaceObject.print)("We beat ".concat(whoAreThey, "!"), "green");else (0,external_kolmafia_namespaceObject.print)("".concat(whoAreThey, " beat us!"), "red");
  return wonFight;
}
;// CONCATENATED MODULE: ./src/main.ts






function main() {
  var argstring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  Args.fill(args, argstring);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  breakStone();
  useMeteoriteade();
  useDiploma();
  usePunchingMirror();
  updateSeason();
  updateWinRate();
  var todaysWins = property_get("todaysPVPWins", 0),
      todaysLosses = property_get("todaysPVPLosses", 0);

  if ((0,external_kolmafia_namespaceObject.pvpAttacksLeft)() > 0) {
    initializeSortedPvpIDs();
    var attackType = args.target === "loot" ? "lootwhatever" : args.target;
    equipPVPOutfit();
    _set("logPreferenceChange", false);

    while ((0,external_kolmafia_namespaceObject.pvpAttacksLeft)() > 0) {
      if (args.debug) printStrategiesEstimates();
      var result = pvpAttack(attackType);

      if (result.includes("Sorry, I couldn't find the player")) {
        (0,external_kolmafia_namespaceObject.print)("Could not find anyone to fight!", "red");
        break;
      }

      parseResult(result) ? _set("todaysPVPWins", todaysWins += 1) : _set("todaysPVPLosses", todaysLosses += 1);
    }

    _set("logPreferenceChange", prefChangeSettings);
  } else {
    (0,external_kolmafia_namespaceObject.print)("Out of PVP fights", "red");
  }

  printStats();
  (0,external_kolmafia_namespaceObject.visitUrl)("peevpee.php?place=shop"); // update season swagger

  (0,external_kolmafia_namespaceObject.print)("");

  if (todaysWins + todaysLosses > 0) {
    (0,external_kolmafia_namespaceObject.print)("This session's win rate: ".concat(todaysWins, "/").concat(todaysWins + todaysLosses, " (").concat(Math.round(1000 * todaysWins / (todaysWins + todaysLosses)) / 10, "%)"), "blue");
  }
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;