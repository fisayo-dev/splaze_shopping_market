import { StoreContentHeader, StoreSideBar } from "../../components";

const HomeAndKitchen = () => {
  return (
    <div className="flex h-[100vh] overflow-hidden">
    <StoreSideBar />
    <div className="w-full p-6 overflow-y-scroll overflow-x-hidden">
      <div className="grid">
        <StoreContentHeader category="home-and-kitchen"/>
      </div>
    </div>
  </div>
  )
}

export default HomeAndKitchen