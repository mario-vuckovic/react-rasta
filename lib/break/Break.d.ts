import {ClassAttributes, HTMLAttributes} from "react";
import {StyledComponentClass} from "styled-components";
import {Theme} from "../theme";
import "../utils/bootstrap";
declare const Break: StyledComponentClass<
  ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>,
  Theme,
  ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>
>;
export default Break;
