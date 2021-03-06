declare const renderOrder: (
  order?:
    | 0
    | 4
    | 3
    | 2
    | 1
    | 7
    | 6
    | 5
    | 10
    | 9
    | 8
    | "first"
    | "last"
    | 13
    | 12
    | 11
    | undefined
) => string;
export default renderOrder;
