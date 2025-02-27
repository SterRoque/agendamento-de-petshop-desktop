export function classifyTime(dateTime: Date | string) {
  const date = typeof dateTime === "string" ? new Date(dateTime) : dateTime;
  const hours = date.getHours();

  if (hours >= 9 && hours <= 12) {
    return "Manhã";
  } else if (hours >= 13 && hours <= 18) {
    return "Tarde";
  } else {
    return "Noite";
  }
}
