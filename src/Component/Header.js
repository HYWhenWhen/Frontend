import React, { useState } from "react";
import styled from "styled-components";

import Popup from "reactjs-popup";
import Auth from "../Routes/Auth";

import { toast } from "react-toastify";


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 15px 30px;
`;

const Logo = styled.a`
    display:flex;
    font-size:1.2rem;
    font-weight:bold;
`;

const T1 = styled.div`
    padding-bottom: 3px;
`;
const T2 = styled.div`
    color: #FF9E1B;
    padding-bottom: 3px;
`;

const List = styled.div`
    display:flex;
`;

const AuthBtn = styled.div`
    cursor:pointer;
    background-color: #000070;
    color:white;
    border-radius: 2rem;
    padding: 0 2rem;
    line-height: 2rem;
`;

const Link = styled.a`
    cursor:pointer;
    border: 2px solid #000070;
    box-sizing: border-box;
    color:#000070;
    border-radius: 2rem;
    padding:0 2rem;
    margin-right: 1rem;
    line-height: 2rem;
`;

export default () => {
    const isLogin =localStorage.getItem('login')
    const logout=()=>{
        toast("로그아웃 되었습니다")
        localStorage.removeItem('login');
        window.location.replace("/")
    }

    return (
        <Container>
            <Logo href ="/">
                <T1>When</T1>
                <T2>When</T2>
            </Logo>
            {
                isLogin ? (
                    <List>
                        <Link href="/#/myPage">MYPAGE</Link>
                        <AuthBtn onClick={()=>{logout()}}>LOGOUT</AuthBtn>
                    </List>
                ) : (
                    <List>
                        <AuthBtn onClick={()=>{window.location.replace("/#/auth")}}>LOGIN</AuthBtn>
                    </List>
                )
            }

        </Container>
    );
}