import { StoreSideBar } from "../../components";
import { Electricity, SearchNormal } from "iconsax-react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const HealthAndBeauty = () => {
  return (
    <div className="store-sidebar-grid h-[100vh] overflow-hidden">
    <StoreSideBar />
    <div className="p-6 overflow-y-scroll overflow-x-hidden">
      <div className="grid">
        <div className="flex justify-between items-center gap-10">
          <div className="hidden lg:flex overflow-hidden search-input-behaviour w-full rounded-full px-3 py-2">
            <div className="px-2 py-3">
              <Electricity />
            </div>
            <input
              type="text"
              placeholder="Search Splaze"
              className="text-slate-500 px-4 w-full text-left"
            />
            <div className="px-5 py-3 rounded-full cursor-pointer bg-yellow-400 hover:bg-yellow-300">
              <SearchNormal className="w-6 h-6 " />
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
      </div>
    </div>
  </div>
  )
}

export default HealthAndBeauty