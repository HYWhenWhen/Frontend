import React, { useState } from 'react';
import Result from "./Result";
import styled from "styled-components";
import Calendar from '../Component/Calendar';

const Container = styled.div`
   display: flex;
   padding: 3rem 15%;
`;

const Left = styled.div`
    width: 20%;
    text-align:center;
    display: flex;
    flex-direction: column;
`;
const UserInfo = styled.div`
    border: 1px solid #000070;
    padding: 5%;
    line-height: 1.6rem;
    margin: 0 10% 1rem;
`;
const Logo = styled.div`
    background-color: #000070;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    margin: auto;
`;
const Name = styled.div`
`;
const Email = styled.div`
`;
const Forms = styled.div`
    background-color: #000070;
    color: white;
    height: 85%;
    margin: 0 10%;
`;
const Form = styled.div`
`;

const Center = styled.div`
    width: 60%;
    text-align:center;
`;

const Right = styled.div`
    width: 20%;
    text-align:center;
    border: 1px solid #000070;
`;


function MyPage() {
    return (
        <Container>
            <Left>
                <UserInfo>
                    <Logo>
                    </Logo>
                    <Name>남민정</Name>
                    <Email>이메일</Email>
                </UserInfo>
                <Forms>
                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                </Forms>
            </Left>
            <Center>
                <Result/> 
                {/* 원래는 이거 아닌데 일단 임시로 */}
            </Center>
            <Right>right</Right>
        </Container>
    )
};

export default MyPage;