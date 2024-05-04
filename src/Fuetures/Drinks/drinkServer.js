import axios from "axios"

const getDrinks = async () => {
    const response = await axios.get("/api/drink")
    return response.data
}

const exportDrink = {
    getDrinks
}

export default exportDrink