import React, {FC, FormEvent} from 'react';
import {CardContainer} from "./UI/CardContainer";
import {IUser} from "../types/comments";
import {useTypedSelector} from "../hooks/useTypedSelector";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addNewReply} from "../store/reducers/commentsActions";

interface NewReplyProps {
    commentId?: number,
    replyId?: number
    setReply: (value: boolean) => void;
    replyTo: string
}

const NewReply: FC<NewReplyProps> = ({commentId, setReply, replyTo}) => {
    const currentUser: IUser = useTypedSelector(state => state.commentsReducer.currentUser)
    const dispatch = useDispatch()


    const sendReplyHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newReply = {
            content: (e.currentTarget.elements[0] as HTMLInputElement).value,
            createdAt: 'date',
            id: Math.random(),
            user: currentUser,
            replyingTo: replyTo
        }
        dispatch(addNewReply(newReply, commentId!))
        e.currentTarget.reset()
        setReply(false)
    }

    return (
        <CardContainer>
            <Form onSubmit={sendReplyHandler}>
                <UserAvatar imageUrl={currentUser.image.png}/>
                <CommentInput name='reply' placeholder='Add a reply...'/>
                <SendBtn type='submit'>Reply</SendBtn>
            </Form>
        </CardContainer>
    );
};

const Form = styled.form`
  display: flex;
  width: 100%;
`

const UserAvatar = styled.div<{ imageUrl?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: blue;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`

const CommentInput = styled.input.attrs({as: 'textarea'})`
  margin: 0 20px;
  padding: 5px 10px;
  width: 79%;
  border: 1px solid var(--light-gray);
  border-radius: var(--radii);
  min-height: 100px;
  white-space: pre-wrap;
  word-break: break-word;

  :focus {
    border: 1px solid var(--moderate-blue);
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
export default NewReply;