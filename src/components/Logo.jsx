import { ShoppingCartIcon } from "@heroicons/react/24/outline";
const Logo = () => {
  return (
    <div className="flex text-black items-center gap-2">
      <ShoppingCartIcon className="w-10 h-10" />
      <h2 className="text-2xl font-bold">Splaze</h2>
    </div>
  );
};

export default Logo;
