export default function renderOrder(size) {
  if (size != null && size > 0 && size < 13) {
    return (size / 12 * 100).toFixed(6);
  }
  return "0";
}
//# sourceMappingURL=percentage.js.map
