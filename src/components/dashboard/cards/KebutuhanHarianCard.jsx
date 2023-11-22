const KebutuhanHarianCard = ({mainText, subText, desk}) => {
  return(
    <div className="flex flex-col w-full bg-white justify-center text-center p-[32px] rounded-2xl gap-y-2 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
      <span className="text-[#898989]">{mainText}</span>
      <div className="w-full flex justify-center items-end gap-1 text-[#36455B]">
        <h1 className="text-2xl font-bold">{subText}</h1>
        <span className="text-lg">{desk}</span>
      </div>
    </div>
  )
}
  
  export default KebutuhanHarianCard;