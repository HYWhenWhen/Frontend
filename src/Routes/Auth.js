import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { GoogleLogin } from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';

const Container = styled.div`
    width:100%;
    height:100%;
    padding:35px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
`;

// const KaKaoBtn = styled(KaKaoLogin)`
//     padding: 0;
//     width: 190px;
//     height: 44px;
//     line-height: 44px;
//     color: #783c00;
//     background-color: #FFEB00;
//     border: 1px solid transparent;
//     border-radius: 3px;
//     font-size: 16px;
//     font-weight: bold;
//     text-align: center;
//     cursor: pointer;
//     &:hover{
//         box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
//     }
// `

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
  })


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
          <NaverLogin 
                clientId={"XeM0NxCkHE0demSf3Y1j"}
                callbackUrl ="http://localhost:3000/auth"
                render={(props) => <div onClick={props.onClick}>Naver Login</div>}
                onSuccess={result=>console.log(result)}
                onFailure={result => console.log(result)}
        />
        </Container>
    )
}
