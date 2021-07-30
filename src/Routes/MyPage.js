import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MypageCalendar from '../Component/MypageCalendar';

import {Link} from 'react-router-dom';

const Container = styled.div`
   display: flex;
   padding: 3% 13%;
   flex-direction: column;
   align-items: center;
`;

// 상단
const Top = styled.div`
    color: #000070;
    font-size: 1.5rem;
    border-bottom: 2px solid #707070;
    margin-bottom: 5rem;
    padding-bottom: 0.3rem;
    width: 30%;
    text-align: center;
`;

// 중간
const Center = styled.div`
    width: 60%;
    text-align:center;
`;

// 아래
const Bottom = styled.div`
    display: flex;
    width: 75%;
    margin-top:4rem;
`;


const Forms = styled.div`
    background-color: #000070;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 4.5rem;
    border-radius: 8px;
`;

const Info = styled.div`
    background-color: white;
    color: #000070;
    text-align: center;
    margin-bottom: 1rem;
    width: 25%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-bottom: 8px;
`;
const Flist = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

const LeftBtn = styled.div`
    background-color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    text-align: center;
    line-height: 2rem;
    margin: 1.2rem -1rem;
    position: absolute;
    color: #000070;
    font-weight: bold;
    font-size: 1.3rem;
`;
const RightBtn = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: white;
    margin: 1.2rem -1rem;
    position: inherit;
    border-radius: 100%;
    text-align: center;
    line-height: 2rem;
    color: #000070;
    font-weight: bold;
    font-size: 1.3rem;
`;

const Form = styled.div`
    font-size: 0.9rem;
    margin-bottom: 5px;
`;
const Line = styled.div`
    height: 1px;
    background-color: white;
    width: 70%;
    margin: 0 auto;
`;




function MyPage() {
    const [name, setName] = useState("");
    const [dates, setDates] = useState([]);
    const [myForms, setMyForms] = useState([]);

    
    useEffect(()=>{
    },[])

    return (
        <Container>
            <Top>환영합니다, 임의진님</Top> 

            <Center>
                <MypageCalendar/> 
            </Center>

            <Bottom>
                <LeftBtn>&lt;</LeftBtn>
                <Forms>
                        <Info>최근 생성한 일정</Info>
                        <Flist>
                            <Link to ="/result">
                                <Form>멋쟁이 사자처럼 해커톤회의</Form>
                                <Line/>
                            </Link>
                            <Link to ="/result">
                                <Form>멋쟁이 사자처럼 해커톤회의</Form>
                                <Line/>
                            </Link>
                            <Link to ="/result">
                                <Form>멋쟁이 사자처럼 해커톤회의</Form>
                                <Line/>
                            </Link>
                            <Link to ="/result">
                                <Form>멋쟁이 사자처럼 해커톤회의</Form>
                                <Line/>
                            </Link>
                           
                        </Flist>
                </Forms>
                <RightBtn>&gt;</RightBtn>

            </Bottom>

           
        </Container>
    )
};

export default MyPage;