import logo from "../assets/Logo.svg";
import illustration from "../assets/Illustration.svg";
import arrow from "../assets/Arrow Right.svg";
import bar from "../assets/VectorB.svg";
import close from "../assets/VectorC.svg";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-10" />
          <p className="uppercase">crappo</p>
        </div>
        <div
          className={
            !nav
              ? "flex flex-col md:flex-row gap-8 absolute md:static bg-[#150e28] rounded-md md:bg-transparent left-0 right-0 top-[-100%] p-2 text-gray-300 items-center text-sm"
              : "flex flex-col md:flex-row gap-8 absolute md:static bg-[#150e28] rounded-md md:bg-transparent left-0 right-0 top-16 p-2 text-gray-300 items-center text-sm"
          }
        >
          <a href="">Product</a>
          <a href="">Feature</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <div className="flex items-center gap-4">
            <a href="" className="text-base">
              Login
            </a>
            <div className="h-5 w-[1px] text-gray-500 bg-gray-500"></div>
            <button className="bg-blue-700 p-3 rounded-full text-base">
              Register
            </button>
          </div>
        </div>
        <div onClick={handleClick} className="block md:hidden">
          {!nav ? <img src={bar} alt="" /> : <img src={close} alt="" />}
        </div>
      </nav>

      <section className="flex flex-col md:flex-row mt-5 p-4 items-center justify-between text-start">
        <div>
          <p className="bg-black/50 rounded-full p-2 w-[22rem] py-1">
            <span className="bg-white uppercase rounded-full font-bold text-black p-[2px] mr-2">
              75% save
            </span>
            For the Black Friday Weekend
          </p>
          <h1 className="text-6xl font-semibold md:w-[32rem] my-5">
            Fastest & secure platform to invest in crypto
          </h1>
          <p className="text-gray-400 w-[26rem] my-5">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <button className="flex items-center gap-2 bg-blue-700 p-4 rounded-full">
            Try for FREE <img src={arrow} alt="" className="w-7" />
          </button>
        </div>
        <div>
          <img src={illustration} alt="" />
        </div>
      </section>
    </>
  );
}
