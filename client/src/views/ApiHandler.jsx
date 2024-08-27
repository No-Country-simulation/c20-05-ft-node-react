// Archivo temporal de prueba (por eso no esta componetizado)

import { useState } from "react"
import axiosInstace from "../utils/functions/axiosInstance"
import { handlerApiRequest } from "../utils/functions/handlerApiRequest"
import { API_REQUEST_MSGS } from "../assets/other-assets/api-request-msgs"


const ApiHandler = () => {
  const [data, setData] = useState([])

  const handleFetchData = async () => {
    // -------------
    // Forma anterior de hacer peticiones
    // const res = await axiosInstace.get('https://jsonplaceholder.typicode.com/posts')
    // setData(res.data)
    // -------------

    const res = await handlerApiRequest(axiosInstace.get('https://jsonplaceholder.typicode.com/posts'), API_REQUEST_MSGS.test)
    console.log('res', res);
    if (!res.status === 200) return
    setData(res.data)
  }

  return (
    <div>
      <h1>ApiHandler</h1>
      <button onClick={handleFetchData} className="bg-blue-400 text-white p-2 rounded-lg">Traer de api</button>
      {
        data && data.map((item) => (
          <div key={item.id} className="bg-gray-200 p-2 m-2 rounded-lg">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ApiHandler