export const formatPrice = (price: number | string) => {
  const priceToNumber = Number(price);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(priceToNumber);
};
