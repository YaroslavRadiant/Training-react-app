export const getSessionData = () => {
  let sessionStorageStoreData = sessionStorage.getItem("sessionStorageStore");

  if (sessionStorageStoreData !== null) {
    console.log(sessionStorageStoreData);
    let data = JSON.parse(sessionStorageStoreData);
    console.log(data);
    return data;
  } else {
    console.log("SessionStorage не существует");
  }
};
