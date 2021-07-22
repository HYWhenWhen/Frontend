import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../Component/Button';
import SubmitResult from "../Styles/Images/SubmitResult.svg";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10%;

`;

const Img = styled.img`
    width: 70%;
    margin: -20% auto;
`;

const Btns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -1rem;
`;



export default ({}) => {
    const title = "멋쟁이 사자처럼 해커톤 회의";
    return (
    <Container>
        <Img src = {SubmitResult}/>
        <Btns>
            <Button backgroundColor="#000070" content="링크 복사하기" marginRight="2.5rem"/>
            <Button backgroundColor="#7953D2" content="메인화면" onClick={()=>{window.location.replace("/")}}/>
        </Btns>
    </Container>
    );
}