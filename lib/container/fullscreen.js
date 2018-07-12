var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
import { injectGlobal } from "../theme/StyledComponents";
var applied = false;
export default (function() {
  if (!applied) {
    // tslint:disable-next-line:no-unused-expression
    injectGlobal(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          [
            "\n      html,\n      body,\n      body > div {\n        height: 100% !important;\n        margin: 0 !important;\n        padding: 0 !important;\n      }\n    "
          ],
          [
            "\n      html,\n      body,\n      body > div {\n        height: 100% !important;\n        margin: 0 !important;\n        padding: 0 !important;\n      }\n    "
          ]
        ))
    );
    applied = true;
  }
});
var templateObject_1;
//# sourceMappingURL=fullscreen.js.map
