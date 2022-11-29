import {useState, useEffect} from "react";
import getMoonData from "../Services/moonService";

function useMoonData() {
  const [moonData, setMoonData] = useState();

  useEffect(() => {
    getDataOnMoon();
  }, []);

  async function getDataOnMoon() {
    try {
      const {data} = await getMoonData();
      setMoonData(data.data[0]);
    } catch (err) {
      console.log(err);
    }
  }
  return {moonData};
}

export default useMoonData;
