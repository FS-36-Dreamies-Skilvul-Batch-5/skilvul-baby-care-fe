import { useState, useEffect } from "react";
import MonitorCard from "../cards/MonitorCard";

export default function MonitoringList() {
  const [monitorDatas, setMonitorDatas] = useState({
    users: 10,
    articles: 9,
    articleCategories: 4,
    vaccines: 27,
    nutritionRecords: 20,
    vaccinationRecords: 10,
  });
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:3000/${endpoint}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error fetching ${endpoint} data`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const fetchAllData = async () => {
    try {
      const keys = Object.keys(monitorDatas);
      // 
  
      const newData = await Promise.all(
        keys.map(async (key) => {
          const data = await fetchData(key == "users" || key == "articles" || key == "vaccines" ? key : key == "articleCategories" ? "article-categories" : key == "nutritionRecords" ? "nutrition-records" : key == "vaccinationRecords" ? "vaccination-records" : '');
          return { [key]: data ? data.data.length : 0 };
        })
      );
  
      // Combine the fetched data into a single object
      const updatedMonitorDatas = Object.assign(
        {},
        ...newData
      );
  
      // Update state with the fetched data
      setMonitorDatas(updatedMonitorDatas);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchAllData();
  }, []);
  useEffect(() => {
    if(!isLoading){
      console.log(monitorDatas)
    }
  }, [isLoading]);

  return (
    <>
      {!isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[20px] select-none">
          <MonitorCard
            data={"Users"}
            count={monitorDatas.users}
          />
          <MonitorCard
            data={"Articles"}
            count={monitorDatas.articles}
          />
          <MonitorCard
            data={"Article Categories"}
            count={monitorDatas.articleCategories}
          />
          <MonitorCard
            data={"Vaccines"}
            count={monitorDatas.vaccines}
          />
          <MonitorCard
            data={"Nutrition Records"}
            count={monitorDatas.nutritionRecords}
          />
          <MonitorCard
            data={"Vaccination Records"}
            count={monitorDatas.vaccinationRecords}
          />
        </div>
      ) : (
        <div>
          Loading ....
        </div>
      )}
    </>
  );
}
