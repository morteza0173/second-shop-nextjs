import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl sm:text-6xl sm:leading-normal">
          تجربه‌ای جدید از خرید آنلاین!
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-8">
          به فروشگاه ما خوش آمدید! ما به شما بهترین و باکیفیت‌ترین محصولات را با
          قیمت‌های مناسب ارائه می‌دهیم. از لباس و لوازم جانبی تا محصولات
          الکترونیکی، همه چیز در یک مکان برای شما آماده است. با اطمینان خرید
          کنید و از خدمات مشتریان ما بهره‌مند شوید.
        </p>
        <Button asChild size="lg" className="mt-10 w-full py-4">
          <Link href="/products">مشاهده تمام محصولات</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
