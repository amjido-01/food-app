import React from "react";
import { Fragment } from "react";
import meals from "../../assets/meals.jpg"
import hero from "../../assets/hero.jpg"
import her from "../../assets/her.jpg"
import hero2 from "../../assets/hero2.jpg"
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <Fragment>
      <nav className="bg-[#8a2b06] py-2 px-4 sm:px-6 lg:px-8 fixed left-0 text-white top-0 w-full z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">Logo</span>
          </div>
          <div>
            {/* <button className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded">
              Chart
            </button> */}
            <HeaderCartButton onClick={props.onShowCart} />
          </div>
        </div>
      </nav>
      <div className="main-img w-full h-[25rem] z-0 overflow-hidden">
        <img className="img" src={her} alt="table full of meals" />
      </div>
    </Fragment>
  );
};
