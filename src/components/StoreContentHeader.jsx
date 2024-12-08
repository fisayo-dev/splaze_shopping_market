import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Book, Electricity, Filter, Heart, SearchNormal } from "iconsax-react";
import { PiDress } from "react-icons/pi";
import { FaLaptop } from "react-icons/fa6";
import { CiFootball } from "react-icons/ci";
import {
  BuildingStorefrontIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const StoreContentHeader = ({ category }) => {
  const linkStatus = ({ isActive }) =>
    isActive
      ? "w-full bg-yellow-300 shadow-sm rounded-xl px-4 cursor-pointer py-3"
      : "w-full bg-white hover:bg-gray-200 cursor-pointer rounded-xl px-4 py-3";

  const listOfCategories = [
    "all",
    "electronics",
    "fashion",
    "home-and-kitchen",
    "health-and-beauty",
    "sports-and-outdoors",
    "books",
    "gadgets-and-devices",
  ];
  const listOfCategoryIcons = [
    <ViewColumnsIcon className="h-6 w-6 text-slate-700" />,
    <Electricity className="h-6 w-6 text-slate-700" />,
    <PiDress className="h-6 w-6 text-slate-700" />,
    <BuildingStorefrontIcon className="h-6 w-6 text-slate-700" />,
    <Heart className="h-6 w-6 text-slate-700" />,
    <CiFootball className="h-6 w-6 text-slate-700" />,
    <Book className="h-6 w-6 text-slate-700" />,
    <FaLaptop className="h-6 w-6 text-slate-700" />,
  ];

  return (
    <div className="grid">
      <div className="flex justify-stretch md:justify-between items-center gap-10">
        <div className="w-full flex items-center gap-2">
          <div className="grid md:hidden px-2 py-3 text-slate-700 hover:text-black cursor-pointer">
            <Filter className="h-6 w-6" />
          </div>
          <div className="flex text-[0.95rem] md:text-[1rem] overflow-hidden search-input-behaviour w-full rounded-full px-2 py-1 md:px-3 md:py-2">
            <div className="px-2 py-3">
              {listOfCategories.map((item, index) => {
                if (item == category) {
                  return listOfCategoryIcons[index];
                }
              })}
            </div>

            <input
              type="text"
              placeholder="Search Splaze"
              className="text-slate-500 px-1 md:px-4 w-full text-left"
            />
            <div className="px-5 py-3 rounded-full cursor-pointer bg-yellow-400 hover:bg-yellow-300">
              <SearchNormal className="w-6 h-6 " />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full cursor-pointer hover:bg-yellow-400 bg-yellow-300 p-3">
            <ShoppingCartIcon className="h-6 w-6 text-black" />
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <Link to="/signup">
              <button className="px-4 py-3 rounded-full border-2 border-black  hover:bg-black hover:text-white">
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-3 rounded-full bg-black text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-category-list overflow-x-scroll py-3 w-full flex md:hidden gap-3 items-center">
        <NavLink to="/store/all" className={linkStatus}>
          <div className="flex items-center gap-2">
            <ViewColumnsIcon className="h-6 w-6" />
            <p className="w-full">All</p>
          </div>
        </NavLink>
        <NavLink to="/store/electronics" className={linkStatus}>
          <div className="flex items-center gap-2">
            <Electricity className="h-6 w-6" />
            <p className="w-full">Electronics</p>
          </div>
        </NavLink>
        <NavLink to="/store/fashion" className={linkStatus}>
          <div className="flex items-center gap-2">
            <PiDress className="h-6 w-6" />
            <p className="w-full">Fashion</p>
          </div>
        </NavLink>
        <NavLink to="/store/home-and-kitchen" className={linkStatus}>
          <div className="flex items-center gap-2">
            <BuildingStorefrontIcon className="h-6 w-6" />
            <p className="w-full">Home and Kitchen</p>
          </div>
        </NavLink>
        <NavLink to="/store/health-and-beauty" className={linkStatus}>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <p className="w-full">Health and Beauty</p>
          </div>
        </NavLink>
        <NavLink to="/store/sports-and-outdoors" className={linkStatus}>
          <div className="flex items-center gap-2">
            <CiFootball className="h-6 w-6" />
            <p className="w-full">Sports and Outdoors</p>
          </div>
        </NavLink>
        <NavLink to="/store/books" className={linkStatus}>
          <div className="flex items-center gap-2">
            <Book className="h-6 w-6" />
            <p className="w-full">Books</p>
          </div>
        </NavLink>
        <NavLink to="/store/gadgets-and-devices" className={linkStatus}>
          <div className="flex items-center gap-2">
            <FaLaptop className="h-6 w-6" />
            <p className="w-full">Gadgets and Devices</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default StoreContentHeader;
