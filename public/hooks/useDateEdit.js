export const useDateEdit = (utcTimestamp) => {
  /* expected: 6월 14일 (수) 오전 5:57 */
  if (!utcTimestamp) return;
  const publishDate = utcTimestamp.split("T")[0].split("-");

  const date = new Date(utcTimestamp);
  const daysOfWeek = {
    Mon: "월",
    Tue: "화",
    Wed: "수",
    Thu: "목",
    Fri: "금",
    Sat: "토",
    Sun: "일",
  };
  const dayOfWeek = date.toString().split(" ")[0];

  const pusblishTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    publishDate[1] / 1 +
    "월 " +
    publishDate[2] / 1 +
    "일 " +
    `(${daysOfWeek[dayOfWeek]}) ` + //요일
    pusblishTime //분
  );
};
