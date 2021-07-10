import React, { useState,useEffect } from 'react';
import Calendar from "../Component/Calendar";
import styled from "styled-components";
const Container = styled.div`
    width: 70%;
    padding: 5% 10%;
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
function Result() {
    const startDate = new Date(sessionStorage.getItem("startDate"));
    const endDate = new Date(sessionStorage.getItem("endDate"));

    const key_value = 0;   
    const disableClick = -1;
    const outRangeClick = -2;
    let tmpDate = new Date(startDate);
    tmpDate.setDate(1);
    let lastDate = new Date(endDate);
    lastDate.setMonth(endDate.getMonth() + 1);
    lastDate.setDate(1);

    let [calendar, setCalendar] = useState([]);
    const [initial, setInital] = useState(true);
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
            calendar = [...calendar, { date: tmp, click: getRandomInt(0,3) }];
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

    useEffect(() => {
        calendar = [...calendar]
    }, [calendar]);


    const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const days_row = Days.map(
        (day) => (
            <Day>{day}</Day>
        )
    );
    
    return (
        <Container>
            <DayRow>
                {days_row}
            </DayRow>
            <Calendar key={key_value} myCalendar={calendar} ></Calendar>
        </Container>
    )
}
export default Result;
