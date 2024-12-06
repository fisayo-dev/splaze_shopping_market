import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../components";
import signup_image from "../assets/app_images/460.jpg";
import { Google, Instagram } from "iconsax-react";
import { FaXTwitter } from "react-icons/fa6";
const Signup = () => {
  return (
    <div className="md:grid form-grid-login">
      <div className="md:p-3 p-[1.5rem] bg-yellow-300">
        <div className="grid h-[100vh] text-center place-content-center gap-4">
          <div className="flex mx-auto text-black items-center gap-2">
            <ShoppingCartIcon className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Splaze</h2>
          </div>
          <h2 className="text-xl">I'm glad to have you back </h2>
          <div className="grid text-[0.97rem] gap-4 md:w-4/5 mx-auto">
            <div className="grid gap-4 w-full">
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <EnvelopeIcon className="h-6 w-6" />
                  <input
                    type="email"
                    className="w-full"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <KeyIcon className="h-6 w-6" />
                  <input
                    type="password"
                    className="w-full"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <p> ------ OR ------</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-full hover:shadow-sm hover:bg-white cursor-pointer bg-yellow-100 px-4 py-3">
              <div className="flex gap-2 justify-center items-center">
                <Google className="h-6 w-6" />
                <p className="md:block hidden">Google</p>
              </div>
            </div>
            <div className="rounded-full hover:shadow-sm hover:bg-white cursor-pointer bg-yellow-100 px-4 py-3">
              <div className="flex gap-2 justify-center items-center">
                <FaXTwitter className="h-6 w-6" />
                <p className="md:block hidden">Twitter</p>
              </div>
            </div>
            <div className="rounded-full hover:shadow-sm hover:bg-white cursor-pointer bg-yellow-100 px-4 py-3">
              <div className="flex gap-2 justify-center items-center">
                <Instagram className="h-6 w-6" />
                <p className="md:block hidden">Instagram</p>
              </div>
            </div>
          </div>

          <p className="text-center">
            New to Splaze, <br /> Why not
            <Link className="font-bold hover:underline" to="/signup">
              become a customer now
            </Link>
          </p>

          <div className="flex mt-5 justify-content-center">
            <Button styles="mx-auto">Continue shopping</Button>
          </div>
        </div>
      </div>
      <div className="md:grid hidden bg-yellow-50">
        <div className="grid justify-items-center ">
          <img src={signup_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
