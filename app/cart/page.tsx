import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);
  if (currentCart.numItemsInCart === 0) {
    return <SectionTitle text="سبد خرید خالی است" />;
  }

  return (
    <>
      <SectionTitle text="سبد خرید" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4 lg:pr-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
export default CartPage;
