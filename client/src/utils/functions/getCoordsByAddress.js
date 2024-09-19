import axiosInstance from '../functions/axiosInstance'
import { API_URL_SERVICE_GET_COORDS } from '../../assets/other-assets/constants/map-resources'

const getCoordsByAddress = async (address) => {
  const response = await axiosInstance.get(API_URL_SERVICE_GET_COORDS, {
    params: {
      q: address,
      format: 'json',
    },
  })
  try {
    const { lat, lon } = response.data[0]
    return { lat, lon }
  } catch {
    return { lat: null, lon: null }
  }
}

export default getCoordsByAddress