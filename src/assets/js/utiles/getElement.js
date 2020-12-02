// this is a reusable function to select an element from the DOM
// instead of write document.querySelector() every time

const getElement = (element) => {
  const selector = document.querySelector(element);

  // if element is exist return it
  if (selector) return selector;

  // if no element found show this Error
  throw new Error(`please, check ${element} selector, no such element exist`);
};

export { getElement };
