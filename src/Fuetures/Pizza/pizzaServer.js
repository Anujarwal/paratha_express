import axios from "axios";

const getPizza = async () => {
  const response = await axios.get("/api/pizza");
  return response.data;
};

const exportPizza = {
  getPizza,
};

export default exportPizza;