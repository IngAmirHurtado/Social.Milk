import MyAccountDropdownMenu from "../MyAccountDropdownMenu";
import { dataGeneralSideBar } from "./SideBarRotes.data";
import  SiderItem  from "./SiderItem";

const SideBarRoutes = () => {

  return (
    <div className="flex h-full flex-col justify-between p-3">
      <div className="flex flex-col gap-3">
        <p className="font-montserrat text-xs">General</p>
        <div className="flex flex-col gap-2 font-poppins">
          {dataGeneralSideBar.map((item, index) => (
            <SiderItem
              icon={item.icon}
              title={item.title}
              href={item.href}
              key={index}
            />
          ))}
        </div>
      </div>

     
        <MyAccountDropdownMenu site="sidebar"/>
    
    </div>
  );
};

export default SideBarRoutes;