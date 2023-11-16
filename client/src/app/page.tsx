import CardComp from "@/Components/Card/Card";
import CategoryBanner from "@/Components/CategoryBanner/CategoryBanner";
import Header from "@/Components/Header/Header";

export default function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      {/*  here Start New Arrivals  */}
      <section>
        <div className="text-center my-10">
          <p className="text-[2.3rem] md:text-[4.4rem] font-bold drop-shadow-2xl">
            {" "}
            New Arrivals{" "}
          </p>
        </div>

        <div className=" ">
          <div className="flex-wrap flex justify-center  gap-10 overflow-x-scroll">
            {data.map((e) => {
              return (
                <>
                  <CardComp />
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/*  here Start New Arrivals  */}
      {/* here Start Top Selling   */}
      <section>
        <div className="text-center my-10">
          <p className="text-[2.3rem] md:text-[4.4rem] font-bold drop-shadow-2xl">
            {" "}
            Top Selling{" "}
          </p>
        </div>

        <div className=" ">
          <div className="flex-wrap flex justify-center  gap-10 overflow-x-scroll">
            {data.map((e) => {
              return (
                <>
                  <CardComp />
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* here Start Top Selling   */}
      {/* here Start Top Selling   */}
      <section>
        <div className="text-center my-10">
          <p className="text-[2.3rem] md:text-[4.4rem] font-bold drop-shadow-2xl break-words ">
            {" "}
            BROWSE BY <br /> dress STYLE{" "}
          </p>
        </div>

        <CategoryBanner />
      </section>
      {/* here Start Top Selling   */}
    </div>
  );
}
