import VaccineCard from "../cards/VaccineCard";

export default function VaccineList({vaccines}) {
  return (
    <div className="w-full border border-[#D1D9E2] rounded-xl overflow-x-scroll scrollbar__hidden">
      <table className="w-full min-w-[1024px] table-auto border-collapse select-none">
        <thead>
          <tr className="border-b border-[#D1D9E2]">
            <th className="text-[#272C49] text-center py-2 w-16">No</th>
            <th className="text-[#272C49] text-center py-2">Nama</th>
            <th className="text-[#272C49] text-center py-2">Panduan Tanggal Pemberian</th>
            <th className="text-[#272C49] text-center py-2">Manfaat</th>
          </tr>
        </thead>

        <tbody>
          {vaccines.length !== 0 ? (
            vaccines.map((vaccine) => (
              <VaccineCard {...vaccine} key={vaccine.id}/>
            ))
          ) : (
            <td colSpan={4} className="py-5 text-center text-red-500">
              Tidak ada data dengan filter tersebut...
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}