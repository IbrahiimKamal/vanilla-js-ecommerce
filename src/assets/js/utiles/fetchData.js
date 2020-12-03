const URL =
  'https://bitbucket.org/!api/2.0/snippets/kamalo11/9nab7z/ec948e9514d9f4ee8129f2e51d094774f5e347cf/files/ecommerce';

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
