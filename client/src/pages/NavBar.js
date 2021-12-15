import MobileBar from "../components/Navbar/commons/MobileBar";
import Nav from "../components/Navbar/commons/Nav";
import React, { useState, useEffect } from 'react'
import SignIn from "../components/Signin/SignIn";
import { LoginFormWrap } from "../components/Signin/SignElements";
function NavBar(props) {

  {/**Mobile menu Close Handler */}
  const [isOpen, setisOpen] = useState(false);
  const togle = () => {
    setisOpen(!isOpen)
  }

  {/**Login modal Handler */}
  const [loginModal, setloginModal] = useState(false)
  const closeModal = () => {
    setloginModal(!loginModal)
  }
  const handlePayModalOff = (e) => {

    const clicked = e.target.closest('.loginmodal');

    if (clicked) return;

    else {
      setloginModal(false);
    }
  };

  return (
    <>

      <Nav smoothBox={props.smoothBox} setloginModal={setloginModal} togle={togle} setisOpen={setisOpen} isOpen={isOpen} />
      <MobileBar
        setloginModal={setloginModal}
        isOpen={isOpen}
        togle={togle}
      />
      {loginModal &&
        <div className="nods"
          onClick={(e) => handlePayModalOff(e)}>
          <SignIn closeModal={closeModal}/>
        </div>
      }
    </>
  )
}

export default NavBar
