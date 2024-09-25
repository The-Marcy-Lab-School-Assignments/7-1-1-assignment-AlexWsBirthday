// TODO: 
// - Make the button navigate the user back to the home page
//locates whatever you need, for you! takes endpoint and brings you to endpoint 
import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  //import useNav hook 
  const nav = useNavigate();

  //handling click event to implement redirection func to button
  const handleClick = () => {
    //sets the route (location) of use navigate and takes you there.
    nav('/')
  }

  return (
    //don't forget to implement the functionality via onClick attribute!!! aghghsghk
    <button className="ui button fluid" onClick={handleClick}>
      Go Home
    </button>
  )
}

export default GoHomeButton;