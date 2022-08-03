import axios from "../utils/axios"

const getTop100 = async () => {
  try {
    return await axios.get("/top100")
  } catch(err) {
    console.log(err)
  }
}

export { getTop100 }
