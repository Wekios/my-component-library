import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { useSpring, animated, config } from "react-spring";

import Illustrations from "../assets/Illustrations";
import { PrimaryButton } from "./Button";
import { CloseIcon } from "../assets/Icons/CloseIcon";

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

export const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

export const SignUpText = styled.h3`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
`;

export const SignUpModal = ({ show, setShow }) => {
  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0%)` : `translateY(-200%)`,
    config: config.slow,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt="" width="50%" />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign Up today to get access</SignUpText>
        <PrimaryButton>Submit!</PrimaryButton>
        <CloseModalButton
          aria-label="close modal"
          onClick={() => setShow(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
