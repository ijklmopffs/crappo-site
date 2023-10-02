import btc from "../assets/btc.svg";
import eth from "../assets/eth.svg";
import ltc from "../assets/ltc.svg";
import arrow from "../assets/Arrow Right2.svg";

export default function Cryptocurrencies() {
  return (
    <>
      <section className="bg-white my-72 mb-0 p-5">
        <div className="relative mb-[5rem] bottom-40 text-start shadow-2xl bg-white w-min p-0 rounded-lg pt-0 flex justify-center items-start mx-auto flex-col">
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 mb-10 bg-blue-200/10 p-16">
            <input
              type="text"
              placeholder="Enter your hash rate"
              className="bg-transparent border-b-2 border-gray-400"
            />
            <input
              type="text"
              placeholder="TH/s"
              className="bg-transparent border-b-2 border-gray-400"
            />
            <button className="bg-blue-700 p-3 pb-1 rounded-full">
              Calculate
            </button>
          </div>
          <div className="p-10 pt-5">
            <p className="text-blue-700 font-semibold">
              ESTIMATED 24 HOUR REVENUE:
            </p>
            <p className="text-3xl text-black font-bold">
              0.055 130 59 ETH <span className="text-blue-700">($1275)</span>
            </p>
            <p className="text-gray-500">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-black font-bold text-3xl md:w-[32rem] mx-auto my-5">
            Trade securely and market the high growth cryptocurrencies.
          </h3>
        </div>

        <div className="p-2 flex flex-col md:flex-row gap-4 items-center justify-around">
          <div className="bg-blue-900 w-72 items-center flex flex-col p-3 rounded-lg">
            <img src={btc} alt="" />
            <h3 className="font-bold text-2xl my-3">
              Bitcoin <span className="text-sm text-gray-500">BTC</span>
            </h3>
            <p className="text-gray-400 my-5">
              Digital currency in which a record of transactions is maintained.
            </p>
            <button className="flex items-center p-4 bg-blue-700 gap-4 rounded-full">
              Start mining <img src={arrow} alt="" className="w-6" />
            </button>
          </div>

          <div className="w-96 items-center flex flex-col p-3 rounded-lg">
            <img src={eth} alt="" />
            <h3 className="font-bold text-2xl my-3 text-black">
              Ethereum <span className="text-sm text-gray-500">ETH</span>
            </h3>
            <p className="text-gray-400 my-5">
              Blockchain technology to create and run decentralized digital
              applications.
            </p>
            <img src={arrow} alt="" className="w-12" />
          </div>

          <div className="w-96 items-center flex flex-col p-3 rounded-lg">
            <img src={ltc} alt="" />
            <h3 className="font-bold text-2xl my-3 text-black">
              Litecoin <span className="text-sm text-gray-500">LTC</span>
            </h3>
            <p className="text-gray-400 my-5">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
            <img src={arrow} alt="" className="w-12" />
          </div>
        </div>
      </section>
    </>
  );
}
