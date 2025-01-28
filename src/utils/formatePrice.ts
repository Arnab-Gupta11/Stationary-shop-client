export const formatPrice = (price: number | string) => {
  // Convert the input to a number and fix to 2 decimal places
  const formattedPrice = Number(price).toFixed(2);
  // Add a dollar sign and commas for thousands
  return `Tk ${parseFloat(formattedPrice).toLocaleString()}`;
};
