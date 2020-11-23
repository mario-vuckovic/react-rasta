var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
import { css } from "../theme/StyledComponents";
import flatten from "./flatten";
export default (function(strings) {
  var interpolations = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    interpolations[_i - 1] = arguments[_i];
  }
  return flatten(css.apply(void 0, __spreadArrays([strings], interpolations)));
});
//# sourceMappingURL=css.js.map
