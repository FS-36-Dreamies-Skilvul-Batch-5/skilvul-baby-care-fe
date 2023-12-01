import DailyNeedCard from "../cards/DailyNeedCard";
import { calculateBabyAgeInMonths } from "../../../utils/nutritionAlgorithm";

export default function DailyNeedList() {
  const babyBirth = localStorage.getItem("baby_birth");
  let babyAge = "";

  if (babyBirth !== null) {
    babyAge = calculateBabyAgeInMonths(babyBirth);
  }

  const dailyNeeds = {
    bodyFluid: [700, 800, 1300, 1700],
    sleepTime: ["14-17", "12-15", "11-14", "10-13"],
    activityTime: ["30", "45", "90", "120", "60"],
  };

  const getDailyBodyFluid = () => {
    if (babyAge >= 0 && babyAge <= 6) {
      return dailyNeeds.bodyFluid[0];
    } else if (babyAge >= 7 && babyAge <= 12) {
      return dailyNeeds.bodyFluid[1];
    } else if (babyAge >= 13 && babyAge <= 36) {
      return dailyNeeds.bodyFluid[2];
    } else {
      return dailyNeeds.bodyFluid[3];
    }
  };

  const getSleepTime = () => {
    if (babyAge >= 0 && babyAge <= 3) {
      return dailyNeeds.sleepTime[0];
    } else if (babyAge >= 4 && babyAge <= 11) {
      return dailyNeeds.sleepTime[1];
    } else if (babyAge >= 12 && babyAge <= 24) {
      return dailyNeeds.sleepTime[2];
    } else {
      return dailyNeeds.sleepTime[3];
    }
  };

  const getActivityTime = () => {
    if (babyAge >= 0 && babyAge <= 3) {
      return dailyNeeds.activityTime[0];
    } else if (babyAge >= 4 && babyAge <= 6) {
      return dailyNeeds.activityTime[1];
    } else if (babyAge >= 7 && babyAge <= 12) {
      return dailyNeeds.activityTime[2];
    } else if (babyAge >= 13 && babyAge <= 36) {
      return dailyNeeds.activityTime[3];
    } else {
      return dailyNeeds.activityTime[5];
    }
  };

  return (
    <div className="flex flex-col min-[840px]:flex-row flex-between gap-x-[25px] gap-y-[20px]">
      {babyAge !== "" ? (
        <>
          <DailyNeedCard
            mainText="Cairan"
            subText={getDailyBodyFluid()}
            desk="ml"
          />
          <DailyNeedCard mainText="Tidur" subText={getSleepTime()} desk="jam" />
          <DailyNeedCard
            mainText="Aktifitas"
            subText={getActivityTime()}
            desk="menit"
          />
        </>
      ) : (
        <>
          <DailyNeedCard mainText="-" subText="-" desk="-" />
          <DailyNeedCard mainText="-" subText="-" desk="-" />
          <DailyNeedCard mainText="-" subText="-" desk="-" />
        </>
      )}
    </div>
  );
}
