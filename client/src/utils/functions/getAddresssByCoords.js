import axiosInstance from './axiosInstance'
import { API_URL_SERVICE_GET_ADDRESS } from '../../assets/other-assets/constants/map-resources'

const getAddressByCoords = async ({ lat, lon }) => {
  const response = await axiosInstance.get(API_URL_SERVICE_GET_ADDRESS, {
    params: {
      lat,
      lon,
      format: 'json',
    },
  })
  try {
    const { country, city, road, house_number } = response.data.address
    return { country, city, road, house_number }
  } catch {
    return { country: null, city: null, road: null, house_number: null }
  }
}

export default getAddressByCoords