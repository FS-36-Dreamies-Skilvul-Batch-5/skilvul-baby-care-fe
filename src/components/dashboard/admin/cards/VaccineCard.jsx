export default function VaccineCard(props) {
  const { id, name, benefit, grant_date_guide } = props;

  return (
    <>
      <tr className="border-b border-[#D1D9E2]">
        <td className="text-[#898989] text-center py-3.5">{id}</td>
        <td className="text-[#898989] text-center py-3.5">{name}</td>
        <td className="text-[#898989] text-center py-3.5">{grant_date_guide}</td>
        <td className="text-[#898989] text-center py-3.5">{benefit}</td>
      </tr>
    </>
  );
}