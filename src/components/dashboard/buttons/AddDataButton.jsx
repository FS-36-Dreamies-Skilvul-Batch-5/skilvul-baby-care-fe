export default function AddDataButton({ handleAddModal }) {
  return (
    <button
      onClick={handleAddModal}
      className="font-semibold w-full bg-[#1E3465] px-4 py-3.5 text-white rounded-xl text-sm min-[840px]:text-base"
    >
      Tambah Data
    </button>
  );
}
