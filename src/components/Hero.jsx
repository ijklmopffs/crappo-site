import graph from "../assets/graph.svg";
import person from "../assets/person.svg";
import countries from "../assets/countries.svg";
import illustrations from "../assets/Illustrations.svg";

export default function Hero() {
  return (
    <>
      <section className="text-start my-20 md:my-40 p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <div className="flex items-center gap-2">
            <img src={graph} alt="" />
            <div>
              <h2 className="text-4xl font-semibold my-2">$30B</h2>
              <p className="text-gray-400">Digital Currency Exchanged</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={person} alt="" />
            <div>
              <h2 className="text-4xl font-semibold my-2">10M+</h2>
              <p className="text-gray-400">Trusted Wallet Investors</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={countries} alt="" />
            <div>
              <h2 className="text-4xl font-semibold my-2">195</h2>
              <p className="text-gray-400">Countries Supported</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <img src={illustrations} alt="" />
          </div>
          <div>
            <h2 className="text-4xl font-bold w-[28rem] my-2">
              Why you should choose CRAPPO
            </h2>
            <p className="text-gray-400 w-96 my-5">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="bg-blue-700 p-4 font-semibold rounded-full">
              Learn More
            </button>
          </div>
        </div>
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold">Check how much you can earn</h2>
          <p className="text-gray-500 md:w-[32rem] mx-auto my-5">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </section>
    </>
  );
}
