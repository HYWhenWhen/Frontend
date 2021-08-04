import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from "styled-components";


const Container = styled.div`
  padding: 0 5%;
`;
const Controller = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    color: #000070;
`;
const Btn = styled.div`
    font-weight: bold;
    cursor: pointer;
`;
const Month = styled.span`
    margin: 0 10px;
`;

const WeekDayRow = styled.div`
    display:flex;
    cursor: pointer;
`;
const WeekDay = styled.div`
    width: calc(100%/7);
    padding: 0 3px;
    box-sizing: border-box;
    text-align: center;
    color: #BEBEBE;
    line-height: 5rem;
    font-size: 1.2rem;
`;


const CalendarContainer = styled.table`
    width:100%;
`;
const Days = styled.tbody`
    text-align: center;
`;
const Week = styled.tr`
`;
const DayContainer = styled.td`
    cursor: pointer;
    line-height: 5rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    :hover{
      background-color: #F6F6F6;
    }
`;
const Day = styled.span`
    padding: 0 1rem;
`;
// const AdjDay = styled.span`
//     padding: 0 1rem;
//     ::before{
//       content: value;
//       font-size: 0.9rem;
//       display: inline-block;
//       position: relative;
//       width: 0px;
//       top: -24px;
//       left: -1.5%;
//       color: #009432;
//     }
// `;
const Num = styled.div`
position: relative;
    top: -28px;
    font-size: 0.9rem;
    text-align: center;
    left: 40.5%;
    width: 0;
    height: 0;
    color: #009432;
`;


export default ({ startDate, endDate, checkDays}) => { 
  const start = moment(startDate);
  const end = moment(endDate);

    const [getMoment, setMoment]=useState(moment());     
    const today = getMoment;    // today == moment()   입니다.
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const WeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const days_row = WeekDays.map((day) => (
            <WeekDay>{day}</WeekDay>
        )
    );
    console.log(checkDays)


    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;

        for ( week; week <= lastWeek; week++) {
          result = result.concat(
            <Week key={week}>
                {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                    // case 1. 이번달이 아닌경우
                  if(days.format('MM') !== today.format('MM')){
                    return(
                        <DayContainer key={index}/>
                    );
                  }
                  
                  // case 2. 범위
                  else if (days.isBetween(start,end) || days.isSame(start) || days.isSame(end)){
                    const adj = checkDays[days.format("YYYY-MM-DD")].possibleCnt +  "/" +  (checkDays[days.format("YYYY-MM-DD")].possibleCnt + checkDays[days.format("YYYY-MM-DD")].adjustableCnt);
                    return(
                      <DayContainer key={index} >
                        {checkDays[days.format("YYYY-MM-DD")].availability === 0 &&
                        <Day style={{ borderBottom: '4px solid #008000' }}>{days.format('D')}</Day>
                        }
                        {checkDays[days.format("YYYY-MM-DD")].availability === 1 &&
                        <>
                        <Num>{adj}</Num>
                          <Day value ="123" style={{ borderBottom: '4px solid #FFC312' }}>{days.format('D')}</Day>
                        </>
                        }
                        {checkDays[days.format("YYYY-MM-DD")].availability  === 2 &&
                        <Day style={{ borderBottom: '4px solid #EA2027' }}>{days.format('D')}</Day>
                        }
                    </DayContainer>
                  );
                  }
                  // 기본
                  else{
                    return(
                        <DayContainer key={index}  >
                          <Day style={{ color: '#E2E2E2' }}>{days.format('D')}  </Day>
                        </DayContainer>
                    );
                  }

              })
            }
            </Week>);
        }
        return result;
      }

    return (
        <Container>
          <Controller>
            <Btn onClick={()=>{setMoment(getMoment.clone().subtract(1, 'month')) }}>&lt; </Btn>
            <Month>{today.format('YYYY 년 MM 월')}</Month>  
            <Btn onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>&gt;</Btn>
          </Controller>
          <WeekDayRow>
              {days_row}
          </WeekDayRow>
          <CalendarContainer>
          <Days>
              {calendarArr()}
          </Days>
          </CalendarContainer>
        </Container>
    );
}