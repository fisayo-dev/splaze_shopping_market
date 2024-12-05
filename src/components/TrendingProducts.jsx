import { FaNairaSign } from "react-icons/fa6";
import landing_social_media from "../assets/app_images/landing_social_media.png";

const TrendingProducts = () => {
  return (
    <div className="sticky top-0">
      <div className="py-2 bg-white">
        <div className="container mx-auto md:px-16 px-5">
          <h2 className="text-3xl font-bold">Top Purchases 🔥🔥🔥</h2>
          <div className="grid mt-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
              <div className="rounded-2xl hover:scale-105 transition hover:shadow-md  app-gray-color hover-dark-app-gray-color bg-yellow-200">
                <img src={landing_social_media} alt="" />
                <div className="grid gap-1 py-5 px-4">
                  <h2 className="text-[1.3rem] font-bold">Oraimo Head Buds</h2>
                  <div className="flex items-center gap-1">
                    <FaNairaSign />
                    <p>35,000.00</p>
                  </div>
                  <p className="text-sm">42 items left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
