let store = [];

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      title,
      recommend,
      name,
      price,
      price2,
      description,
      largeImage,
      image1,
      image2,
      image3,
    } = product;
    return {
      id,
      title,
      recommend,
      name,
      price,
      price2,
      description,
      largeImage,
      image1,
      image2,
      image3,
    };
  });
};

export { store, setupStore };
