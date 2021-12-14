import styled from "styled-components";
import {Link} from "react-router-dom"




export const Icon =styled(Link)`
    // margin-left: 20px;
    margin-top:32px;
    text-decoration:none;
    color: #fff;
    font-weight: 700;
    font-size: 30px;

    @media screen and (max-width: 480) {
      margin-left: 10px;
      margin-top: 8px;
    }
`;

export const LoginFormWrap=styled.div`
    z-index:100;
    bottom: 0;
    left:0;
    right:0;
    top:0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: rgba(11,19,30,.35);
`;



export const FormContent = styled.div`
    z-index:91;
    display: flex;
    flex-direction:column;
    justify-content: center;
    width: 312px;
    padding:24px;

    background: #010101;
    
    @media screen and (max-width: 480px) {
      padding: 10px;
    }
`
export const Form = styled.form`
    z-index: 1;
    height: auto;
    width: 100%;
    display: grid;
    border-radius: 4px;

    // @media screen and (max-width: 400px) {
    //   padding: 32px 32px
    // }
`

export const FormH1 = styled.h1`
    display:inline-block;
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400px;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;


export const FormInput =styled.input`
    padding: 15px 15px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`
export const FormButton = styled.button`
    background: #01bf71;
    padding: 13px 0;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;

    `
export const Text = styled.div`
    padding: 3px;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 12px;
`;

export const BotWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const BotLink = styled(Link)`
  decoration:none;
  text-align: center;
  text-decoration: none;
  color: inherit;
`