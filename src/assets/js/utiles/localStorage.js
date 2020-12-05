const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);

  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }

  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export { getStorageItem, setStorageItem };
