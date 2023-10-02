import chart from "../assets/Chart.svg";
import statistics from "../assets/Statistic.svg";
import table from "../assets/Table.svg";

export default function Features() {
  return (
    <>
      <section className="bg-[#2b076e] p-8">
        <h2 className="text-3xl font-bold md:w-[35rem] mx-auto my-10">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center text-start justify-between">
          <div>
            <h3 className="font-bold text-xl">Invest Smart</h3>
            <p className="text-gray-500 w-[26rem] my-5">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>
            <button className="bg-blue-700 p-3 rounded-full">Learn More</button>
          </div>
          <div>
            <img src={chart} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-start my-10">
          <div>
            <img src={statistics} alt="" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Detailed Statistics</h3>
            <p className="text-gray-500 w-[26rem] my-5">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="bg-blue-700 p-3 rounded-full">Learn More</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-start my-20">
          <div>
            <h3 className="font-bold text-xl">
              Grow your profit and track your investments
            </h3>
            <p className="text-gray-500 w-[26rem] my-5">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <button className="bg-blue-700 p-3 rounded-full">Learn More</button>
          </div>
          <div>
            <img src={table} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-start items-center justify-between md:w-[70rem] mx-auto p-4 rounded-md bg-[#3671e9]">
          <div>
            <h3 className="text-3xl font-bold my-10">Start mining now</h3>
            <p className="text-gray-800">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b-2 border-gray-600"
            />
            <button className="bg-white p-2 rounded-full text-black font-bold ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
