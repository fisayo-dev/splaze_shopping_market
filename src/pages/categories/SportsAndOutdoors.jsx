import { StoreContentHeader, StoreSideBar } from "../../components";

const SportsAndOutdoors = () => {
  return (
    <div className="flex h-[100vh] overflow-hidden">
    <StoreSideBar />
    <div className="w-full p-6 overflow-y-scroll overflow-x-hidden">
      <div className="grid">
        <StoreContentHeader category="sports-and-outdoors"/>
      </div>
    </div>
  </div>
  )
}

export default SportsAndOutdoors