var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {value: raw});
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
import _css from "./css";
export default (function(breakpoints, key) {
  return function(strings) {
    var interpolations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      interpolations[_i - 1] = arguments[_i];
    }
    var minWidth = breakpoints[key];
    var mediaBody = _css.apply(void 0, [strings].concat(interpolations));
    if (minWidth && mediaBody.match(/\S/g)) {
      return _css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        @media (min-width: ",
              "px) {\n          ",
              "\n        }\n      ",
            ],
            [
              "\n        @media (min-width: ",
              "px) {\n          ",
              "\n        }\n      ",
            ],
          )),
        minWidth,
        mediaBody,
      );
    }
    return mediaBody;
  };
});
var templateObject_1;
//# sourceMappingURL=resolve.js.map
