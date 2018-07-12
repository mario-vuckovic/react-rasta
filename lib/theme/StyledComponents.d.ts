import {ComponentClass} from "react";
import * as styledComponents from "styled-components";
import Theme from "./Theme";
declare const styled: styledComponents.ThemedBaseStyledInterface<Theme>,
  css: styledComponents.ThemedCssFunction<Theme>,
  injectGlobal: (
    strings: TemplateStringsArray,
    ...interpolations: styledComponents.SimpleInterpolation[]
  ) => void,
  keyframes: (
    strings: TemplateStringsArray,
    ...interpolations: styledComponents.SimpleInterpolation[]
  ) => string,
  ThemeProvider: ComponentClass<styledComponents.ThemeProviderProps<Theme>>;
export default styled;
export {css, injectGlobal, keyframes, ThemeProvider};
