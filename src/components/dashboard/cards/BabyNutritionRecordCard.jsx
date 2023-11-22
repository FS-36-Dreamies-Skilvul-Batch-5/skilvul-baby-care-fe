export default function BabyNutritionRecordCard(){
  return(
    <div class="w-full border border-[#D1D9E2] rounded-xl overflow-x-scroll scrollbar__hidden">
      <table class="w-full min-w-[1024px] table-fixed border-collapse select-none">
        <thead>
          <tr class="border-b border-[#D1D9E2]">
            <th class="text-[#272C49] text-center py-2 w-16">No</th>
            <th class="text-[#272C49] text-center py-2">Tanggal</th>
            <th class="text-[#272C49] text-center py-2">Berat (kg)</th>
            <th class="text-[#272C49] text-center py-2">Tinggi (cm)</th>
            <th class="text-[#272C49] text-center py-2">L. Kepala (cm)</th>
            <th class="text-[#272C49] text-center py-2">Status Gizi</th>
            <th class="text-[#272C49] text-center py-2">Aksi</th>
          </tr>
        </thead>

        <tbody id="baby_data_list">
          
        </tbody>
      </table>
      <div id="fetch_info" class="hidden text-center py-3.5">
        <span>Loading...</span>
      </div>
    </div>
  )
}