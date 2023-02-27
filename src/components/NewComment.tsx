import React, {FC, FormEvent} from 'react';
import {CardContainer} from "./UI/CardContainer";
import styled from "styled-components";
import {IUser} from "../types/comments";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addNewComment} from "../store/reducers/commentsActions";

const NewComment: FC = () => {

    const currentUser: IUser = useTypedSelector(state => state.commentsReducer.currentUser)
    const dispatch = useDispatch()
    const sendPostHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newComment = {
            content: (e.currentTarget.elements[0] as HTMLInputElement).value,
            createdAt: 'date',
            id: Math.random(),
            user: currentUser
        }
        dispatch(addNewComment(newComment))
        e.currentTarget.reset()
    }

    return (
        <CardContainer>
            <Form onSubmit={sendPostHandler}>
                <Div>
                    <UserAvatar imageUrl={currentUser.image.png}/>
                    <CommentInput name='comment' placeholder='Add a comment...'/>
                </Div>
                <SendBtn type='submit'>Send</SendBtn>
            </Form>
        </CardContainer>
    );
};

const Form = styled.form`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }

`
const Div = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`

const UserAvatar = styled.div<{ imageUrl?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`

const CommentInput = styled.input.attrs({as: 'textarea'})`
  margin: 0 20px;
  padding: 5px 10px;
  width: 90%;
  border: 1px solid var(--light-gray);
  border-radius: var(--radii);
  min-height: 100px;
  white-space: pre-wrap;
  word-break: break-word;

  :focus {
    border: 1px solid var(--moderate-blue);
  }

  @media (max-width: 400px) {
    margin: 0 10px;
    width: 75%;
  }

`
const SendBtn = styled.button`
  background-color: var(--moderate-blue);
  padding: 10px 25px;
  border: none;
  outline: none;
  border-radius: var(--radii);
  text-transform: uppercase;
  color: var(--white);
  max-height: 40px;
  cursor: pointer;
  transition: all ease 0.1s;

  :hover {
    background-color: var(--light-grayish-blue);
  }
`

export default NewComment;