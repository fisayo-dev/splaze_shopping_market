import { FaNairaSign } from "react-icons/fa6";
import landing_social_media from "../assets/app_images/landing_social_media.png";
import ProductCard from "./ProductCard";

const TrendingProducts = () => {
  return (
    <div className="sticky top-0">
      <div className="py-2 bg-white">
        <div className="container mx-auto md:px-16 px-5">
          <h2 className="text-3xl font-bold">Top Purchases 🔥🔥🔥</h2>
          <div className="grid mt-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
              <ProductCard title="Macbook 16 pro" price="1500000" quantityLeft={50}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
