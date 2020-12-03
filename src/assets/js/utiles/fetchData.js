const URL =
  'https://bitbucket.org/!api/2.0/snippets/kamalo11/9nab7z/2ab26f49667b945a4e78679492fc7950bc1df3be/files/ecommerce.json';

const fetchData = async () => {
  const response = await fetch(URL);

  try {
    return response.json();
  } catch (err) {
    console.log(err);
  }

  return response;
};

export default fetchData;
