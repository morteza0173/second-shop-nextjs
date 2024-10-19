import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
    console.log(productId);
    
  return (
    <Button className="mt-8" size="lg">
      افزودن به سبد خرید
    </Button>
  );
}
export default AddToCart;