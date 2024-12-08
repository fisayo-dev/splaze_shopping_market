import { StoreContentHeader, StoreSideBar } from "../../components";

const HomeAndKitchen = () => {
  return (
    <div className="store-sidebar-grid h-[100vh] overflow-hidden">
    <StoreSideBar />
    <div className="p-6 overflow-y-scroll overflow-x-hidden">
      <div className="grid">
        <StoreContentHeader />
      </div>
    </div>
  </div>
  )
}

export default HomeAndKitchen