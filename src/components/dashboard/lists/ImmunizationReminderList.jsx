import { useState, useEffect } from "react";

export default function ImmunizationReminderList() {
  const [immunizationList, setImmunizationList] = useState([]);
  const [vaccinationRecords, setVaccinationRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const babyId = localStorage.getItem("baby_id");

    try {
      const [immunizationResponse, vaccinationRecordResponse] =
        await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/vaccines`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`${import.meta.env.VITE_API_URL}/babies/${babyId}/vaccination-records`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

      if (!immunizationResponse.ok || !vaccinationRecordResponse.ok) {
        return;
      }

      const immunizationData = await immunizationResponse.json();
      const vaccinationRecordData = await vaccinationRecordResponse.json();

      setImmunizationList(immunizationData.data);
      setVaccinationRecords(vaccinationRecordData.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const processedfinalVaccinationRecord = immunizationList.map((item) => {
    const matchingVaccineRecordId = vaccinationRecords.find(
      (record) => record.vaccine_id === item.id
    );
    const status = matchingVaccineRecordId ? "Sudah" : "Belum";
    const vaccination_record_id = matchingVaccineRecordId
      ? matchingVaccineRecordId.id
      : null;

    return { ...item, status, vaccination_record_id };
  });

  const filteredVaccinationRecord = processedfinalVaccinationRecord.filter(
    (item) => {
      return item.status == "Belum";
    }
  );

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {!isLoading ? (
        <div className="flex flex-col justify-center items-center gap-y-4">
          {filteredVaccinationRecord.slice(0, 3).map((item) => (
            <div className="w-full px-5 py-4 rounded-xl border border-[#D1D9E2]" key={item.id}>
              <h3 className="font-bold text-[#36455B]">{item.name}</h3>
              <div className="flex items-center gap-x-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path
                    d="M5 0.5C6.32608 0.5 7.59785 1.02678 8.53553 1.96447C9.47322 2.90215 10 4.17392 10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C3.67392 10.5 2.40215 9.97322 1.46447 9.03553C0.526784 8.09785 0 6.82608 0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5ZM4.53125 2.84375V5.5C4.53125 5.65625 4.60938 5.80273 4.74023 5.89062L6.61523 7.14062C6.83008 7.28516 7.12109 7.22656 7.26562 7.00977C7.41016 6.79297 7.35156 6.50391 7.13477 6.35938L5.46875 5.25V2.84375C5.46875 2.58398 5.25977 2.375 5 2.375C4.74023 2.375 4.53125 2.58398 4.53125 2.84375Z"
                    fill="#898989"
                  />
                </svg>
                <span className="text-sm text-[#898989]">diberikan pada umur {item.grant_date_guide}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
