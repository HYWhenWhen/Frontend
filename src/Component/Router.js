import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Main from "../Routes/Main";
import Form from "../Routes/Form";
import Submit from "../Routes/Submit";
import MyPage from "../Routes/MyPage";
import FormResult from "../Routes/FormResult";
import Auth from "../Routes/Auth";

import styled from "styled-components";
import ResultPage from "../Routes/ResultPage";

const Wrapper = styled.div`
    display: flex; 
    min-height: 100vh; 
    flex-direction: column;
`;

const Contents = styled.div`
    flex:1;
    display: flex;
`;
console.log(localStorage.getItem("login"));

export default () => (
    <Wrapper>
        <Router>
            <Header />
            <Contents>
                <Switch>
                    <Route exact path="/" exact component={Main} />
                    <Route path="/submit" component={Submit} />
                    {localStorage.getItem("login") == null ||localStorage.getItem("login") == undefined ?(
                        <>
                            <Route path="/myPage" component={MyPage} />
                            <Route path="/result" component={ResultPage} />
                            <Route exact path="/form" component={Form} />
                            <Route exact path="/form/result" component={FormResult} />
                        </>
                    ):(
                        <Route exact path="/auth" component={Auth} />
                    )}
                    <Redirect path="*" to="/" />
                </Switch>
            </Contents>
        </Router>
    </Wrapper>
);
