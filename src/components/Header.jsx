import {
  Bars3BottomRightIcon,
  GlobeEuropeAfricaIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SearchNormal, SearchNormal1, User } from "iconsax-react";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Header = () => {
  const [user, setUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="sticky top-0 ">
      <div className="py-6 bg-transparent backdrop-blur-md ">
        <div className="container mx-auto flex items-center justify-between gap-20 2xl:px-16 md:px-10 px-5 w-full overflow-hidden">
          <Logo />
          <div className="hidden lg:flex overflow-hidden search-input-behaviour w-full rounded-full px-3 py-2">
            {/* <div className="flex px-4 items-center justify-center">
              <select className="flex text-center cursor-pointer" id="">
                <option>All</option>
                <option>Fashion</option>
                <option>Electronics</option>
                <option>Home & Kitchen</option>
                <option>Health & Beauty</option>
                <option>Sports & Outdoors</option>
              </select>
            </div> */}
            <input
              type="text"
              placeholder="Search for products, brand and categories"
              className="text-slate-500 px-4 w-full text-left"
            />
            <div className="px-5 py-3 rounded-full cursor-pointer bg-yellow-400 hover:bg-yellow-300">
              <SearchNormal className="w-6 h-6 " />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            {user && (
              <>
                <div className="flex items-center gap-2">
                  <GlobeEuropeAfricaIcon className="w-6 h-6" />
                  <p className="">ENG</p>
                </div>
                <User className="w-6 h-6 " />
              </>
            )}
            <div className="cursor-pointer p-2 rounded-full hover:bg-gray-200 flex lg:hidden items-center">
              <SearchNormal1 className="h-7 w-7" />
            </div>
            <div className="rounded-full cursor-pointer hover:bg-yellow-400 bg-yellow-300 p-3">
              <ShoppingCartIcon className="h-6 w-6 text-black" />
            </div>
            {!user && (
              <div className="hidden sm:flex items-center gap-1">
                <button className="px-4 py-3 rounded-full border-2 border-black  hover:bg-black hover:text-white">
                  Signup
                </button>
                <button className="px-4 py-3 rounded-full bg-black text-white">
                  Login
                </button>
              </div>
            )}
            {menuOpen && (
              <Bars3BottomRightIcon className="grid sm:hidden h-9 w-9 cursor-pointer " />
            )}
          </div>
        </div>
      </div>

      <div className="grid place-items-center items-center justify-center fixed top-0 h-[100vh] bg-white p-5 w-full opacity-95 shadow-md">
        <div className="grid gap-5">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <div className="grid items-center gap-2">
            <button className="px-4 py-3 rounded-full border-2 border-black  hover:bg-black hover:text-white">
              Signup
            </button>
            <button className="px-4 py-3 rounded-full bg-black text-white">
              Login
            </button>
          </div>
          <div className="flex fixed top-[3%] right-[5%] items-center">
            <XMarkIcon className="w-8 h-8"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
