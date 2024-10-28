import { fetchProductRating } from "@/utils/action";
import { FaStar } from "react-icons/fa";

async function ProductRating({ productId }: { productId: string }) {
  const { count, rating } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4 font-bold`;
  const countValue = `(${count}) نظر`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3 mb-1" />
      {rating} {countValue}
    </span>
  );
}
export default ProductRating;
