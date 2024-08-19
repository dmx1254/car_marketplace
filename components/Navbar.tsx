import Image from "next/image";
import React from "react";
import { Globe, CircleUserRound, CircleHelp } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2">
      <Image
        src="/tesla.svg"
        alt="logo"
        width={100}
        height={100}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="flex items-center gap-4 text-sm text-[#262626]">
        <span>Véhicules</span>
        <span>Énergie</span>
        <span>Recharge</span>
        <span>Découvrir</span>
        <span>Shop</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[#262626]">
          <CircleHelp size={20} />
        </span>
        <span className="text-[#262626]">
          <Globe size={20} />
        </span>
        <span className="text-[#262626]">
          <CircleUserRound size={20} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
