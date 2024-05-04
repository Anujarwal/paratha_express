import axios from "axios";

const getBurger = async () => {
    const response = await axios.get("/api/burger")
    return response.data
}


const exportburger = {
    getBurger
}

export default exportburger;
