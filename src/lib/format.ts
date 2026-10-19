const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
export const money = (n: number) => `₹${inr.format(Math.round(n))}`;
export const shortDate = (d = new Date()) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
export const longDate = (d = new Date()) => d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short" });
