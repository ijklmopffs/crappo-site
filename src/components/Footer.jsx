import logo from "../assets/Logo.svg";
import visa from "../assets/Visa.svg";
import mastercard from "../assets/Mastercard.svg";
import bitcoin from "../assets/Bitcoin.svg";
import facebook from "../assets/facebook-f 1.svg";
import linkedin from "../assets/linkedin 1.svg";
import instagram from "../assets/instagram 1.svg";
import twitter from "../assets/twitter 1.svg";
import youtube from "../assets/youtube 1.svg";

export default function Footer() {
  return (
    <>
      <footer className="p-4 flex gap-2 flex-col">
        <div className="flex flex-col md:flex-row justify-between w-full items-start">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <p className="uppercase">crappo</p>
          </div>
          <div>
            <p className="font-bold text-xl my-5">Quick Link</p>
            <div className="flex flex-col text-start">
              <a href="/" className="my-2">
                Home
              </a>
              <a href="/" className="my-2">
                Products
              </a>
              <a href="/" className="my-2">
                About
              </a>
              <a href="/" className="my-2">
                Features
              </a>
              <a href="/" className="my-2">
                Contact
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold text-xl text-start my-5">Resources</p>
            <div className="flex flex-col text-start">
              <a href="/" className="my-2">
                Download Whitepaper
              </a>
              <a href="/" className="my-2">
                Smart Token
              </a>
              <a href="/" className="my-2">
                Blockchain Explorer
              </a>
              <a href="/" className="my-2">
                Crypto API
              </a>
              <a href="/" className="my-2">
                Interest
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold w-96 text-start">
              We accept the following payment systems
            </h2>
            <div className="flex gap-2 items-center my-10">
              <img src={visa} alt="" />
              <img src={mastercard} alt="" />
              <img src={bitcoin} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between my-10 flex-col md:flex-row items-start">
          <p>©2021 CRAPPO. All rights reserved</p>
          <div className="flex gap-2 flex-col md:flex-row">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
