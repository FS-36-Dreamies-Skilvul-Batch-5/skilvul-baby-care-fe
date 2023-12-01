const Heading = ({text, desk, ket}) => {
  return(
    <div className="w-full flex flex-col text-start mb-2">
      <h1 className="font-opensans text-[28px] min-[840px]:text-[32px] text-[#272C49] font-extrabold">{text}</h1>
      <p id="last_updated_el" className="text-[#898989] text-sm min-[840px]:text-base">{desk}</p>
      <p className="text-[#898989] text-sm min-[840px]:text-base">{ket}</p>
    </div>
  )
}

export default Heading;