export default function Capitalize(input: string) {
  if (!input) {
    return input;
  }
  const firstLetter = input.charAt(0).toUpperCase();
  const remainLetter = input.slice(1);
  return firstLetter + remainLetter;
}
