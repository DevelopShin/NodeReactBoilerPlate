import styled from "styled-components";
import { Link } from "react-router-dom"



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

export const SocialWrap = styled.div`
    width:312px;
    height:77px;
    display:flex;
    margin-top:15px;
    flex-direction:column;
    align-items:center;
`

export const SocialIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({IcBgColor})=> IcBgColor};
    width: 48px;
    height: 44px;
    color:${({IcColor})=> IcColor};
    border: 0;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    margin:0 8px;
    cursor: pointer;
    font-weight: 800;
    font-size: 30px;
`;

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
export const SocialText = styled.span`
  padding: 0 8px;
  margin-bottom: 16px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -.3px;
  color: #abb0b5;
  background:#000;
  z-index: 1;
`
