import axios from "axios"

export const getFlowers = async (url, setProducts) => {
  const response = await axios.get(url)
  setProducts(response.data)
  return
}

export const getFlower = async (url, setProduct, id) => {
  const response = await axios.get(url + id)
  setProduct(response.data)
  return
}
