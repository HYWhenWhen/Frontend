import React, { useState } from 'react';
import styled from "styled-components";
import { ko } from 'react-date-range/dist/locale';

import { DateRange } from 'react-date-range';
import '../Styles/Form.css'
import useInput from '../Hooks/useInput';
import Button from '../Component/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";



const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 20%;
`;

const Buttons = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 5rem;
    text-align: center;
    color:white;
`;

const Name = styled.input`
    width: 60%;
    margin: 0 20% 20px;
    font-size: 1.3rem;
    border: none;
    border-bottom: 2px solid #E2E2E2;
    font-family: 'Noto Sans CJK KR';
    text-align: center;
`;

const PeopleNum = styled.div`
    display: flex;
    justify-content: center;
    color: #000070;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    align-items: center;
`;
const PeopleTxt = styled.div`
    margin: 0 1rem;
`;

const NumController = styled.div`
    display: flex;
    align-items: center;
`;

const PM = styled.div`
    font-size: 2rem;
    cursor: pointer;
`;

const Num = styled.div`
    border: 2px solid #000070;
    border-radius: 2rem;
    width: 7rem;
    text-align: center;
    margin: 0 0.5rem;
    
`;


export default ({ }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            color: "#000000"
        }
    ]);
    const name = useInput("");

    const make=()=>{
        sessionStorage.setItem('startDate', state[0].startDate);
        sessionStorage.setItem('endDate', state[0].endDate);
        sessionStorage.setItem('name', name.value);
        window.location.replace("/#/form/result")
    }
    const [num, setNum] = useState(1);

    return (
        <Container>
            <Name {...name} placeholder ="일정 이름"></Name>
            <PeopleNum>
                <FontAwesomeIcon icon={faUser}/>
                <PeopleTxt> 인원설정 </PeopleTxt>
                <NumController>
                    <PM onClick ={()=>{if(num ==1) alert("인원수는 1명 이상이어야합니다."); else setNum(num-1);}}> - </PM>
                    <Num>{num}</Num>
                    <PM onClick ={()=>{setNum(num+1)}}> + </PM>
                </NumController>

            </PeopleNum>

            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                locale={ko}
                 months={2}
                 direction="horizontal"
            />
            <Buttons>
                <Button onClick={()=>{window.location.replace("/")}} content="취소" backgroundColor="#7953D2" marginRight="20px"/>
                <Button onClick={()=>{make()}} content="일정 생성하기" backgroundColor="#000070"/>
            </Buttons>

        </Container>
    )
}
