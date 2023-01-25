import React, {useContext} from 'react'

import UserContext from '../context/UserContext'

const Forms = () => {

  const {user, setUser} = useContext(UserContext)

  return (
    <>
        <div>
          <label>Name:</label>{" "}
          <input
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </div>
    </>
  )
}

export default Forms