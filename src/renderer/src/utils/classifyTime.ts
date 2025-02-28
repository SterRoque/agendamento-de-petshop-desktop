export function classifyTime(
  dateTime: Date | string
): "morning" | "afternoon" | "night" {
  const date = typeof dateTime === "string" ? new Date(dateTime) : dateTime;
  const hours = date.getHours();

  if (hours >= 9 && hours <= 12) {
    return "morning";
  } else if (hours >= 13 && hours <= 18) {
    return "afternoon";
  } else {
    return "night";
  }
}
