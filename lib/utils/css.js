import {css} from "../theme/StyledComponents";
import flatten from "./flatten";
export default (function(strings) {
  var interpolations = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    interpolations[_i - 1] = arguments[_i];
  }
  return flatten(css.apply(void 0, [strings].concat(interpolations)));
});
//# sourceMappingURL=css.js.map
