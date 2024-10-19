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

const getServicesCompany = async (id) => {
  return await rootApi(
    {
      url: `company/services_company/${id}`,
      method: "get",
    },
  );
};

export { getListCompanies, addCompany, getServicesCompany };
