import {
  GlobeEuropeAfricaIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { SearchNormal, User } from "iconsax-react";
const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="py-6">
        <div className="container flex items-center gap-20 md:px-20 px-5">
          <div className="flex text-black items-center gap-2">
            <ShoppingCartIcon className="w-7 h-7" />
            <h2 className="text-2xl font-bold">Splaze</h2>
          </div>
          <div className="flex px-5 py-3 space-x-4 border-2 w-full rounded-2xl">
            <SearchNormal />
            <input
              type="text"
              placeholder="Search for products, brand and categories"
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-7">
            <div className="flex items-center gap-2">
              <GlobeEuropeAfricaIcon className="w-6 h-6" />
              <p className="">ENG</p>
            </div>
            <User className="w-6 h-6 " />
            <div className="rounded-full cursor-pointer hover:bg-yellow-400 bg-yellow-300 p-3">
              <ShoppingCartIcon className="h-6 w-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
