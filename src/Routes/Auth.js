import React, { useState } from 'react';
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import auth from "../Styles/Images/Auth.jpg"



const Container = styled.div`
    width:100%;
    height:100%;
    padding:35px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
`;

const Image = styled.img`
    height: 85%;
    width: 60%;
`;

const AuthContainer = styled.div`
    width: 35%;
    margin-left:5%;
`;

const Title = styled.div`
`;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid #FF9E1B;
    width: 80%;
    font-size: 0.9rem;
    height: 2rem;
    margin-bottom: 0.8rem;
`;

const Content = styled.div`
`;

const Text = styled.div`
    color: #FF9E1B;
    font-size: 0.9rem;
    font-weight: bold;
`;

const Button = styled.button`
  text-align:center;
  cursor:pointer;
  border:none;
  background-color: #FF9E1B;
  font-size: 0.9rem;
  width: 80%;
  height: 2.5rem;
  border-radius: 0.3rem;
  color:white;
`;


const SignupBtn = styled.div`
  text-align:center;
  cursor:pointer;
  border:none;
  background-color: #000000;
  font-size: 0.9rem;
  width: 80%;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 0.3rem;
  color:white;
  margin-top:1rem;
`;

export default ({}) => {
    const [status, setStatus] = useState("login");
    const email = useInput("");
    const password = useInput("");
    const name = useInput("");
    
    const login=()=>{
        toast("로그인 되었습니다")
        localStorage.setItem('login', true);
    }

    return (
        <Container>
            <Image src = {auth}/>
            <AuthContainer>
            {status === "login" ?
                (
                    <>
                        <form onSubmit={()=> {login()}}>
                            {/* <Title>로그인</Title> */}
                            <Content>
                                <Text>이메일</Text>
                                <Input {...email} type="email" />
                            </Content>
                            <Content>
                                <Text>비밀번호</Text>
                                <Input {...password} type="password"  />
                            </Content>
                            <Button>로그인</Button>
                        </form>
                        <SignupBtn onClick={() => { setStatus("signUp"); email.setValue(""); password.setValue(""); }} >회원가입</SignupBtn>
                    </>
                ) : (
                    <form onSubmit={()=> {toast("회원가입 되었습니다")}}>
                        {/* <Title>회원가입</Title> */}
                        <Content>
                            <Text>이메일</Text>
                            <Input {...email} type="email" />
                        </Content>
                        <Content>
                            <Text>비밀번호</Text>
                            <Input {...password} type="password" />
                        </Content>
                        <Content>
                            <Text>이름</Text>
                            <Input {...name} type="text" />
                        </Content>
                        <Button>회원가입</Button>
                    </form>
                )}
                </AuthContainer>

        </Container>
    )
}
