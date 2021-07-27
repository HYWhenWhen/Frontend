import React, { useState } from 'react';
import useInput from '../Hooks/useInput';
import moment from 'moment';
import Clip from "../Styles/Images/Clip.svg";
import MypageModal from "../Styles/Images/MypageModal.svg";

import styled from "styled-components";

const Container = styled.div`
    text-align:center;
    color:#000070;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    display: flex;
    background-color: #E2E2FF;
    padding: 3% 5%;
    height: 4rem;
`;

const ClipImg = styled.img`
    position: absolute;
    width: 2.5rem;
    top: -10px;
    left: 44px;
`;

const Date = styled.div`
    font-size: 1rem;
    width: 15%;
    background-color: white;
    border-radius: 0.5rem;
    margin-right: 1rem;
    line-height: 1.3rem;
    overflow: hidden;
`;
const BluePart = styled.div`
    background-color: #000070;
    margin-bottom: 5px;
`;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`;
const ScheduleInput = styled.input`
    border: none;
    border-radius: 25px;
    padding: 5px;
    font-size: 0.8rem;
    width: calc(100% - 5rem);
    font-family:'NOTO SANS CJK KR';
    text-align: center;
    color: #666666;
`;
const Add = styled.div`
    font-size: 1.7rem;
    margin-left: 1rem;
    cursor: pointer;
    width: 4rem;
    color: white;
    border-radius: 1rem;
    background-color: #000070;
`;

const Schedules = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5% 3%;
`;
const Schedule = styled.div`
    display: flex;
    border-bottom: 1px solid #E2E2E2;
    line-height: 3rem;
    font-size: 0.9rem;
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


export default ({day})=> {
    const scheduleText = useInput("");

    return (
        <Container>
            <Top>
                <ClipImg src = {Clip}/>
                <Date>
                    <BluePart>.</BluePart>
                    {day.format("D")}일
                </Date>
                <AddContainer>
                    <ScheduleInput {...scheduleText} placeholder="일정을 추가하세요."/>
                    <Add>+</Add>
                </AddContainer>
            </Top>
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
        </Container>
        )
}