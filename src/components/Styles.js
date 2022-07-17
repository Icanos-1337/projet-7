import styled from 'styled-components';
import background from './../assets/background.png'

import {Link} from 'react-router-dom';

export const colors ={
    primary : "#FD2D01",
    secondary : "#FFD7D7",
    tertiaire : "#4E5166",
    white: "#fff",
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

// Home

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.secondary};
    padding: 5px;
    margin-bottom: 20px;
    margin-top: 35px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.secondary};
    padding: 5px;
    margin-bottom: 25px;
`;

export const Avatar = styled.div`
    width: 99%;
    height: 63px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const Avatar2 = styled.div`
    width: 29%;
    height: 63px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const AvatarProfile = styled.div`
    width: 36%;
    height: 200px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.secondary};
    border-radius: 25px;
    color: ${colors.secondary};
    text-align: center;
    transition: ease-in-out 0.3s;
    text-decoration: none;
    outline: 0;

    &:hover {
        background-color: ${colors.tertiaire};
        color: ${colors.secondary};
        cursor: pointer;

    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 50px;
`;

// Input

export const StyledTextInput = styled.input`
    width: 347px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    box-shadow: 1px 0px 4px rgba(0,0,0,0.2);
    outline: 0;
    letter-spacing: 1px;
    color: ${colors.tertiaire};
    border: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.primary}; color: ${colors.tertiare};`}

    &:focus {
        background-color: ${colors.secondary};
        color: ${colors.tertiaire};
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.white};
    text-align: center;
    padding: 32px 55px;
    border-radius: 12px;

`;

export const StyledFormButton = styled.button`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 16px;
border: 2px solid ${colors.tertiaire};
border-radius: 25px;
color: ${colors.tertiaire};
outline: 0;

text-align: center;
transition: ease-in-out 0.3s;
text-decoration: none;

&:hover {
    background-color: ${colors.tertiaire};
    color: ${colors.white};
    cursor: pointer;

}
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.primary};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color? props.color : colors.tertiaire)};
    padding: 2px;
    margin-top: 15px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};

    &:hover {
        text-decoration: underline;
    }
`;

// Icons

export const StyledIcon = styled.p`
    color: ${colors.tertiaire};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px; `}
    ${(props) => !props.right && `left: 15px; `};

`;

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.white};
`;
