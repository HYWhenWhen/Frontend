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
`;
const Day = styled.span`
    padding: 0 1rem;
`;


export default ({ startDate, endDate }) => { 
    const start = moment(startDate);
    const end = moment(endDate);

    const cnt  = moment.duration(end.diff(start)).asDays();
    const [checkDays, setCheckDays] = useState([]);
    const [loading, setLoading] = useState(true);
    let check_tmp = [];

    useEffect (()=>{
      for(let i = 0; i<=cnt; i++){
        const now = start.clone().add(i,'days');
        const year = now.format("YYYY");
        const month = now.format("MM");
        const day = now.format("DD");
        check_tmp = [...check_tmp,{
          day: new Date(year, month, day),
          count : 0,
        }]
      }
      setCheckDays([...check_tmp])
      setLoading(false);
    },[])    


    const [getMoment, setMoment]=useState(moment());     
    const today = getMoment;    // today == moment()   입니다.
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const WeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const days_row = WeekDays.map((day) => (
            <WeekDay>{day}</WeekDay>
        )
    );
    const handleClick=(days)=>{
      const tmp = checkDays;
      tmp[days.diff(start,'days')].count = (tmp[days.diff(start,'days')].count +1) %3;
      setCheckDays([...tmp]);
    }

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
                  else if (start.format('YYYYMMDD')<= days.format('YYYYMMDD') &&  days.format('YYYYMMDD')<= end.format('YYYYMMDD')){
                    
                    return(
                      <DayContainer key={index} onClick={()=>{handleClick(days)}}>
                        
                      {checkDays[days.diff(start,'days')].count %3 === 0 &&
                      <Day style={{ borderBottom: '4px solid #008000' }}>{days.format('D')}</Day>
                      }
                      {checkDays[days.diff(start,'days')].count %3 === 1 &&
                      <Day style={{ borderBottom: '4px solid #FFC312' }}>{days.format('D')}</Day>
                      
                      }
                      {checkDays[days.diff(start,'days')].count %3 === 2 &&
                      <Day style={{ borderBottom: '4px solid #EA2027' }}>{days.format('D')}</Day>
                      }

                    </DayContainer>
                  );
                  }
                  // 기본
                  else{
                    return(
                        <DayContainer key={index}  >
                          <Day style={{ color: '#dedede' }}>{days.format('D')}  </Day>
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