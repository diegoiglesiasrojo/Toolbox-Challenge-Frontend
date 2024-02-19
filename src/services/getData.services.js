export const getDataServices = async () => {
  return await fetch("http://localhost:4000/files/data", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
};
