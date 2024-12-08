import { StoreContentHeader, StoreSideBar } from "../../components";

const Electronics = () => {
  return (
    <div className="store-sidebar-grid h-[100vh] overflow-hidden">
    <StoreSideBar />
    <div className="p-6 overflow-y-scroll overflow-x-hidden">
      <div className="grid">
        <StoreContentHeader category="electronics"/>
      </div>
    </div>
  </div>
  )
}

export default Electronics