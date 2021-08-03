import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Main from "../Routes/Main";
import Form from "../Routes/Form";
import Submit from "../Routes/Submit";
import SubmitResult from "../Routes/SubmitResult";
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
`;
console.log(localStorage.getItem("login"));

export default () => (
    <Wrapper>
        <Router>
            <Header />
            <Contents>
                <Switch>
                    <Route exact path="/" exact component={Main} />
                    <Route exact path="/submit/:id" component={Submit} />
                    <Route exact path="/result/submit/:id" component={SubmitResult} />
                    <Route path="/myPage" component={MyPage} />
                    <Route path="/result/:id" component={ResultPage} />
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/form/result/:id" component={FormResult} />
                    <Route exact path="/auth" component={Auth} />
                   
                    <Redirect path="*" to="/" />
                </Switch>
            </Contents>
        </Router>
    </Wrapper>
);
