const searchDocuments = async (q) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/hsyntes/documents/search/${q}`
  );

  const data = await response.json();

  return data;
};

export default searchDocuments;
