import styled from "styled-components";
import {Link} from "react-router-dom"
export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left:0;
  right:0;
  top:0;
  z-index:0;
  overflow: hidden;
`;


export const FormWrap=styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    @media screen and (max-width: 400px) {
      height: 80%;
    }
`;

export const Icon =styled(Link)`
    margin-left: 20px;
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

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400px;
    text-align: center;
`;




export const FormInput =styled.input`
    padding: 16px 16px;
    margin-top: 25px;
    border: none;
    border-radius: 4px;
`
export const ErrLabel = styled.span`
    margin-bottom: 8px;
    font-size: 12px;
    float:left;
    color: #F78181;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    margin-top:32px;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;

    `
export const Text = styled.span`
    text-align: center;
    margin-top:24px;
    color: #fff;
    font-size: 14px;
`;

export const BotWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Hr = styled.hr`
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fff9;
    border: none;
`;
