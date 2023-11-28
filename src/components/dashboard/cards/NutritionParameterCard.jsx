export default function NutritionParameterCard({ nutrition_records }){
  let weight = '';
  let height = '';
  let head_circumference = '';

  if(nutrition_records && nutrition_records.length !== 0){
    const latestNutritionRecord = nutrition_records[nutrition_records.length - 1];
    weight = latestNutritionRecord.weight;
    height = latestNutritionRecord.height;
    head_circumference = latestNutritionRecord.head_circumference;
  }

  return(
    <>
      <div className="flex flex-col min-[840px]:flex-row flex-between gap-x-[25px] gap-y-[20px]">
        {/* Berat (Active) */}
        <div className="w-full block">
          <div className="flex flex-col w-full bg-[#DFF1FF] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
            <img src="../assets/icons/berat-badan.png" alt="Berat Badan" className="h-[40px] object-contain"></img>
            <div className="flex flex-col justify-center text-center">
              <span>Berat</span>
              <div className="w-full flex justify-center items-end gap-1 text-[#54ABF0]">
                <h1 className="berat__badan text-2xl font-bold">{weight}</h1>
                <span className="text-lg">kg</span>
              </div>
            </div>
          </div>
        </div>
        {/* Tinggi (Active) */}
        <div className="w-full block">
          <div className="flex flex-col w-full bg-[#FFF6DF] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
            <img src="../assets/icons/tinggi-badan.png" alt="Tinggi Badan" className="h-[40px] object-contain"></img>
            <div className="flex flex-col justify-center text-center">
              <span>Tinggi</span>
              <div className="w-full flex justify-center items-end gap-1 text-[#F5C952]">
                <h1 className="tinggi__badan text-2xl font-bold">{height}</h1>
                <span className="text-lg">cm</span>
              </div>
            </div>
          </div>
        </div>
        {/* L. Kepala (Active) */}
        <div className="w-full block">
        <div className="flex flex-col w-full bg-[#E3FFDA] p-[32px] rounded-2xl gap-y-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
            <img src="../assets/icons/lingkar-kepala.png" alt="Lingkar Kepala" className="h-[40px] object-contain"></img>
            <div className="flex flex-col justify-center text-center">
              <span>L. Kepala</span>
              <div className="w-full flex justify-center items-end gap-1 text-[#6BD147]">
                <h1 className="lingkar__kepala text-2xl font-bold">{head_circumference}</h1>
                <span className="text-lg">cm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}