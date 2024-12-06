import ProductCard from "./ProductCard";
import products from "./products";

const TrendingProducts = () => {
  return (
    <div className="top-0">
      <div className="py-2 bg-white">
        <div className="container mx-auto md:px-16 px-5">
          <h2 className="text-3xl font-bold">Trending Products 🔥🔥</h2>
          <div className="grid mt-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
              {products.map((product, index) => (
                <>
                  <ProductCard
                    key={index}
                    title={product.title}
                    price={product.price}
                    quantityLeft={product.quantity}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
