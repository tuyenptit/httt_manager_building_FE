import rootApi from "./api";

const getListservices = async () => {
  return await rootApi(
    {
      url: "services/list",
      method: "get",
    },
  );
};

const addservices = async (data) => {
  return await rootApi(
    {
      url: "services/create",
      method: "post",
      data,
    }
  );
};

export { getListservices, addservices };
