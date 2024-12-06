import { Logo } from "../components";

const NotFound = () => {
  return (
    <div className="bg-yellow-300 grid h-[100vh] w-[100vw] place-content-center  justify-items-center gap-5">
      <Logo />
      <h2 className="text-3xl font-bold">Page Not Found</h2>
    </div>
  );
};

export default NotFound;
