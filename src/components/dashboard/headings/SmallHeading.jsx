const SmallHeading = ({text, desk, ket}) => {
  return(
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col min-[840px]:flex-row justify-between items-start min-[840px]:items-center">
        
        <h3 className="text-heading font-bold text-[#272C49]">{text}</h3>
        <div className="flex flex-col items-end">
          <span id="last_updated_el" className="desk-heading text-xs text-[#898989]">{desk}</span>
          <span className="ket-heading text-xs text-[#898989]">{ket}</span>
        </div>
      </div>
    </div>
  )
}

export default SmallHeading;