import {ClassAttributes, HTMLAttributes} from "react";
import {StyledComponentClass} from "styled-components";
import {Theme} from "../theme";
import "../utils/bootstrap";
import RowProperties from "./RowProperties";
declare const Row: StyledComponentClass<
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    RowProperties,
  Theme,
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    RowProperties
>;
export default Row;
