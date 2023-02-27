import React, {PropsWithChildren} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {
    decrementRate,
    decrementRateReply,
    incrementRate,
    incrementRateReply
} from "../../store/reducers/commentsActions";

interface RateCounterProps extends PropsWithChildren {
    commentId?: number,
    replyId?: number
}

const RateCounter: React.FC<RateCounterProps> = ({
                                                     children,
                                                     commentId,
                                                     replyId
                                                 }) => {
    const dispatch = useDispatch()
    const rateIncrementHandler = () => {
        if (commentId) {
            dispatch(incrementRate(commentId))
        } else if (replyId) {
            dispatch(incrementRateReply(replyId))
        }

    }
    const rateDecrementHandler = () => {
        if (commentId) {
            dispatch(decrementRate(commentId))
        } else if (replyId) {
            dispatch(decrementRateReply(replyId))
        }
    }

    return (
        <RateCounterWrapper>
            <Btn onClick={rateIncrementHandler}>+</Btn>
            <Rate>{children}</Rate>
            <Btn onClick={rateDecrementHandler}>−</Btn>
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
  @media (max-width: 600px) {
    margin: 6px auto;
  }

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
  @media (max-width: 600px) {
    flex-direction: row;
    width: 130px;
    height: 40px;

  }
`

export default RateCounter;