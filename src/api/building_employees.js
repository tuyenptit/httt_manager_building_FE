import rootApi from "./api";

const getListbuilding_employees = async () => {
  return await rootApi(
    {
      url: "building_employees/list",
      method: "get",
    },
  );
};

const addbuilding_employees= async (data) => {
  return await rootApi(
    {
      url: "building_employees/create",
      method: "post",
      data,
    }
  );
};

export { getListbuilding_employees, addbuilding_employees };
