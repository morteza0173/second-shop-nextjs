type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/about", label: "درباره ی ما" },
  { href: "/products", label: "محصولات" },
  { href: "/favorites", label: "علاقه مندی ها" },
  { href: "/cart", label: "سبد خرید" },
  { href: "/orders", label: "سفارشات" },
  { href: "/admin/sales", label: "پنل مدیریت" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "مدیریت فروش ها" },
  { href: "/admin/products", label: "محصولات من" },
  { href: "/admin/products/create", label: "افزودن محصول جدید" },
];
