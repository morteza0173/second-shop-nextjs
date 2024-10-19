import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

const vazirmatin = Vazirmatn({ subsets: ["arabic"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "فروشگاه برتر",
  description: "فروشگاه با کلی لوازم متنوع",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localization = {
    formButtonPrimary: "ادامه",
    formFieldLabel__password: "پسورد",
    formFieldLabel__emailAddress: "آدرس ایمیل",
    dividerText: "یا",
    socialButtonsBlockButton: "ورود با گوگل",
    signUp: {
      start: {
        title: "حساب خوب را بسازید",
        subtitle: "تا بتوانید محصولی را خریداری کنید",
        actionText: "حسابی در سایت دارید ؟",
        actionLink: "ورود",
        formButtonPrimary: "ثبت نام",
      },
    },
    signIn: {
      start: {
        actionLink: "ثبت نام",
        actionLink__use_email: "Use email",
        actionLink__use_email_username: "Use email or username",
        actionLink__use_passkey: "Use passkey instead",
        actionLink__use_phone: "Use phone",
        actionLink__use_username: "Use username",
        actionText: "حسابی در سایت ندارید ؟",
        subtitle: "خوش آمدید برای استفاده از خدمات وارد شوید",
        title: "ورود به فروشگاه",
      },
    },
  };

  return (
    <ClerkProvider localization={localization}>
      <html lang="en" dir="rtl" suppressHydrationWarning>
        <body className={`${vazirmatin.className}  antialiased`}>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
