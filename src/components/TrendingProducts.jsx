import { FaNairaSign } from "react-icons/fa6";

const TrendingProducts = () => {
  return (
    <div className="sticky top-0">
      <div className="py-2 bg-white">
        <div className="container mx-auto md:px-16 px-5">
          <h2 className="text-3xl font-bold">Top Purchases 🔥🔥🔥</h2>
          <div className="grid mt-10">
            <div className="grid grid-cols-4 gap-3">
              <div className="p-5 rounded-2xl  bg-yellow-200">
                <img src="" alt="" />
                <h2 className="text-[1.3rem] font-bold">Oraimo Head Buds</h2>
                <div className="flex items-center gap-1">
                  <FaNairaSign />
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
