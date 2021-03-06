import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import mds from "../data/mds.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

// In the app we ahve many buttons so it is useful to have this re-usable rafc component with instant return
// properties for the nav button are title customFunc icon color and dotColor
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    {/* other NavButtons will do different actions - each NavButton calls the unique action we provide to it by using the customFunc  */}
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
      
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  // The second parameter in useEffect is the dependency array. It tells us when
  // this is going to be called
  // For example, [] or nothing put here, it will only be called at the start
  // If we put screenSize here, it would be called everytime the screenSize changes
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    // calling to find the initial width
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  // With addition of second useEffect we're now tracking the size of our screen.
  // with these useEffect, the sidebar will automatically be hidden on small screens.
  useEffect(() => {
    if(screenSize <= 900) {
        setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* this code is unique to this nav button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => handleClick("notification")}
          dotColor="rgb(254, 201, 15)"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={mds} />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}


      </div>
    </div>
  );
};

export default Navbar;
