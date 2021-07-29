import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import Button from '../Component/Button';
import resultPreview from "../Styles/Images/resultPreview.svg";
import ResultCalendar from '../Component/ResultCalendar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import moment from 'moment';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    padding: 5%;
`;

// 왼쪽
const Left = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
`;
const PeopleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000070;
`;
const PeopleNum = styled.div`
    border: 2px solid #000070;
    border-radius: 1rem;
    padding: 3px;
    width: 30%;
    text-align: center;
    margin-top: 1rem;
`;
const PeopleTxt = styled.div`
    margin-bottom: 1rem;
`;
const PeopleImg = styled.img`
    width: 65%;
    margin: 4rem auto 0;
`;


// 가운데
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

// 오른쪽
const InfoContainer = styled.div`
   width:20%;
   display: flex;
   flex-direction:column;
   align-items: center;
   align-self: center;
`;


function Submit({match}) {
    const [loading, setLoading] = useState(true); //로딩

    const [startDate, setStartDate] = useState(moment()); 
    const [endDate, setEndDate] = useState(moment());
    const [formName, setFormName] = useState("");
    const [checkDays, setCheckDays] = useState([]); // 폼 체크된것 
    

    const getDateFormat = date => {
        return date.format("YYYY-MM-DD");
    }

    useEffect (()=>{
        axios.post("http://localhost:8080/api/get-total-page",{
          scheduleKey : "aftdzyrqvr1627543835108",
      }).then(function (response) {
          console.log(response);
          setStartDate(moment(response.data.startDate));
          setEndDate(moment(response.data.endDate));
          setFormName(response.data.scheduleName)
          setCheckDays(response.data.dates)
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
      },[]) 

    return (
        <Container>
            <Left>
                <PeopleContainer>
                    <PeopleTxt>제출인원</PeopleTxt>
                    <FontAwesomeIcon icon={faUser} style = {{fontSize: "4rem"}}/>
                    <PeopleNum>3 / 12</PeopleNum>
                </PeopleContainer>
                <PeopleImg src = {resultPreview}/>
            </Left>
            <DayContainer>
                <Info>
                    <Title>{formName}</Title>
                    <MyDays>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</MyDays>
                </Info>

                <ResultCalendar startDate={startDate} endDate={endDate} checkDays={checkDays}/> 

            </DayContainer>
            <InfoContainer>
                <Button backgroundColor="#000070" content="링크 복사하기"  ></Button>

            </InfoContainer>
        </Container>
    )
}

export default Submit;
