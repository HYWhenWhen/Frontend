import React from 'react';
import { toast } from 'react-toastify';

import styled from "styled-components";
import Button from '../Component/Button';

import Main from "../Styles/Images/Main.svg";


const Container = styled.div`
    width: 100%;
    height: 56rem;
    padding:0 20%;
    box-sizing: border-box;
    background-image : url(${Main});
    background-size: 103rem;
    background-position: 22srem -4rem;
    background-repeat: no-repeat;

`;

const Content = styled.div`
padding-top: 21%;
`;

const Text = styled.div`
    padding-bottom: 2rem;
    cursor: default;
    font-size: 2.5rem;
    color: #000070;
    line-height: 3.5rem;
`;

export default ({})=>{
    const isLogin =localStorage.getItem('login')
    return (
        <Container>
            <Content>
            <Text> 지인들과<br/>일정을 <br/>잡으세요</Text>

            <Button onClick={()=>{isLogin?(window.location.replace("/#/form")):(toast("로그인이 필요합니다"))}} content="일정맞추기" backgroundColor="#000070"/>
            </Content>
        </Container>
    )
}
