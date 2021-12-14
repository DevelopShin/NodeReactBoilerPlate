import MobileBar from "../components/Navbar/commons/MobileBar";
import Nav from "../components/Navbar/commons/Nav";
import React,{useState, useEffect} from 'react'
import SignIn from "../components/Signin/SignIn";
import { LoginFormWrap } from "../components/Signin/SignElements";
function NavBar(props) {

  // useEffect(() => {
  //   window.addEventListener()
  // }, [])
  const [isOpen, setisOpen] = useState(false);
  const togle = () => {
      setisOpen(!isOpen)
  }
  const [loginModal, setloginModal] = useState(false)
  console.log(loginModal)

  const handlePayModalOff = (e) => {

    const clicked = e.target.closest('.loginmodal');

    if (clicked) return;
    
    else {
      setloginModal(false);
    }
  };

  return (
    <>

      <Nav smoothBox={props.smoothBox} setloginModal={setloginModal} togle={togle} setisOpen={setisOpen} isOpen={isOpen}/>
      <MobileBar 
      setloginModal={setloginModal}
      isOpen={isOpen}
      togle={togle}
      />
    {loginModal &&
      <div className="LoginFormWrap"
      onClick={(e) => handlePayModalOff(e)}>
        <SignIn/>
      </div>
      // <SignIn loginModal={loginModal}  setloginModal={setloginModal} handlePayModalOff={handlePayModalOff}/>
    }
    </>
  )
}

export default NavBar
