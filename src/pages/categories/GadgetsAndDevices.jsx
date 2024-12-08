import { StoreContentHeader, StoreSideBar } from "../../components";

const GadgetsAndDevices = () => {
  return (
    <div className="store-sidebar-grid h-[100vh] overflow-hidden">
    <StoreSideBar />
    <div className="p-6 overflow-y-scroll overflow-x-hidden">
      <div className="grid">
        <StoreContentHeader category="gadgets-and-devices"/>
      </div>
    </div>
  </div>
  )
}

export default GadgetsAndDevices