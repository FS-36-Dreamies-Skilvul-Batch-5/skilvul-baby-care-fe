export default function NutritionStatusCard(){
  return(
    <>
      <div className="flex flex-col w-full bg-[#272C49] justify-center items-center text-center p-[26px] rounded-[16px] gap-y-2 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
        <div id="nutrition_bg" className="w-[40px] h-[40px] flex justify-center items-center rounded-xl">
          <span id="nutrition_icon" className="font-bold text-white text-xl">
            -
          </span>
        </div>
        <div className="flex gap-x-1">
          <span id="nutrition_conclusion" className="text-white text-2xl font-bold">-</span>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 0.5C8.0913 0.5 9.61742 1.13214 10.7426 2.25736C11.8679 3.38258 12.5 4.9087 12.5 6.5C12.5 8.0913 11.8679 9.61742 10.7426 10.7426C9.61742 11.8679 8.0913 12.5 6.5 12.5C4.9087 12.5 3.38258 11.8679 2.25736 10.7426C1.13214 9.61742 0.5 8.0913 0.5 6.5C0.5 4.9087 1.13214 3.38258 2.25736 2.25736C3.38258 1.13214 4.9087 0.5 6.5 0.5ZM5.9375 3.3125V6.5C5.9375 6.6875 6.03125 6.86328 6.18828 6.96875L8.43828 8.46875C8.69609 8.64219 9.04531 8.57187 9.21875 8.31172C9.39219 8.05156 9.32187 7.70469 9.06172 7.53125L7.0625 6.2V3.3125C7.0625 3.00078 6.81172 2.75 6.5 2.75C6.18828 2.75 5.9375 3.00078 5.9375 3.3125Z" fill="white"/>
          </svg>
          <span id="latest_date" className="text-base text-white">-</span>
        </div>
      </div>
    </>
  )
}