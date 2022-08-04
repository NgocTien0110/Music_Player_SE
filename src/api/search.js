import axios from "../utils/axios"

const getSearch = async (keyword) => {
  try {
    return await axios.get("/search", {
      params: {
        keyword: keyword
      }
    })
  } catch(err) {
    console.log(err)
  }
}

export { getSearch }