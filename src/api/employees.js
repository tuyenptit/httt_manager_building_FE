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

const getInOut = async (id) => {
  return await rootApi(
    {
      url: `access_log/${id}`,
      method: "get",
    },
  );
};

export { getList, add, getInOut };
