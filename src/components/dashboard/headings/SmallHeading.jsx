import { convertHumanReadDateFormat } from "../../../utils/convertHumanReadDateFormat";

const SmallHeading = ({ text, desk, ket, variant, nutrition_records }) => {
  let growth_date = '';

  if (nutrition_records && nutrition_records.length !== 0) {
    const latestNutritionRecord = nutrition_records[nutrition_records.length - 1];
    growth_date = latestNutritionRecord.growth_date;
  }

  return (
    <>
      {variant === 'dynamic' ? (
        <div className="flex flex-col min-[840px]:flex-row justify-between items-start min-[840px]:items-center">
          <h3 className="text-heading font-bold text-[#272C49]">{text}</h3>
          <div className="flex flex-col items-end">
            <span id="last_updated_el" className="desk-heading text-xs text-[#898989]">
              terakhir di update {convertHumanReadDateFormat(growth_date)}
            </span>
            <span className="ket-heading text-xs text-[#898989]">{ket}</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-[840px]:flex-row justify-between items-start min-[840px]:items-center">
          <h3 className="text-heading font-bold text-[#272C49]">{text}</h3>
          <div className="flex flex-col items-end">
            <span id="last_updated_el" className="desk-heading text-xs text-[#898989]">
              {desk}
            </span>
            <span className="ket-heading text-xs text-[#898989]">{ket}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallHeading;
