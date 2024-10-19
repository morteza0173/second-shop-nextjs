export const formatCurrencyIr = (amount: number | null) => {
  const value = amount || 0;

  // تبدیل عدد به رشته و افزودن "تومان" در انتها
  return new Intl.NumberFormat("fa-IR").format(value) + " تومان";
};

export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
