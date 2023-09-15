import Cookies from "universal-cookie";

const getCurrentUser = async () => {
  try {
    const cookies = new Cookies();
    const jsonwebtoken = cookies.get("jsonwebtoken");

    const token = jsonwebtoken || localStorage.getItem("jsonwebtoken");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/hsyntes/users/authorization/current-user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    if (!response.ok) return null;

    const { data } = response.json();

    return data.currentUser;
  } catch (e) {
    new Error(e);
    return null;
  }
};

export default getCurrentUser;
