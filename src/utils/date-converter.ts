//Convert UTC date to local date format

export function convertUtcDateToLocal(utcDateString: string): string {
  const utcDate = new Date(utcDateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = dateFormatter.format(utcDate);
  return formattedDate;
}
