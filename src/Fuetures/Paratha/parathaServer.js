import axios from "axios";

const getParatha = async () => {
  const response = await axios.get("/api/paratha");
  return response.data;
};

const exportParatha = {
  getParatha,
};

export default exportParatha;
