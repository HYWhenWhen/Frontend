import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from "styled-components";
import Popup from "reactjs-popup";
import MypageSchedule from '../Routes/MypageSchedule';


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
`;
const Day = styled.span`
`;

const contentStyle = {
  width: "35%",
  height: "60%",
  borderRadius: "15px",
  padding: "0px",
};

const X = styled.div`
  cursor: pointer;
  position: absolute;
  right: -2.3rem;
  font-size: 2.3em;
  color: #e5eaee;
`;

export default ({}) => { 
    const [getMoment, setMoment]=useState(moment());     
    const [checkDay, setCheckDay]=useState(moment());     
    const today = getMoment;    // today == moment()   입니다.
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const WeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [loading, setLoading] = useState(false);

    const days_row = WeekDays.map((day) => (
            <WeekDay>{day}</WeekDay>
        )
    );
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
                  // case 2. 클릭된거
                  else if (checkDay.format('YYYYMMDD') === days.format('YYYYMMDD')){
                    return(
                      <Popup
                            trigger={
                              <DayContainer key={index} style={{backgroundColor:"#7953D2", borderRadius:"1rem"}} >
                                <Day >{days.format('D')}</Day>
                              </DayContainer>
                            }
                            modal
                            contentStyle={contentStyle}
                            lockScroll={true}>
                            {close => (
                                <>
                                    <X onClick={close}>&times; </X>
                                    <MypageSchedule day = {days}/>
                                </>
                            )}

                        </Popup>
                      
                  );
                  }
                  // 기본
                  else{
                    return(
                        <DayContainer key={index}  >
                          <Day onClick ={()=>{setCheckDay(days)}}>{days.format('D')}  </Day>
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
      <>
      {loading ? (
        <></>
      ):(
        <Container>
          <Controller>
            <Btn onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>&lt; </Btn>
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
      )}
    </>
    );
}