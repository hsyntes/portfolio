import Cookies from "universal-cookie";

const getCurrentUser = async (BACKEND_API) => {
  try {
    const cookies = new Cookies();
    const jsonwebtoken = cookies.get("jsonwebtoken");

    const response = await fetch(`${BACKEND_API}/hsyntes/users/current-user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          jsonwebtoken || localStorage.getItem("jsonwebtoken")
        }`,
      },
      credentials: "include",
    });

    if (!response.ok) return null;

    const { data } = response.json();

    console.log(data);

    if (!data) return null;

    console.log(data);

    return data.currentUser;
  } catch (e) {
    new Error(e);
    return null;
  }
};

export default getCurrentUser;
