import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { GoogleLogin } from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';
import axios from 'axios';

const Container = styled.div`
    width:100%;
    height:100%;
    padding:35px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
`;


function loginApi() {
  const url = "http://localhost:8080/api/log-in";
  axios.post(url,{
    idToken: "A2"
  })
  .then(function(response) {
      console.log(response);
  })
  .catch(function(error) {
      console.log("err");
      console.log(error);
  })
  
}


export default ({}) => {
  const [userObj, setUserObj]=useState({})

  // 구글
  const googleLoginFunc=(res)=>{
    console.log(res.profileObj.googleID);
    setUserObj({
      token:res.accessToken
    })
    localStorage.setItem("login", userObj.token);

  }

    // 카카오
    const kakaoLoginFunc=(res)=>{
      console.log(res.response);
      setUserObj({
        token:res.response.access_token
      })
      localStorage.setItem("login", userObj.token);
    }


  useEffect(()=>{
    console.log(userObj);
    localStorage.setItem("login", userObj.token);
    console.log(localStorage.getItem('login'));
  })
  loginApi();


    return (
        <Container>
            <GoogleLogin 
                clientId={"187020779465-9ie61b7h5kkniltgsjgs7nsq75g56f20.apps.googleusercontent.com"}
                buttonText="구글로 로그인하기"
                onSuccess={result=>googleLoginFunc(result)}
                onFailure={result => console.log(result)}
                cookiePolicy={'single_host_origin'}
        />
          <KaKaoLogin
                token={'cb21585076043446225f15568416bac0'}
                buttonText='카카오 계정으로 로그인'
                onSuccess={response=>kakaoLoginFunc(response)}
                getProfile={true}
          />

        </Container>
    )
}
