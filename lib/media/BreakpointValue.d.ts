import BreakpointValues from "./BreakpointValues";
import PropertyValue from "./PropertyValue";
declare type BreakpointValue<TValue extends PropertyValue> =
  | TValue
  | BreakpointValues<TValue>;
export default BreakpointValue;
