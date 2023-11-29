export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
  })
    .format(value)
    .replace("ZAR", "R");
};
