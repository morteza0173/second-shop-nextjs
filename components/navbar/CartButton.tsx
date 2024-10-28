import Link from "next/link";
import { Button } from "../ui/button";
import { FaBasketShopping } from "react-icons/fa6";
import { fetchCartItems } from "@/utils/action";

async function CartButton() {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <FaBasketShopping />
        <span className="absolute -top-3 -left-3 h-6 w-6 bg-primary rounded-full text-white flex items-center justify-center text-xs ">
          <span className="mt-1">{numItemsInCart}</span>
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
