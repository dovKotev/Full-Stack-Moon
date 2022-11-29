import axios from "axios";

axios.defaults.headers.common.Authorization =
  "fc19f888-5312-11ed-bc36-0242ac130002-fc19f93c-5312-11ed-bc36-0242ac130002";

function getMoonData() {
  return axios.get(
    "https://api.stormglass.io/v2/astronomy/point?lat=31.4117&lng=35.0818"
  );
}

export default getMoonData;
