export const getYear = () => {
  const date = new Date();

  const year = date.getFullYear();
  return year;
};
