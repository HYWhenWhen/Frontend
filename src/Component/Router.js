import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../Routes/Main";
import Form from "../Routes/Form";
import Submit from "../Routes/Submit";
import MyPage from "../Routes/MyPage";

import styled from "styled-components";

const Wrapper = styled.div`
    display: flex; 
    min-height: 100vh; 
    flex-direction: column;
`;

const Contents = styled.div`
    flex:1;
`;

export default () => (
    <Wrapper>
        <Router>
            <Header />
            <Contents>
                <Switch>
                    <Route exact path="/" exact component={Main} />
                    <Route path="/form" component={Form} />
                    <Route path="/submit" component={Submit} />
                    <Route path="/myPage" component={MyPage} />
                    <Redirect path="*" to="/" />
                </Switch>
            </Contents>
            <Footer />
        </Router>
    </Wrapper>
);
