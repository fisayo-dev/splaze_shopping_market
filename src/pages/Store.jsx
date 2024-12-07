import { StoreSideBar } from "../components";

const Store = () => {
  return (
    <div className="store-sidebar-grid h-[100vh] overflow-hidden">
      <StoreSideBar />
      <div className="py-5 overflow-scroll">
        <div className="grid"></div>
      </div>
    </div>
  );
};

export default Store;
