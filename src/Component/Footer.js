import React, {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";



const Footer = styled.footer`
    height: 4rem;
    width: 100%;
    background-color: black;
`;


const Info = styled.div`
    color: white;
    font-size: 1.5rem;
    line-height: 4rem;
    text-align: center;
`;

export default ()=>{
    return (
        <Footer>
            <Info>
            <FontAwesomeIcon icon={faInstagram} style={{marginRight:"20px"}}/>
            <FontAwesomeIcon icon={faTwitter} style={{marginRight:"20px"}}/>
            <FontAwesomeIcon icon={faFacebookF} style={{marginRight:"20px"}}/>
            </Info>
        </Footer>

    )
}