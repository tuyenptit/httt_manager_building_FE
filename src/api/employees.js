import rootApi from "./api";

const getList = async () => {
  return await rootApi(
    {
      url: "employees/list",
      method: "get",
    },
  );
};

const add= async (data) => {
  return await rootApi(
    {
      url: "employees/create",
      method: "post",
      data,
    }
  );
};

export { getList, add };
