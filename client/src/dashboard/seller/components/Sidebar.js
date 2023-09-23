import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <aside className="flex-shrink-0 hidden overflow-y-auto bg-white lg:block">
      <div>
        <div
          className={` ${
            open ? "w-56" : "w-20 "
          } p-5  pt-8 relative duration-300 h-full`}
        >
          <button
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer -right-3 top-9  border-dark-purple bg-black text-black
       border-2`}
          >
            Open
          </button>
          <div className="flex gap-x-4 items-center">
            <h1
              className={`text-black origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>

          <div className="">
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                >
                  Logo
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
