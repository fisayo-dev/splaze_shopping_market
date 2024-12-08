import { Book, Copyright, Electricity, Heart } from "iconsax-react";
import Logo from "./Logo";
import { PiDress } from "react-icons/pi";
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
            <div className="bg-white shadow-sm rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <ViewColumnsIcon className="h-6 w-6" />
                <p>All</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Electricity className="h-6 w-6" />
                <p>Electronics</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <PiDress className="h-6 w-6" />
                <p>Fashion</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <BuildingStorefrontIcon className="h-6 w-6" />
                <p>Home and Kitchen</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <p>Health and Beauty</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <CiFootball className="h-6 w-6" />
                <p>Sports and Outdoors</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Book className="h-6 w-6" />
                <p>Books</p>
              </div>
            </div>
            <div className="bg-yellow-200 hover:bg-white hover:bg-opacity-65 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <FaLaptop className="h-6 w-6" />
                <p>Gadgets and Devices</p>
              </div>
            </div>
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
