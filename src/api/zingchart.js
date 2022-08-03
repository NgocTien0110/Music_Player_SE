import axios from "../utils/axios"

const getCharthome = async () => {
  try {
    return await axios.get("/charthome")
  } catch(err) {
    console.log(err)
  }
}

export { getCharthome }
