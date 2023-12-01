import BabyNutritionRecordCard from "../cards/BabyNutritionRecordCard";

export default function BabyNutritionRecordList({records}) {
  return (
    <div className="w-full border border-[#D1D9E2] rounded-t-xl overflow-x-scroll scrollbar__hidden">
      <table className="w-full min-w-[1024px] table-fixed border-collapse select-none">
        <thead>
          <tr className="border-b border-[#D1D9E2]">
            <th className="text-[#272C49] text-center py-2 w-16">No</th>
            <th className="text-[#272C49] text-center py-2">Tanggal</th>
            <th className="text-[#272C49] text-center py-2">Berat (kg)</th>
            <th className="text-[#272C49] text-center py-2">Tinggi (cm)</th>
            <th className="text-[#272C49] text-center py-2">L. Kepala (cm)</th>
            <th className="text-[#272C49] text-center py-2">Status Gizi</th>
            <th className="text-[#272C49] text-center py-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {records.length !== 0 ? (
            records.map((record, index) => (
              <BabyNutritionRecordCard {...record} key={index} record_number={index}/>
            ))
          ) : (
            <td colSpan={7} className="py-5 text-center text-red-500">
              Tidak ada data dengan filter tersebut...
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}