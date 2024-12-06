import { Global, Lock, User } from "iconsax-react";
import landing_social_media from "../assets/app_images/landing_social_media.png";
import {
  EnvelopeIcon,
  KeyIcon,
  PlusIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { BsTelephone } from "react-icons/bs";
import { Button } from "../components";
const Signup = () => {
  return (
    <div className="md:grid form-grid-signup">
      <div className="md:grid hidden bg-yellow-50">
        <div className="grid justify-items-center ">
          <img src={landing_social_media} alt="" />
        </div>
      </div>
      <div className="md:p-3 p-[1.5rem] bg-yellow-300">
        <div className="grid h-[100vh] text-center place-content-center gap-4">
          <div className="flex mx-auto text-black items-center gap-2">
            <ShoppingCartIcon className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Splaze</h2>
          </div>
          <h2 className="text-xl">Register an account with us ?</h2>
          <div className="grid text-[0.97rem] gap-4 md:w-4/5 mx-auto">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <User className="h-6 w-6" />
                  <input
                    type="text"
                    className="w-full"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <UserGroupIcon className="h-6 w-6" />
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4">
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
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <Lock className="h-6 w-6" />
                  <input
                    type="password"
                    className="w-full"
                    placeholder="Repeat Password"
                  />
                </div>
              </div>
            </div>
            <div className="grid country-phone-input-grid gap-2">
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <BsTelephone className="h-6 w-6" />
                  <input
                    type="number"
                    className="w-full"
                    placeholder="Phone Number"
                    max={10}
                    min={10}
                  />
                </div>
              </div>
              <div className="flex px-4 py-3 rounded-full bg-yellow-100 items-center">
                <PlusIcon className="h-6 w-6" />
                <select type="text" placeholder="Last Name">
                  <option>234</option>
                  <option>234</option>
                  <option>166</option>
                  <option>134</option>
                  <option>135</option>
                  <option>248</option>
                  <option>301</option>
                </select>
              </div>
              <div className="rounded-full bg-yellow-100 px-4 py-3">
                <div className="flex gap-2 items-center">
                  <Global className="h-6 w-6" />
                  <select
                    type="text"
                    className="w-full"
                    placeholder="Last Name"
                  >
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Russia</option>
                    <option>China</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-5 justify-content-center">
            <Button styles="mx-auto">Be a customer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
