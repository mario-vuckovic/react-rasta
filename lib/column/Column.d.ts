import { ClassAttributes, HTMLAttributes } from "react";
import { StyledComponentClass } from "styled-components";
import { Theme } from "../theme";
import "../utils/bootstrap";
import ColumnProperties from "./ColumnProperties";
declare const Column: StyledComponentClass<
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    ColumnProperties,
  Theme,
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    ColumnProperties
>;
export default Column;
