import React from "react";

export default function Navbar({
  professionalEmail,
  logoSrc,
  menuItems = [
    { name: "", href: "#" },
    { name: "", href: "#" },
    { name: "", href: "#" },
    { name: "", href: "#" },
    { name: "", href: "#" },
    { name: "", href: "#" },
  ],
}) {
  return (
    <header className="w-full">
      <div className="bg-blue-400 text-white text-sm py-2 flex justify-between px-6">
        <div className="text-right">

        </div>
      </div>
      <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <img src={logoSrc} className="h-20 w-80" />
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-gray-700 text-blue-100">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
