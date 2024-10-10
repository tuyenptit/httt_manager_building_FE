import rootApi from "./api";

const getListsalaries = async () => {
  return await rootApi(
    {
      url: "salaries/list",
      method: "get",
    },
  );
};

const addsalaries = async (data) => {
  return await rootApi(
    {
      url: "salaries/create",
      method: "post",
      data,
    }
  );
};

export { getListsalaries, addsalaries };
