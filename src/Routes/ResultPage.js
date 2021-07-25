import React, { useState } from 'react';
import Calender from '../Component/Calendar';

import styled from "styled-components";
import SubmitCalendar from '../Component/SubmitCalendar';
import Button from '../Component/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useInput from '../Hooks/useInput';

const Container = styled.div`
    display: flex;
    padding: 2% 6%;
`;

const SubmissionContainer = styled.div`
    display : flex;
    flex-direction : column;
    text-align : center;
    width : 20%;
    padding-top : 150px;
`;

const CalendarContainer = styled.div`
    display : flex;
    width : 70%
    text-align : center;
`;

const BtnContainer = styled.div`

`;

const CountTitle = styled.div`
    color : #000070;
    width : 5rem;
    height : 1rem;
    margin : auto;
    align-items : center;
    font-size : 1rem;
`;

const UserLogo = styled.div`
    color : #000070;
    width : 5rem;
    height : 1rem;
    margin : auto;
    align-items : center;
    font-size : 2.5rem;
`;

const SubmitCount = styled.div`
    color : #000070;
    width : 5rem;
    height : 1rem;
    margin : auto;
    align-items : center;
    border : 2px solid #000070;
    padding : 5%;
    line-height : 1.5rem;
    display : flex;
    flex-direction : column;
    border-radius : 2rem;
`;

const Title = styled.div`
    border-bottom : 3px solid #E2E2E2;
    text-align : center;
    padding-bottom : 7px;
    margin-bottom : 1.5rem;
    font-size : 1.2rem;
`;

const SettingDays = styled.div`
    text-align = center;
    font-size = 1.2rem;
`;

function ResultPage() {
    const startDate = new Date(sessionStorage.getItem("startDate"));
    const endDate = new Date(sessionStorage.getItem("endDate"));

    const formName = sessionStorage.getItem("name");
    const [testClick, setTestClick] = useState(0);


    const sendCalendar = (calendar) => {
        sessionStorage.setItem('Calendar', calendar);
        console.log(sessionStorage.getItem('Calendar'));
        window.location.replace("/#/myPage");
    }
    const getDateFormat = date => {
        let reVal = "";
        reVal += date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate();
        return reVal;
    }

    return (
        <Container>
            <SubmissionContainer>
                <CountTitle>제출 인원</CountTitle>
                <UserLogo>
                    <FontAwesomeIcon icon={faUser}/>
                </UserLogo>
                <SubmitCount>
                    num/total
                </SubmitCount>
            </SubmissionContainer>

            <CalendarContainer>
                <Title>{formName}</Title>
                <SettingDays>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</SettingDays>
                <SubmitCalendar startDate = {startDate} endDate = {endDate}/>
            </CalendarContainer>

            <BtnContainer>
                <Button backgroundColor = "#000070" content = "링크 복사하기" onClick={() => {sendCalendar(); }}></Button>
            </BtnContainer>
        </Container>
    )
}

export default ResultPage;