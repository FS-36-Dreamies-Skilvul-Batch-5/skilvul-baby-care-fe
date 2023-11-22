import Sidebar from "../../layouts/Sidebar";
import Welcomming from "../../components/dashboard/Welcomming";
import SmallHeading from "../../components/dashboard/headings/SmallHeading";
import ParameterGiziCard from "../../components/dashboard/cards/ParameterGiziCard";
import KebutuhanHarianCard from "../../components/dashboard/cards/KebutuhanHarianCard";
import Profile from "../../components/dashboard/Profile";
import StatusGiziCard from "../../components/dashboard/cards/StatusGiziCard";
import ImmunizationList from "../../components/dashboard/links/ImmunizationLink";



export default function Main() {
  return (
    <>
      <Sidebar/>

      {/* begin::Dashboard */}
      <div className="min-[840px]:pl-[78px] pt-12 min-[840px]:pt-0 pb-12 xl:pb-0">
        <div className="flex flex-col xl:flex-row justify-between w-full h-auto xl:h-screen px-[20px] sm:px-[35px] min-[840px]:pl-[55px] min-[840px]:pr-[55px] xl:pr-0 gap-x-[55px] select-none">
          {/* begin::Left Dashboard */}
          <div className="py-10 flex flex-col w-full gap-y-[30px] xl:gap-y-[20px] min-[1600px]:gap-y-[30px]">
            {/* begin::Welcoming */}
            
            {/* begin::Welcoming */}
            <Welcomming/>
            {/* begin::Dashboard */}
            <SmallHeading text="Dashboard" desk="-"/>

            <ParameterGiziCard/>
            {/* end::Dashboard */}

            {/* begin::Kebutuhan harian */}
            <SmallHeading text="Kebutuhan Harian" ket="berdasarkan data terakhir yang diinput"/>

            <div className="flex flex-col min-[840px]:flex-row flex-between gap-x-[25px] gap-y-[20px]">
              <KebutuhanHarianCard mainText="Cairan" subText="500" desk="ml"/>
              <KebutuhanHarianCard mainText="Tidur" subText="14-17" desk="jam"/>
              <KebutuhanHarianCard mainText="Aktifitas" subText="> 30" desk="menit"/>
            </div>
            {/* end::Kebutuhan harian */}
          </div>
          {/* end::Left Dashboard */}

          {/* begin::Right Dashboard */}
          <div className="p-6 sm:p-8 min-[840px]:p-10 flex flex-col w-full xl:max-w-[435px] bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.10)] gap-y-10 xl:gap-y-[14px] min-[1600px]:gap-y-[30px] rounded-2xl xl:rounded-none">
            <Profile/>

            <div className="flex flex-col gap-y-3">
              <SmallHeading text="Status Gizi"/>

              <StatusGiziCard/>
            </div>

            <div className="flex flex-col gap-y-3">
              <SmallHeading text="Pengingat Imunisasi"/>

              <ImmunizationList/>
            </div>
          </div>
          {/* end::Left Dashboard */}
        </div>
      </div>
      {/* begin::Dashboard */}
    </>
  )
}