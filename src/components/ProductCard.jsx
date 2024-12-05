import { FaNairaSign } from "react-icons/fa6";
import landing_social_media from "../assets/app_images/landing_social_media.png";

const ProductCard = ({ title, price, quantityLeft }) => {
    
    const formatPrice = (price) => {
        const text = '150000'
        const arrayedText = Array.from(text)
        console.log(arrayedText)

        
        console.log(arrayedText)
    }



    formatPrice()
  return (
    <div className="rounded-2xl hover:scale-105 transition hover:shadow-md cursor-pointer app-gray-color hover-dark-app-gray-color bg-yellow-200">
      <img src={landing_social_media} alt="" />
      <div className="grid gap-1 py-5 px-4">
        <h2 className="text-[1.3rem] font-bold">{title}</h2>
        <div className="flex items-center gap-1">
          <FaNairaSign />
          <p>{price}</p>
        </div>
        <p className="text-sm">{quantityLeft} items left</p>
      </div>
    </div>
  );
};

export default ProductCard;
