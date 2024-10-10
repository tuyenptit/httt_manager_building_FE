import rootApi from "./api";

const getListservice_usage = async () => {
  return await rootApi(
    {
      url: "service_usage/list",
      method: "get",
    },
  );
};

const addservice_usage = async (data) => {
  return await rootApi(
    {
      url: "service_usage/create",
      method: "post",
      data,
    }
  );
};

export { getListservice_usage, addservice_usage };
