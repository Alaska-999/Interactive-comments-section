import React, {FC, FormEvent} from 'react';
import {CardContainer} from "./UI/CardContainer";
import {IUser} from "../types/comments";
import {useTypedSelector} from "../hooks/useTypedSelector";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addNewReply} from "../store/reducers/commentsActions";
import CommentForm from "./UI/CommentForm";

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
        if ((e.currentTarget.elements[0] as HTMLInputElement).value != '') {
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
        } else {
            console.log('empty input')
        }

    }

    return (
        <CardContainer>
            <Form onSubmit={sendReplyHandler}>
                <CommentForm imageUrl={currentUser.image.png} buttonName={'reply'}/>
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

export default NewReply;