import ImmunizationCard from "../cards/ImmunizationCard";

export default function ImmunizationList({list}) {
  return (
    <div className="flex self-stretch flex-col w-full h-full pb-20 gap-y-5 overflow-y-scroll scrollbar__hidden">
      {list.length !== 0 ?  (
        list.map((item) => (
          <ImmunizationCard key={item.id} {...item}/>
        ))
      ) : (
        <div className="w-full py-8 text-center text-red-500">
          Tidak ada vaksin dengan filter tersebut...
        </div>
      )}
    </div>
  );
}