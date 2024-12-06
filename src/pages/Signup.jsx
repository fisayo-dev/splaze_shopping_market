import landing_social_media from "../assets/app_images/landing_social_media.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
const Signup = () => {
  return (
    <div className="form-grid-signup">
      <div className="bg-white">
        <div className="grid justify-items-center ">
          <img src={landing_social_media} alt="" />
        </div>
      </div>
      <div className="bg-yellow-300">
        <div className="grid h-[100vh] text-center place-content-center justify-items-center gap-4">
          <div className="flex text-black items-center gap-2">
            <ShoppingCartIcon className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Splaze</h2>
          </div>
          <h2 className="text-2xl">Register an account with us ?</h2>
          <div className="grid"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
