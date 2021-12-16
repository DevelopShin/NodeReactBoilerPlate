import styled from "styled-components";
import { Link } from "react-router-dom"



export const LoginFormWrap = styled.div`
    z-index:22;
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

export const CloseBtn = styled.span`
  display: flex;
  color:#fff;
  align-items: center;
  cursor: pointer;
  justify-content:right;
  font-weight: 350;
  height: 30px;
  cursor:default;
  font-size: 30px;
`

export const FormContent = styled.div`
    z-index:23;
    display: flex;
    flex-direction:column;
    justify-content: center;
    width: 312px;
    padding:15px 20px 15px 20px;
    border-radius: 6px;
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

export const LogoIcon = styled.div`
    display:inline-block;
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400px;
    text-align: center;
    cursor:default;
`;

export const FormInput = styled.input`
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
    margin:auto 10px;
    border-bottom: 1px solid #fff9;
    color: #fff;
    font-size: 12px;
`;

export const ColumnBox = styled.div`
    display: flex;
    margin: auto;
`
export const BotLink = styled(Link)`
  decoration:none;
  text-align: center;
  text-decoration: none;
  color: inherit;
`

export const Hr = styled.hr`
    position: relative;
    bottom: -9px;
    display: block;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: #fff9;
    border: none;
`;

export const ErrLabel = styled.span`
    margin-bottom: 8px;
    font-size: 12px;
    float:left;
    color: #F78181;
`;