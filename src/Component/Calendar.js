import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const Btn = styled.div`
    width: calc(100%/7 - 20px);
    padding: 0 3px;
    box-sizing: border-box;
    text-align:center;
    cursor:pointer;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.2rem;
    margin: 10px;
`;

export default ({ myCalendar, handleClick }) => {
    let calendar = myCalendar;
    console.log(calendar);


    return (
        <Container>{
            calendar.map((date, key) => {
                return (
                    <>
                        {date.click === -1 ? (<Btn>{date.date.getDate()}</Btn>) : (
                            <>
                                {date.click === -2 && <Btn></Btn>}
                                {
                                    handleClick ? (
                                        <>
                                            {date.click === 0 && <Btn onClick={() => { handleClick(key); }}
                                                style={{ borderBottom: '4px solid #008000' }}>  {date.date.getDate()}</Btn>}
                                            {date.click === 2 && <Btn onClick={() => { handleClick(key); }}
                                                style={{ borderBottom: '4px solid #EA2027' }}>  {date.date.getDate()}</Btn>}
                                            {date.click === 1 && <Btn onClick={() => { handleClick(key); }}
                                                style={{ borderBottom: '4px solid #FFC312' }}>  {date.date.getDate()}</Btn>}
                                        </>

                                    ) : (
                                        <>
                                            {date.click === 0 && <Btn style={{ borderBottom: '4px solid #008000' }}>  {date.date.getDate()}</Btn>}
                                            {date.click === 2 && <Btn style={{ borderBottom: '4px solid #EA2027' }}>  {date.date.getDate()}</Btn>}
                                            {date.click === 1 && <Btn style={{ borderBottom: '4px solid #FFC312' }}>  {date.date.getDate()}</Btn>}
                                        </>
                                    )
                                }
                            </>
                        )}
                        {date.date.getDay() === 6 && <br />}
                    </>
                )
            }
            )
        }
        </Container>
    )
}
