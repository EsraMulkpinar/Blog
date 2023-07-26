import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="border">
      <Image
        src="/assets/icons/sidebarIcon.svg"
        width={500}
        height={500}
        alt="/"
      />
    </div>
  );
};

export default SideBar;
