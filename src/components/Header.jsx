import { ShoppingCartIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="flex">
      <ShoppingCartIcon className="w-6 h-6" />
      <h2 className="text-2xl">Splaze</h2>
    </div>
  );
};

export default Header;
