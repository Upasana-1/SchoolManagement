import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson, BsFileEarmarkPerson, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout, AiTwotoneTrophy, AiFillFileText, AiFillIdcard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpenStates, setSubmenuOpenStates] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuOpenStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const Menu = [
    { title: "Dashboard", icon: <RiDashboardFill /> },
    {
      title: "Register",
      spacing: true,
      icon: <CgProfile />,
      submenu: true,
      submenuItems: [
        { title: "Student Register" },
        { title: "Examination" },
      ],
    },
    {
      title: "Examination",
      spacing: true,
      icon: <AiFillFileText />,
      submenu: true,
      submenuItems: [
        { title: "Exam Creation" },
        { title: "Schedule Exam" },
        { title: "Manage Exam" },
      ],
    },
    {
      title: "Result",
      spacing: true,
      icon: <BsFileEarmarkPerson />,
      submenu: true,
      submenuItems: [
        { title: "Result Entry" },
        { title: "Report Card Generation" },
      ],
    },
    {
      title: "Admit Card",
      spacing: true,
      icon: <AiFillIdcard />,
      submenu: true,
      submenuItems: [
        { title: "Admit Card Layout" },
        { title: "Admit Card Generation" },
      ],
    },
    { title: "Notifications", icon: <IoMdNotifications /> },
    { title: "Contact Us", icon: <BsFillTelephoneFill /> },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-full p-5 pt-8 ${
          open ? "w-72" : "w:20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <AiTwotoneTrophy
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-3 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Mero<br />Vidhyala
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-slate-500 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch className="text-white text-ig block float-left cursor-pointer mr-2" />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-bg-slate-500 focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menu.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover-bg-slate-500 rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && (
                  <BsChevronDown
                    className={`${submenuOpenStates[index] && "rotate-180"}`}
                    onClick={() => toggleSubmenu(index)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpenStates[index] && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover-bg-slate-500 rounded-md"
                    >
                      {submenuItems.title}
                    </li>
                    ))}
                    </ul>
                    )}
                       </>
                     ))}
                     </ul>
                     </div>
                     
                     
                 
                     <div className='p-7'>
                     <div className='text-2xl font-semibold'>Home Page</div>
                   </div>
                    </div>
                    
                   )
                 }
                 
                 
                 export default Home;