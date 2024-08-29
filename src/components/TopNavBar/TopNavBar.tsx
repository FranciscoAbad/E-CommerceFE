import React from "react";
import Logo from "../../assets/logos/charm-heart.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export const TopNavBar: React.FC = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center fixed z-[2] bg-[transparent] ">
      <div className="absolute left-2.5 top-0">
        <img src={Logo} className="w-36" />
      </div>
      <div className="flex">
        <div className="px-6 font-bold text-[15px]">HOME</div>
        <div className="px-6 font-bold text-[15px]">HOME</div>
        <div className="px-6 font-bold text-[15px]">HOME</div>
        <div className="px-6 font-bold text-[15px]">HOME</div>
        <div className="px-6 font-bold text-[15px]">HOME</div>
      </div>
      <div className="flex absolute right-0">
        <div className="px-6 font-bold text-[14px]">
          <FavoriteBorderIcon
            sx={{
              width: 19,
              marginRight: 0.3,
            }}
          />
          WISHLIST
        </div>
        <div className="px-6 font-bold text-[14px]">
          <LocalMallIcon
            sx={{
              width: 19,
              marginRight: 0.3,
            }}
          />
          CART(0)
        </div>
        <SearchIcon
          sx={{
            width: 22,
            marginRight: 8,
          }}
        />
      </div>
    </div>
  );
};
