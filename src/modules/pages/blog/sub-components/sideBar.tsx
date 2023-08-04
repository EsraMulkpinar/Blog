import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="border flex" >
      <Image
        src="/assets/icons/sidebarIcon.svg"
        width={24}
        height={28}
        alt="/"
      />
      <div className="text-pink-600!">Esra <span>Blog</span></div>
    </div>
  );
};

export default SideBar;
