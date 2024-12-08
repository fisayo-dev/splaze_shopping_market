import { Book, Copyright, Electricity, Heart } from "iconsax-react";
import Logo from "./Logo";
import { PiDress } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa6";
import { CiFootball } from "react-icons/ci";
import { BuildingStorefrontIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
const StoreSideBar = () => {
  return (
    <div className="bg-yellow-300 h-[100vh]">
      <div className="p-8">
        <div className="grid gap-10">
          <Logo />
          <div className="grid gap-2">
            <Link to="/store" className="bg-white shadow-sm rounded-xl px-4 cursor-pointer py-3">
              <div className="flex items-center gap-2">
                <ViewColumnsIcon className="h-6 w-6" />
                <p>All</p>
              </div>
            </Link>
            <Link to="/store/electronics" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Electricity className="h-6 w-6" />
                <p>Electronics</p>
              </div>
            </Link>
            <Link to="/store/fashion" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <PiDress className="h-6 w-6" />
                <p>Fashion</p>
              </div>
            </Link>
            <Link to="/store/home-and-kitchen" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <BuildingStorefrontIcon className="h-6 w-6" />
                <p>Home and Kitchen</p>
              </div>
            </Link>
            <Link to="/store/health-and-beauty" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <p>Health and Beauty</p>
              </div>
            </Link>
            <Link to="/store/sports-and-outdoors" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <CiFootball className="h-6 w-6" />
                <p>Sports and Outdoors</p>
              </div>
            </Link>
            <Link to="/store/books" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Book className="h-6 w-6" />
                <p>Books</p>
              </div>
            </Link>
            <Link to="/store/gadgets-and-devices" className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 cursor-pointer rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <FaLaptop className="h-6 w-6" />
                <p>Gadgets and Devices</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Copyright className="h-6 w-6" />
            <p>Copyright 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSideBar;
