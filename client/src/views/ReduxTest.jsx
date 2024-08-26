// Este componente es un ejemplo de como usar Redux en un componente funcional
// Luego se borrará

import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../state/store/slices/users/users-slice'
import { useEffect } from 'react'

export const ReduxTest = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const handleAddUser = () => dispatch(addUser({ name: 'John Doe' }))

  useEffect(() => console.log(users), [users])

  return (
    <div>
      <h1>Redux Test</h1>
      <button className='bg-blue-500 text-white p-2' onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReduxTest