import { LuLayoutGrid, LuList } from "react-icons/lu";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { fetchAllProducts } from "@/utils/action";
import Link from "next/link";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerms = search ? `&search=${search}` : "";

  return (
    <>
      {/* header */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts > 0
              ? `${totalProducts} محصول یافت شد`
              : `هیچ محصولی یافت نشد`}
          </h4>
          <div className="flex gap-x-4 ">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerms}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerms}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Separator className="mt-4" />
      {/* products */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            متاسفانه نتوانستیم محصولی پیدا کنیم ...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;
