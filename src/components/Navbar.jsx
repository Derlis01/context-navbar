import { useContext } from 'react'
import UserContext from '../context/UserContext'

const style = {
  background: "purple",
  display: "flex",
  padding: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "white",
  fontWeight: "bold"
};

const Navbar = () => {

  const { user } = useContext(UserContext)

  return (
    <div style={style}>
        <h2>Hi {user}!</h2>
    </div>
  )
}

export default Navbar