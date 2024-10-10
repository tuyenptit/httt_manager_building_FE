import rootApi from "./api";

const getListaccess_log = async () => {
  return await rootApi(
    {
      url: "access_log/list",
      method: "get",
    },
  );
};

const addaccess_log = async (data) => {
  return await rootApi(
    {
      url: "access_log/create",
      method: "post",
      data,
    }
  );
};

export { getListaccess_log, addaccess_log };
