import { FaNairaSign } from "react-icons/fa6";
import landing_social_media from "../assets/app_images/landing_social_media.png";

const ProductCard = ({ title, price, quantityLeft }) => {
  function formatPrice(price) {
    // Convert the number to a string and use regex to add commas
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="rounded-2xl transition hover:shadow-md cursor-pointer app-gray-color hover-dark-app-gray-color bg-yellow-200">
      <img src={landing_social_media} alt="" />
      <div className="grid gap-1 py-5 px-4">
        <h2 className="text-[1.2rem] font-bold">{title}</h2>
        <div className="flex items-center gap-1">
          <FaNairaSign />
          <p className="text-[0.9rem]">{formatPrice(price)}</p>
        </div>
        <p className="text-[0.85rem]">
          {quantityLeft} {quantityLeft > 1 ? "items" : "item"} left
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
