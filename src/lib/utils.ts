import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  // Parse DD-MM-YYYY format manually
  const parts = date.split("-");
  if (parts.length !== 3) return "Invalid Date";

  const [dd, mm, yyyy] = parts.map(Number);

  // Note: JavaScript months are 0-based (0 = Jan)
  const targetDateObj = new Date(yyyy, mm - 1, dd);

  if (isNaN(targetDateObj.getTime())) {
    return "Invalid Date";
  }

  const currentDate = new Date();
  const timeDifference = Math.abs(currentDate.getTime() - targetDateObj.getTime());
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const day = targetDateObj.getDate();
  const month = targetDateObj.toLocaleString("en-uk", { month: "long" });
  const year = targetDateObj.getFullYear();

  const fullDate = `${day} ${month} ${year}`;

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

