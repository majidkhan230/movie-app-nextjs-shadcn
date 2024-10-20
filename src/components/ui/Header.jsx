import Image from "next/image";
import logo from "@/public/assets/images/logo.jpg";
import React from "react";
import Link from "next/link";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={100}
          priority={true}
          className="cursor-pointer w-10 h-10 rounded-md"
        />
      </Link>
      <div className=" flex gap-4">
        <GenreDropdown />
        <SearchInput />
        <div className="theme">Theme</div>
      </div>
    </div>
  );
};

export default Header;
