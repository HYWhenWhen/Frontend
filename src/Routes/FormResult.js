import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../Component/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10%;
    align-items: center;
`;

const Text = styled.div`
    color: #000070;
    font-size: 2rem;
    margin-bottom: 3rem;
`;

const Title = styled.div`
    color: #7953D2;
    font-size: 1.6rem;
    border-bottom: 2px solid #7953D2;
    padding-bottom: 10px;
    margin-bottom: 4rem;
`;

const Btns = styled.div`
    display: flex;
    flex-direction: row;
`;



export default ({}) => {
    const title = "멋쟁이 사자처럼 해커톤 회의";
    return (
    <Container>
        <Text> 일정이 생성되었습니다. </Text>
        <Title>{title}</Title>
        <Text>모두의 일정을 모아보세요</Text>
        <Btns>
            <Button backgroundColor="#000070" content="링크 복사하기" marginRight="2.5rem"/>
            <Button backgroundColor="#7953D2" content="메인화면" onClick={()=>{window.location.replace("/")}}/>
        </Btns>
    </Container>
    );
}