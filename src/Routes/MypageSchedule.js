import React, { useState } from 'react';
import useInput from '../Hooks/useInput';
import moment from 'moment';

import styled from "styled-components";

// 오른쪽
const Right = styled.div`
    text-align:center;
    padding: 5%;
    color:#000070;
    display: flex;
    flex-direction: column;
`;

const Date = styled.div`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;
const Line = styled.div`
    height: 1px;
    background-color: #707070;
    width: 70%;
    margin: 0 auto 2rem;
`;


const AddContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`;
const ScheduleInput = styled.input`
    border: 1px solid #000070;
    border-radius: 11px;
    padding: 9px;
    font-size: 0.8rem;
    width: calc(100% - 2rem);
    font-family:'NOTO SANS CJK KR';
`;
const Add = styled.div`
    font-size: 2rem;
    margin-left: 0.5rem;
    cursor: pointer;
`;

const Schedules = styled.div`
    display: flex;
    flex-direction: column;
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


export default ({day})=> {
    const scheduleText = useInput("");

    return (
        <Right>
            <Date>{day.format("D")}일</Date>
            <Line/>

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
        )
}