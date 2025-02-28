export function formatDate(dateTime: Date | string) {
  const date = typeof dateTime === "string" ? new Date(dateTime) : dateTime;
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}
