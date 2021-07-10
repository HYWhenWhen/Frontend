import React from 'react';
import { toast } from 'react-toastify';

import styled from "styled-components";

import main from "../Styles/Images/Main.png"


const Container = styled.div`
    width: 100%;
    height: 53rem;
    padding:0 20%;
    box-sizing: border-box;
`;

const Content = styled.div`
    padding-top: 4rem;
    text-align: center;
`;


const Text = styled.div`
    padding-bottom: 1rem;
    cursor: default;
    font-size: 1.2rem;
    color: #FF9E1B;
`;

const Image = styled.img`
    height:33rem;
    border-radius: 2rem;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
`;

const Button = styled.div`
    margin: 2rem auto 0;
    background-color: #FF9E1B;
    padding: 15px 55px;
    border-radius: 0.5rem;
    width: fit-content;
    cursor:pointer;
    color:white;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
`;

const Check =()=>{
    

}


export default ({})=>{
    const isLogin =localStorage.getItem('login')
    console.log(isLogin)

    return (
        <Container>
            <Content>
            <Text> 지인들과 일정을 잡으세요</Text>
            <Image src = {main}/>
            <Button onClick={()=>{isLogin?(window.location.replace("/#/form")):(toast("로그인이 필요합니다"))}}>
                일정 맞추기
            </Button>
            </Content>
        </Container>
    )
}
