import { StoreContentHeader, StoreSideBar } from "../../components";

const HealthAndBeauty = () => {
  return (
    <div className="flex h-[100vh] overflow-hidden">
      <StoreSideBar />
      <div className="w-full p-6 overflow-y-scroll overflow-x-hidden">
        <div className="grid">
          <StoreContentHeader category="health-and-beauty" />
        </div>
      </div>
    </div>
  );
};

export default HealthAndBeauty;
