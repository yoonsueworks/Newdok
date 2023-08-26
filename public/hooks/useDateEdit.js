export const useDateEdit = (utcTimestamp) => {
  /* expected: 6월 14일 (수) 오전 5:57 */
  if (!utcTimestamp) return;
  const publishDate = utcTimestamp.split("T")[0].split("-");
  const publishTime = utcTimestamp.split("T")[1].split(":");

  const date = new Date(utcTimestamp);
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const morNoonTime = publishTime[1] / 1 - 12;
  const morNoon = morNoonTime < 0 ? "오전 " : "오후 ";
  return (
    publishDate[1] / 1 +
    "월 " +
    publishDate[2] / 1 +
    "일 " +
    `(${dayOfWeek})` +
    morNoon +
    morNoonTime +
    ":" +
    publishTime[1] / 1
  );
};
