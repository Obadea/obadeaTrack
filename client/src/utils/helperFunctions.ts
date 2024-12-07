export const formatToNaira = (amount: number) => {
  if (isNaN(amount)) {
    throw new Error("Input must be a valid number");
  }
  // Convert to a currency format
  return (
    "₦" +
    Number(amount).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};
