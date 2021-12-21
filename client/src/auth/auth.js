
import React, { useEffect } from 'react'
import { auth } from '../reduxStore/_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate, Route, useLocation } from 'react-router-dom';
import swal from 'sweetalert';


export function Auth(props) {

  const navigator = useNavigate()

    let user = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
      console.log('ddddddddddd')
      //To know my current status, send Auth request 
      dispatch(auth()).then(response => {
        //Not Loggined in Status 
        if ( !response.payload.isAuth) { //비 로그인 유저

          if (props.option) {
            swal({ icon: "warning", text: "need Login" })
            navigator('/')

            
          }
          //Loggined in Status 
        } else {
          //supposed to be Admin page, but not admin person wants to go inside
            if (props.adminRoute && !response.payload.isAdmin) {
              navigator('/')
            }
            //Logged in Status, but Try to go into log in page 
            else {
              if (props.option === false) {
                navigator('/')
              }
            }
        }
      })

    }, [props])

    return (
      <props.privateApp {...props} user={user} />
    )
}
  /*
auth option
null :   Anyone Can go inside 개나소나 접근가능
true  : only logged in user can go inside  로그인 유저만 접근
false : logged in user can't go inside  로그인유저는 접근 금지
*/
