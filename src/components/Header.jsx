import {
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { SearchNormal, User } from "iconsax-react";
const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="py-6 ">
        <div className="container mx-auto flex items-center justify-between gap-20 md:px-16 px-5">
          <div className="flex text-black items-center gap-2">
            <ShoppingCartIcon className="w-10 h-10" />
            <h2 className="text-2xl font-bold">Splaze</h2>
          </div>
          <div className="hidden md:flex overflow-hidden search-input-behaviour w-full rounded-full px-3 py-2">
            <div className="flex px-4 items-center justify-center">
              <select className="flex text-center cursor-pointer" id="">
                <option>All</option>
                <option>Products</option>
                <option>Electronics</option>
                <option>Gadgets</option>
                <option>Commodities</option>
                <option>Food Stuffs</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search for products, brand and categories"
              className="text-slate-500 pr-4  w-full text-left"
            />
            <div className="px-5 py-3 rounded-full cursor-pointer bg-yellow-400 hover:bg-yellow-300">
              <SearchNormal className="w-6 h-6 " />
            </div>
          </div>
          <div className="flex items-center space-x-6">
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
