export const formatViews = (view) => {
  const num = Number(view);
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000_000).toFixed(1) + "k";
  if (num < 1_000) return num;
  return num;
};

export function timeAgo(publisheaAt) {
  const now = new Date();
  const publishedDate = new Date(publisheaAt);
  const seconds = Math.floor((now - publishedDate) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0)
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

export function formatDuration(isoDuration) {
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (match[1] || "").replace("H", "") || 0;
  const minutes = (match[2] || "").replace("M", "") || 0;
  const seconds = (match[3] || "").replace("S", "") || 0;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}
