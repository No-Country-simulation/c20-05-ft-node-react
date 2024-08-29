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
    if (res.status !== 200) return
    setData(res.data)
  }

  const handleSendData = async () => {
    const res = await handlerApiRequest(axiosInstace.post('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }), API_REQUEST_MSGS.test)
    console.log('res', res);
    if (res.status !== 201) return
    setData([res.data])
  }

  return (
    <div>
      <h1>ApiHandler</h1>
      <p>Abrir consola</p>
      <div className="flex gap-4">
        <button onClick={handleFetchData} className="bg-blue-400 text-white p-2 px-8 rounded-lg">Get</button>
        <button onClick={handleSendData} className="bg-green-400 text-white p-2 px-8 rounded-lg">Post</button>
      </div>
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