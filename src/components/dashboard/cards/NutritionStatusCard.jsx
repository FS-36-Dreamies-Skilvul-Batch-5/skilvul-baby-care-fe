import { convertHumanReadDateFormat } from "../../../utils/convertHumanReadDateFormat";
import {
  getNutritionStatus,
  calculateBabyAgeInMonths,
} from "../../../utils/nutritionAlgorithm";

export default function NutritionStatusCard({ nutrition_records }) {
  let weight = "";
  let height = "";
  let head_circumference = "";
  let growth_date = "";
  let babyAge = "";
  let babyGender = "";
  let conclusion = "";

  if (
    localStorage.getItem("baby_birth") !== null &&
    localStorage.getItem("gender") !== null
  ) {
    babyAge = calculateBabyAgeInMonths(localStorage.getItem("baby_birth"));
    babyGender = localStorage.getItem("gender");
  }

  if (nutrition_records && nutrition_records.length !== 0) {
    const latestNutritionRecord =
      nutrition_records[nutrition_records.length - 1];
    weight = latestNutritionRecord.weight;
    height = latestNutritionRecord.height;
    head_circumference = latestNutritionRecord.head_circumference;
    growth_date = latestNutritionRecord.growth_date;
  }

  if (weight !== "" && height !== "") {
    conclusion = getNutritionStatus({
      weight,
      height,
      babyAge,
      babyGender,
    }).nutritionConclusion();
  }
  return (
    <>
      <div className="flex flex-col w-full bg-[#272C49] justify-center items-center text-center p-[26px] rounded-[16px] gap-y-2 shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
        <div
          className={`${
            localStorage.getItem("baby_birth") !== null &&
            localStorage.getItem("gender") !== null
              ? getBgColorBasedOnNutrition(conclusion)
              : "bg-gray-500"
          } w-[40px] h-[40px] flex justify-center items-center rounded-xl`}
        >
          <span className="font-bold text-white text-xl">
            {localStorage.getItem("baby_birth") !== null &&
            localStorage.getItem("gender") !== null
              ? getIconBasedOnNutrition(conclusion)
              : "-"}
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="text-white text-2xl font-bold">{conclusion}</span>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M6.5 0.5C8.0913 0.5 9.61742 1.13214 10.7426 2.25736C11.8679 3.38258 12.5 4.9087 12.5 6.5C12.5 8.0913 11.8679 9.61742 10.7426 10.7426C9.61742 11.8679 8.0913 12.5 6.5 12.5C4.9087 12.5 3.38258 11.8679 2.25736 10.7426C1.13214 9.61742 0.5 8.0913 0.5 6.5C0.5 4.9087 1.13214 3.38258 2.25736 2.25736C3.38258 1.13214 4.9087 0.5 6.5 0.5ZM5.9375 3.3125V6.5C5.9375 6.6875 6.03125 6.86328 6.18828 6.96875L8.43828 8.46875C8.69609 8.64219 9.04531 8.57187 9.21875 8.31172C9.39219 8.05156 9.32187 7.70469 9.06172 7.53125L7.0625 6.2V3.3125C7.0625 3.00078 6.81172 2.75 6.5 2.75C6.18828 2.75 5.9375 3.00078 5.9375 3.3125Z"
              fill="white"
            />
          </svg>
          <span id="latest_date" className="text-base text-white">
            {convertHumanReadDateFormat(growth_date)}
          </span>
        </div>
      </div>
    </>
  );
}

function getIconBasedOnNutrition(value) {
  if (value == "Gizi Baik") {
    return (
      <svg
        className="fill-white"
        xmlns="http://www.w3.org/2000/svg"
        height="1.4em"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  } else if (value == "Gizi Kurang" || value == "Beresiko Gizi Lebih") {
    return (
      <svg
        className="fill-white"
        xmlns="http://www.w3.org/2000/svg"
        height="1.4em"
        viewBox="0 0 384 512"
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    );
  } else {
    return (
      <svg
        className="fill-white"
        xmlns="http://www.w3.org/2000/svg"
        height="1.4em"
        viewBox="0 0 64 512"
      >
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
      </svg>
    );
  }
}

function getBgColorBasedOnNutrition(value) {
  if (value == "Gizi Baik") {
    return "bg-[#28A745]";
  } else if (value == "Gizi Kurang" || value == "Beresiko Gizi Lebih") {
    return "bg-[#FFC839]";
  } else {
    return "bg-[#E23747]";
  }
}
