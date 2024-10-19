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

const getSalary = async (id) => {
  return await rootApi(
    {
      url: `building_employees/${id}`,
      method: "get",
    },
  );
};

export { getListbuilding_employees, addbuilding_employees , getSalary};
