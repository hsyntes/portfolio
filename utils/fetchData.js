// * Fetching backend data
const fetchData = async (param) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/hsyntes/${param}`
  );

  const data = await response.json();

  return data;
};

// export default fetchData;
module.exports = fetchData;
