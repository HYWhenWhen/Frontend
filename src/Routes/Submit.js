import React, { useState, useEffect } from 'react';
import Calendar from '../Component/Calendar';

import styled from "styled-components";
import SubmitCalendar from '../Component/SubmitCalendar';
import Button from '../Component/Button';
import useInput from '../Hooks/useInput';

const Container = styled.div`
    display: flex;
    padding: 2% 6%;
`;

const InfoContainer = styled.div`
   width:40%;
   padding-top:150px;
   display: flex;
   flex-direction:column;
   align-items: center;
`;

const DayContainer = styled.div`
    width: 60%;
`;
const Title = styled.div`
    border-bottom: 3px solid #E2E2E2;
    text-align: center;
    padding-bottom: 7px;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
`;

const Info = styled.div`
    width: 50%;
    margin: 0 auto 2rem;
    color: #000070;
`;
const MyDays = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

const Btns = styled.div`
    display: flex;
    margin-top: 14px;
    justify-content: center;
`;

const Test = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 4rem;
`;
const Des = styled.div`
    font-size: 1.8rem;
`;
const TestDay = styled.div`
    width: 6rem;
    padding: 0 3px;
    box-sizing: border-box;
    text-align:center;
    cursor:pointer;
    height: 4rem;
    line-height: 4rem;
    font-size: 2.5rem;
    margin: 20px auto;
`;



function Submit() {
    const startDate = new Date(sessionStorage.getItem("startDate"));
    const endDate = new Date(sessionStorage.getItem("endDate"));

    const formName = sessionStorage.getItem("name");
    const [testClick, setTestClick] = useState(0);


    const sendCalendar = (calendar) => {
        sessionStorage.setItem('Calendar', calendar);
        console.log(sessionStorage.getItem('Calendar'));
        window.location.replace("/#/submit/result");
    }
    const getDateFormat = date => {
        let reVal = "";
        reVal += date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate();
        return reVal;
    }

    return (
        <Container>
            <DayContainer>
                <Info>
                    <Title>{formName}</Title>
                    <MyDays>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</MyDays>
                    <Btns>
                        <Button fontSize="0.9rem" content="내 일정 불러오기" backgroundColor="#000070" marginRight="4rem"/>
                        <Button fontSize="0.9rem" content="일정참여 포기하기" backgroundColor="#7953D2"/>
                    </Btns>
                </Info>
                <SubmitCalendar startDate = {startDate} endDate={endDate}/>
            </DayContainer>
            <InfoContainer>
                <Test>
                    <Des>클릭해보세요</Des>
                        {testClick === 0 && 
                        <>
                            <TestDay onClick={() => { setTestClick((testClick + 1) % 3) }} style={{ borderBottom: '4px solid #008000' }}>1</TestDay>
                            <Des >가능한 날</Des>
                        </>
                        }
                        {testClick === 2 && 
                        <>
                            <TestDay onClick={() => { setTestClick((testClick + 1) % 3) }} style={{ borderBottom: '4px solid #EA2027' }}>1</TestDay>
                            <Des >불가능한 날</Des>
                        </>
                        }
                        {testClick === 1 && 
                        <>
                            <TestDay onClick={() => { setTestClick((testClick + 1) % 3) }} style={{ borderBottom: '4px solid #FFC312' }}>1</TestDay>
                            <Des >조정 가능한 날</Des>
                        </>
                        }
                </Test>
                <Button backgroundColor="#000070" content="제출하기"  onClick={() => { sendCalendar(); }}></Button>

            </InfoContainer>
        </Container>
    )
}

export default Submit;
