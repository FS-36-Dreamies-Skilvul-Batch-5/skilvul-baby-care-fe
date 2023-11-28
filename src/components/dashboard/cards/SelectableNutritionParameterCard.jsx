export default function SelectableNutritionParameterCard({
  nutrition_records,
  state,
  handleChange,
}) {
  let weight = "";
  let height = "";
  let head_circumference = "";

  if (nutrition_records && nutrition_records.length !== 0) {
    const latestNutritionRecord =
      nutrition_records[nutrition_records.length - 1];
    weight = latestNutritionRecord.weight;
    height = latestNutritionRecord.height;
    head_circumference = latestNutritionRecord.head_circumference;
  }

  return (
    <>
      <div className="flex flex-col min-[840px]:flex-row flex-between gap-x-[25px] gap-y-[20px] select-none">
        <div
          className="w-full block cursor-pointer"
          onClick={() => handleChange("Berat Badan")}
        >
          <div
            className={`flex flex-col w-full ${
              state == "Berat Badan" ? "bg-[#DFF1FF]" : "bg-[#F5F5F5]"
            } p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)] duration-300 ease-in-out`}
          >
            <img
              src={
                state == "Berat Badan"
                  ? "../assets/icons/berat-badan.png"
                  : "../assets/icons/berat-badan-grey.png"
              }
              alt="Berat Badan"
              className="h-[40px] object-contain"
            ></img>
            <div className="flex flex-col justify-center text-center">
              <span>Berat</span>
              <div
                className={`w-full flex justify-center items-end gap-1 ${
                  state == "Berat Badan" ? "text-[#54ABF0]" : "text-[#898989]"
                }`}
              >
                <h1 className="text-2xl font-bold">{weight}</h1>
                <span className="text-lg">kg</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full block cursor-pointer"
          onClick={() => handleChange("Tinggi Badan")}
        >
          <div
            className={`flex flex-col w-full ${
              state == "Tinggi Badan" ? "bg-[#FFF6DF]" : "bg-[#F5F5F5]"
            } p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)] duration-300 ease-in-out`}
          >
            <img
              src={
                state == "Tinggi Badan"
                  ? "../assets/icons/tinggi-badan.png"
                  : "../assets/icons/tinggi-badan-grey.png"
              }
              alt="Tinggi Badan"
              className="h-[40px] object-contain"
            ></img>
            <div className="flex flex-col justify-center text-center">
              <span>Tinggi</span>
              <div
                className={`w-full flex justify-center items-end gap-1 ${
                  state == "Tinggi Badan" ? "text-[#F5C952]" : "text-[#898989]"
                }`}
              >
                <h1 className="text-2xl font-bold">{height}</h1>
                <span className="text-lg">cm</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full block cursor-pointer"
          onClick={() => handleChange("Lingkar Kepala")}
        >
          <div
            className={`flex flex-col w-full ${
              state == "Lingkar Kepala" ? "bg-[#E3FFDA]" : "bg-[#F5F5F5]"
            } p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)] duration-300 ease-in-out`}
          >
            <img
              src={
                state == "Lingkar Kepala"
                  ? "../assets/icons/lingkar-kepala.png"
                  : "../assets/icons/lingkar-kepala-grey.png"
              }
              alt="Lingkar Kepala"
              className="h-[40px] object-contain"
            ></img>
            <div className="flex flex-col justify-center text-center">
              <span>L. Kepala</span>
              <div
                className={`w-full flex justify-center items-end gap-1 ${
                  state == "Lingkar Kepala"
                    ? "text-[#6BD147]"
                    : "text-[#898989]"
                }`}
              >
                <h1 className="text-2xl font-bold">{head_circumference}</h1>
                <span className="text-lg">cm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
