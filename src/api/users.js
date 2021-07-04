import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post("/login", data);
  return response.data;
};
