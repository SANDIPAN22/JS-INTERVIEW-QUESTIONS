// Gap between two dates

const fun = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diff = Math.abs(date2 - date1);

  // transforming it to days
  return diff / (1000 * 60 * 60 * 24);
};

console.log(fun("2025-01-01", "2026-01-01"));
