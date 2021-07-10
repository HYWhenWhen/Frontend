import React, { useRef } from 'react';
import Result from "./Result";
import styled from "styled-components";
const Container = styled.div`
   display: flex;
`;

const InfoContainer = styled.div`
   width:35%;
   display: flex;
   flex-direction: column;
   padding: 7% 0 0 8%;
   box-sizing: border-box;
   color:#FF9E1B;
   text-align: center;
`;

const Mypage = styled.div`
   font-size: 1.5rem;
   margin-bottom: 5rem;
`;

const Schedule = styled.div`
    border-bottom: 1px solid black;
    text-align: center;
    padding-bottom: 7px;
    margin-bottom: 3rem;
    font-size: 1.2rem;
`;

const Days = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

const FixBtn = styled.div`
    margin: 5rem auto 0;
    background-color: #000000;
    padding: 15px 55px;
    border-radius: 0.5rem;
    width: 6rem;
    cursor:pointer;
    color:white;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
`;

const LinkCopyBtn = styled.button`
    margin: 5rem auto 0;
    background-color: #FF9E1B;
    padding: 15px 55px;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
    cursor:pointer;
    color:white;
    box-shadow: 1px 2px 5px 0px #bfbfbf;
    font-size: 1rem;
`;

const LinkName = styled.input`
    display:none;
`;

const getDateFormat = date => {
    let reVal = "";
    reVal += date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate();
    return reVal;
}
function MyPage() {
    const startDate = new Date(sessionStorage.getItem("startDate"));
    const endDate = new Date(sessionStorage.getItem("endDate"));
    const formName = sessionStorage.getItem("name");
    
    const textInput = useRef();
    const str = "http://localhost:3000/#/submit";
    const copy = () => {
        const el = textInput.current;
        el.select();
        document.execCommand("copy");
    }

    return (
        <Container>
            <InfoContainer>
                <Mypage>마이페이지</Mypage>
                <Schedule>{formName}</Schedule>
                <Days>{getDateFormat(startDate)} ~ {getDateFormat(endDate)}</Days>
                {/* <FixBtn>일정 확정하기</FixBtn> */}
                <>
                <LinkName  type="text" value={str} ref={textInput} readOnly></LinkName>
                <LinkCopyBtn onClick={copy}>
                    링크 공유</LinkCopyBtn>
                    </>
                    
            </InfoContainer>
            <Result></Result>
        </Container>
    )
};

export default MyPage;