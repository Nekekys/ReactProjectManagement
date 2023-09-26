export const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (!date) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  return day + " " + month;
};
export const colorsList = [
  "#a8193d",
  "#4fcc25",
  "#1ebffa",
  "#8da377",
  "#9975bd",
  "#cf61a1",
  "#240959",
];

export const getNumberOfDays = (start) => {
  const date1 = new Date(start);
  const currentDate = new Date()
  const date2 = new Date(currentDate.toISOString().split('T')[0]);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}
