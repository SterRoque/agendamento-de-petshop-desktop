export function convertInDateTime(date: string, time: string) {
  if (!date || !time) return "";

  return `${date}T${time}`;
}
