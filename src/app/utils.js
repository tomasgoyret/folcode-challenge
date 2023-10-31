const getData = (url) => {
  console.log(url);
  return fetch(`${process.env.NEXT_API_BASE_URL}/${url}`, {
    headers: {
      Authorization: process.env.NEXT_API_KEY,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error();
    })
    .finally(() => console.log("Data fetched"));
};

export { getData };
