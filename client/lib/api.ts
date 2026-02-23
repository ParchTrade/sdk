import axios from "axios";

export const searchProducts = async (query: string) => {
  const res = await axios.post("http://localhost:5000/search", { query });
  return res.data;
};
