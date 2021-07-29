import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MypageCalendar from '../Component/MypageCalendar';

import {Link} from 'react-router-dom';

const Container = styled.div`
   display: flex;
   padding: 6rem 15%;
`;

// 왼쪽 디자인
const Left = styled.div`
    width: 23%;
    margin-right: 10%;
    text-align:center;
    display: flex;
    flex-direction: column;
`;
const UserInfo = styled.div`
    border: 1px solid #000070;
    padding: 5%;
    line-height: 1.6rem;
    margin: 0 10% 1rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
`;
const Logo = styled.div`
    background-color: #000070;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    margin: auto;
    color: white;
    font-size: 2rem;
    line-height: 5rem;
`;
const Name = styled.div`
`;

const Forms = styled.div`
    background-color: #000070;
    color: white;
    height: 85%;
    margin: 0 10%;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 2rem 1rem;
`;
const Form = styled.div`
    font-size: 0.9rem;
    margin-bottom: 5px;
`;
const Line = styled.div`
    height: 1px;
    background-color: white;
    width: 70%;
    margin-bottom: 2rem;
`;

const Center = styled.div`
    width: 60%;
    text-align:center;
`;


function MyPage() {
    const [name, setName] = useState("");
    const [dates, setDates] = useState([]);
    const [myForms, setMyForms] = useState([]);

    
    useEffect(()=>{
    },[])

    return (
        <Container>
            <Left>
                <UserInfo>
                    <Logo>
                        <FontAwesomeIcon icon={faUser}/>
                    </Logo>
                    <Name>남민정</Name>
                </UserInfo>
                <Forms>
                    <Link to ="/result">
                        <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    </Link>
                    <Line/>

                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    <Line/>

                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    <Line/>

                    <Form>멋쟁이 사자처럼 해커톤회의</Form>
                    <Line/>

                </Forms>
            </Left>
            <Center>
                <MypageCalendar/> 
            </Center>


           
        </Container>
    )
};

export default MyPage;