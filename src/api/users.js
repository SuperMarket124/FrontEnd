import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const login = async (email, password) => {
  alert(1);
  const response = await axios.post("/login");
  return response.data;
};
