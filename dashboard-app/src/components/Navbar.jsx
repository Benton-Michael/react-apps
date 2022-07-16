import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotificationLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

// In the app we ahve many buttons so it is useful to have this re-usable rafc component with instant return
// properties for the nav button are title customFunc icon color and dotColor
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    {/* other NavButtons will do different actions - each NavButton calls the unique action we provide to it by using the customFunc  */}
    <button 
      type="button" 
      onClick={customFunc} style= {{ color }} 
      className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span 
        style={{ background: dotColor }} 
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        >{icon}
        </span>
    </button>

  </TooltipComponent>
)

const Navbar = () => {
  
  const { activeMenu, setActiveMenu } = useStateContext();
  
  
  
  
  return ( 
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* this code is unique to this nav button */}
      <NavButton title="Menu" customFunc={() => 
        setActiveMenu((prevActiveMenu) => 
        !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
    </div>
)
};

export default Navbar;
