export default function reverse(str) {
  if (str === "") return str;
  const lastIdx = str.length - 1;
  return str[lastIdx] + reverse(str.slice(0, lastIdx));
}



