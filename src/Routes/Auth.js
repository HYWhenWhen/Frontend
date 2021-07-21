import React, {useState} from 'react';
import styled from "styled-components";
import { GoogleLogin } from 'react-google-login';


const Container = styled.div`
    width:100%;
    height:100%;
    padding:35px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
`;


export default ({}) => {
    const clientId = "187020779465-9ie61b7h5kkniltgsjgs7nsq75g56f20.apps.googleusercontent.com"
  const [userObj, setUserObj]=useState({})
  //로그인 성공시 res처리
  const onLoginSuccess=(res)=>{
    setUserObj({
      name:res.profileObj.name,
      token:res.accessToken
    })
    localStorage.setItem('login', userObj.token);
    window.location.replace("/");
  }
  console.log(userObj);

    return (
        <Container>
                        <GoogleLogin 
                         clientId={clientId}
                         buttonText="구글로 로그인하기"
                         onSuccess={result=>onLoginSuccess(result)}
                         onFailure={result => console.log(result)}
                         cookiePolicy={'single_host_origin'}
                    />

        </Container>
    )
}
