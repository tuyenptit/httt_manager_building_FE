import rootApi from "./api";

const getListCompanies = async () => {
  return await rootApi(
    {
      url: "company/list",
      method: "get",
    },
  );
};

const addCompany = async (data) => {
  return await rootApi(
    {
      url: "company/create",
      method: "post",
      data,
    }
  );
};

export { getListCompanies, addCompany };
