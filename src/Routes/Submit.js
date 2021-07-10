import React, { useState, useEffect } from 'react';
import Calendar from '../Component/Calendar';

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 3%;
`;

const InfoContainer = styled.div`
   width:35%;
   padding-top:150px;
`;

const DayContainer = styled.div`
    width: 65%;
`;

const Test = styled.div`
display: flex;
    flex-direction: column;
    text-align: center;
    font-size:1.3rem;
`;

const Text = styled.div`
`;

const Number = styled.div`
`;

const Des = styled.div`
`;



const DayRow = styled.div`
    display:flex;
    cursor: pointer;
`;

const Day = styled.div`
    width: calc(100%/7);
    padding: 0 3px;
    box-sizing: border-box;
    text-align: center;
    color: #BEBEBE;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.2rem;
`;

const Cal = styled.div`
`;

const TestDay = styled.div`
`;
const Info = styled.div`
    width: 50%;
    margin: 0 auto 2rem;
    color: #FF9E1B;
`;

const Title = styled.div`
    border-bottom: 1px solid black;
    text-align: center;
    padding-bottom: 7px;
    margin-bottom: 3rem;
    font-size: 1.2rem;
`;


const MyDays = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

const Btn = styled.div`
    width: 3rem;
    padding: 0 3px;
    box-sizing: border-box;
    text-align:center;
    cursor:pointer;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    margin: 20px auto;
`;

const SubmitBtn = styled.div`
    margin: 5rem auto 0;
    background-color: #FF9E1B;
    padding: 15px 55px;
    border-radius: 0.5rem;
    width: 6rem;
    cursor:pointer;
    color:white;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
    text-align: center;
`;
const ResetBtn = styled.div`
    margin: 1rem auto 0;
    background-color: #000000;
    padding: 15px 55px;
    border-radius: 0.5rem;
    width: 6rem;
    cursor:pointer;
    color:white;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
    text-align: center;
`;

function Submit() {
    const startDate = new Date(sessionStorage.getItem("startDate"));
    const endDate = new Date(sessionStorage.getItem("endDate"));

    const formName = sessionStorage.getItem("name");

    const disableClick = -1;
    const ableClick = 0;
    const outRangeClick = -2;

    let tmpDate = new Date(startDate);
    tmpDate.setDate(1);

    let lastDate = new Date(endDate);
    lastDate.setMonth(endDate.getMonth() + 1);
    lastDate.setDate(1);

    let [calendar, setCalendar] = useState([]);
    const [initial, setInital] = useState(true);
    const [testClick, setTestClick] = useState(0);

    let count = 0;

    if (initial) {
        while (count < tmpDate.getDay()) {
            calendar = [...calendar, { date: tmpDate, click: outRangeClick }];
            count++;
        }
        while (tmpDate < startDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: disableClick }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (tmpDate <= endDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: ableClick }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (tmpDate < lastDate) {
            const tmp = new Date(tmpDate);
            calendar = [...calendar, { date: tmp, click: disableClick }];
            tmpDate.setDate(tmpDate.getDate() + 1);
            count++;
        }
        while (count % 7 !== 0) {
            calendar = [...calendar, { date: tmpDate, click: outRangeClick }];
            count++;
        }
        setInital(false);
        setCalendar(calendar);
    }

    const resetCalendar = (calendar) => {
        calendar.map((date) => {
            if (date.click >= 0 && date.click < 3) {
                date.click = ableClick;
            }
        })
        setCalendar(calendar);
    }

    const sendCalendar = (calendar) => {
        sessionStorage.setItem('Calendar', calendar);
        console.log(sessionStorage.getItem('Calendar'));
        window.location.replace("/#/myPage");
    }

    useEffect(() => {
        calendar = [...calendar]
    }, [calendar, testClick]);

    const handleClick = (key) => {
        const newC = calendar;
        newC[key].click = (newC[key].click + 1) % 3;
        setCalendar(newC);
    }

    const key_value = 0;
    console.log(startDate, endDate);
    const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days_row = Days.map(
        (day) => (
            <Day>{day}</Day>
        )
    );

    const getDateFormat = date => {
        let reVal = "";
        reVal += date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate();
        return reVal;
    }

    return (
        <Container>
            <InfoContainer>
                <Test>
                    <Text>클릭해보세요</Text>
                        {testClick === 0 && <Btn onClick={() => { setTestClick((testClick + 1) % 3) }}
                            style={{ borderBottom: '4px solid #008000' }}>  1</Btn>}
                        {testClick === 2 && <Btn onClick={() => { setTestClick((testClick + 1) % 3) }}
                            style={{ borderBottom: '4px solid #EA2027' }}>  1</Btn>}
                        {testClick === 1 && <Btn onClick={() => { setTestClick((testClick + 1) % 3) }}
                            style={{ borderBottom: '4px solid #FFC312' }}>  1</Btn>}
                    {testClick === 0 && <Des >가능한 날</Des>}
                    {testClick === 2 && <Des >불가능한 날</Des>}
                    {testClick === 1 && <Des >조정 가능한 날</Des>}

                </Test>
                <SubmitBtn onClick={() => { sendCalendar(); }}>제출하기</SubmitBtn>
                <ResetBtn onClick={() => { resetCalendar(calendar); }}>다시 입력하기</ResetBtn>
            </InfoContainer>
            <DayContainer>
                <Info>
                    <Title>{formName}</Title>
                    <MyDays>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</MyDays>

                </Info>
                <DayRow>
                    {days_row}
                </DayRow>
                <Cal>
                    <Calendar myCalendar={calendar} key={key_value} handleClick={handleClick}></Calendar>
                </Cal>
            </DayContainer>
        </Container>
    )
}

export default Submit;
