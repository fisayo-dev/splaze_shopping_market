import landing_social_media from "../assets/app_images/landing_social_media.png";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container mx-auto 2xl:px-16 md:px-10 px-5">
          <div className="grid md:flex gap-5 md:justify-between items-center">
            <div className="grid gap-4 md:text-left md:place-items-start place-items-center text-center">
              <h2 className="lg:text-5xl text-4xl capitalize font-bold">
                Your All-in-one online store.
              </h2>
              <p className="text-[0.82rem] sm:text-[0.9rem]">
              Empower your choices with thousands of quality products at unbeatable prices-from daily essentials to luxury finds. Your one-stop shop is just a click away.
              </p>
              <Link to="/store">
                <button className="px-5 py-3 flex items-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-300">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <p>Start shopping</p>
                </button>
              </Link>
            </div>
            <div className="grid items-center">
              <img
                src={landing_social_media}
                alt=""
                className="md:ml-auto mx-auto w-5/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
