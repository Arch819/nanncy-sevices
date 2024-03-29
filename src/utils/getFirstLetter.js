export default function getFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return null;
  }
  return str[0];
}
