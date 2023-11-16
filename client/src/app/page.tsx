import CardComp from "@/Components/Card/Card";
import Header from "@/Components/Header/Header";

export default function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      {/*  here Start New Arrivals  */}
      <div>
        <div className="text-center my-10">
          <p className="text-[2.3rem] md:text-[4.4rem] font-bold drop-shadow-2xl">
            {" "}
            New Arrivals{" "}
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-10">
          {data.map((e) => {
            return (
              <>
                <CardComp />
              </>
            );
          })}
        </div>
      </div>
      {/*  here Start New Arrivals  */}
    </div>
  );
}
