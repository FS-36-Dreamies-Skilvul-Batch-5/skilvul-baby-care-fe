export default function FeatureCard() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-y-3">
      <img src="assets/icons/data-anak.png" alt="Data Anak" className="w-[60px] md:w-[70px] aspect-[70/80]"></img>
      <div className="text-center">
        <h3 className="text-[20px] md:text-[22px] text-[#272C49] font-bold">Data Anak</h3>
        <p className="max-w-[330px] text-sm text-[#36455B] mt-0.5">Fitur Data Anak akan menampilkan kumpulan data pertumbuhan</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-3">
      <img src="assets/icons/nutrisi-anak.png" alt="Nutrisi Anak" className="w-[70px] md:w-[80px] aspect-[80/80]"></img>
      <div className="text-center">
        <h3 className="text-[20px] md:text-[22px] text-[#272C49] font-bold">Nutrisi Anak</h3>
        <p className="max-w-[330px] text-sm text-[#36455B] mt-0.5">Nutrisi Anak berisi akan menampilkan Indeks Pertumbuhan anak</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-3">
      <img src="assets/icons/imunisasi.png" alt="Imunisasi" className="w-[70px] md:w-[80px] aspect-[80/80]"></img>
      <div className="text-center">
        <h3 className="text-[20px] md:text-[22px] text-[#272C49] font-bold">Imunisasi</h3>
        <p className="max-w-[330px] text-sm text-[#36455B] mt-0.5">Fitur Imunisasi berisi jadwal Imunisasi yang diperlukan bagi anak</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-3">
      <img src="assets/icons/grafik-pertumbuhan.png" alt="Grafik Pertumbuhan" className="w-[70px] md:w-[80px] aspect-[80/80]"></img>
      <div className="text-center">
        <h3 className="text-[20px] md:text-[22px] text-[#272C49] font-bold">Grafik Pertumbuhan</h3>
        <p className="max-w-[330px] text-sm text-[#36455B] mt-0.5">Grafik Pertumbuhan berisi Status Gizi anak dengan Pengukuran nilai Z-Score</p>
      </div>
    </div>
    </>
  );
}