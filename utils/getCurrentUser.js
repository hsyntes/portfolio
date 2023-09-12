import Cookies from "universal-cookie";

const getCurrentUser = async (BACKEND_API) => {
  try {
    const response = await fetch(`${BACKEND_API}/hsyntes/users/current-user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${new Cookies().get("jsonwebtoken")}`,
      },
      credentials: "include",
    });

    if (!response.ok) return null;

    const { data } = response.json();

    if (!data) return null;

    console.log(data);

    return data.currentUser;
  } catch (e) {
    new Error(e);
    return null;
  }
};

export default getCurrentUser;
