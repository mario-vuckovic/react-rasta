import { ClassAttributes, HTMLAttributes } from "react";
import { StyledComponentClass } from "styled-components";
import { Theme } from "../theme";
import "../utils/bootstrap";
import ContainerProperties from "./ContainerProperties";
declare const Container: StyledComponentClass<
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    ContainerProperties,
  Theme,
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    ContainerProperties
>;
export default Container;
