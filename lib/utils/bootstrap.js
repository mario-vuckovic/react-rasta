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
var initialized = false;
function bootstrap() {
  if (!initialized) {
    // tslint:disable-next-line:no-unused-expression
    injectGlobal(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          [
            "\n      @-ms-viewport {\n        width: device-width;\n      }\n\n      html {\n        box-sizing: border-box;\n        -ms-overflow-style: scrollbar;\n      }\n\n      *,\n      *::before,\n      *::after {\n        box-sizing: inherit;\n      }\n    "
          ],
          [
            "\n      @-ms-viewport {\n        width: device-width;\n      }\n\n      html {\n        box-sizing: border-box;\n        -ms-overflow-style: scrollbar;\n      }\n\n      *,\n      *::before,\n      *::after {\n        box-sizing: inherit;\n      }\n    "
          ]
        ))
    );
    initialized = true;
  }
}
bootstrap();
var templateObject_1;
//# sourceMappingURL=bootstrap.js.map
