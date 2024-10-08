import axios from "axios";


async function rootApi(config) {

  const apiClient = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: "http://192.168.20.175:3001/api",
    timeout: 3000,
  });

  return await new Promise((resolve, rejects) => {
    apiClient
      .request(config)
      .then((res) => {
        resolve(res?.data)
      })
      .catch((err) => {
        rejects(err)
      });
  });
}

export default rootApi;
