import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorite } from "@/utils/action";

async function FavoritesPage() {
  const favorites = await fetchUserFavorite();
  if (favorites.length === 0)
    return <SectionTitle text="محصول پسندیده ای این بخش وجود ندارد" />;

  return (
    <div>
      <SectionTitle text="پسندیده ها" />
      <ProductsGrid
        products={favorites.map((favorites) => favorites.product)}
      />
    </div>
  );
}
export default FavoritesPage;
