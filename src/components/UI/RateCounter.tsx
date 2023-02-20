import React, {PropsWithChildren} from 'react';
import styled from "styled-components";


interface RateCounterProps extends PropsWithChildren {

}

const RateCounter: React.FC<RateCounterProps> = ({children}) => {
    return (
        <RateCounterWrapper>
            <Btn>+</Btn>
            <Rate>{children}</Rate>
            <Btn>−</Btn>
        </RateCounterWrapper>
    );
};

const Btn = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: transparent;  
  color: var(--light-grayish-blue);
  font-size: 20px;
  transition: all ease 0.2s;
  :hover {
    color: var(--moderate-blue);
  }
`

const Rate = styled.div`
 margin: 5px 0;
  color: var(--moderate-blue);
  font-size: 18px;
  font-family: var(--family);
  font-weight: 500;

`
const RateCounterWrapper = styled.div`
  text-align: center;
  background-color: var(--very-light-gray);
  padding: 3px 5px;
  width: 50px;
  height: 95px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;

`

export default RateCounter;