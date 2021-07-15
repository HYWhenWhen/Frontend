import React, { useState } from 'react';
import Result from "./Result";
import styled from "styled-components";
import Calendar from '../Component/Calendar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useInput from '../Hooks/useInput';

const Container = styled.div`
   display: flex;
   padding: 3rem 15%;
`;

// 왼쪽 디자인
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
    color: white;
    font-size: 2rem;
    line-height: 5rem;
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

// 오른쪽
const Right = styled.div`
    width: 20%;
    text-align:center;
    border: 1px solid #000070;
    padding: 1rem;
    box-sizing: border-box;
    color:#000070;
    display: flex;
    flex-direction: column;
`;
const Date = styled.div`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;
const AddContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ScheduleInput = styled.input`
    border: 1px solid #000070;
    border-radius: 11px;
    padding: 9px;
    font-size: 0.8rem;
    width: calc(100% - 2rem);
`;
const Add = styled.div`
    font-size: 2rem;
    margin-left: 0.5rem;
    cursor: pointer;
`;
const Schedules = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Schedule = styled.div`
    display: flex;
    margin: 0.5rem 0;
`;
const ScheduleText = styled.div`
    ::before{
        content:'';
        display:inline-block;
        width:6px;
        height:6px;
        margin:-5px 5px 0 0;
        vertical-align:middle;
        background: #000070;
        border-radius:100%
    }
`;
const Delete = styled.div`
    cursor: pointer;
    color: #7953D2;
    margin-left: 5px;
`;



function MyPage() {
    const scheduleText = useInput("");

    return (
        <Container>
            <Left>
                <UserInfo>
                    <Logo>
                        <FontAwesomeIcon icon={faUser}/>
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
            <Right>
                <Date>1일</Date>
                <AddContainer>
                    <ScheduleInput {...scheduleText}/>
                    <Add>+</Add>
                </AddContainer>
                <Schedules>
                        <Schedule>
                            <ScheduleText>멋사 프로젝트 회의</ScheduleText>
                            <Delete>&times;</Delete>
                        </Schedule>
                        <Schedule>
                            <ScheduleText>멋사 프로젝트 회의</ScheduleText>
                            <Delete>&times;</Delete>
                        </Schedule>
                        <Schedule>
                            <ScheduleText>멋사 프로젝트 회의멋사 프로젝트 회의멋사 프로젝트 회의</ScheduleText>
                            <Delete>&times;</Delete>
                        </Schedule>
                </Schedules>
            </Right>
        </Container>
    )
};

export default MyPage;