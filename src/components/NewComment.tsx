import React, {FC, FormEvent} from 'react';
import {CardContainer} from "./UI/CardContainer";
import styled from "styled-components";
import {IUser} from "../types/comments";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addNewComment} from "../store/reducers/commentsActions";
import FormInput from "./UI/FormInput";

const NewComment: FC = () => {

    const currentUser: IUser = useTypedSelector(state => state.commentsReducer.currentUser)
    const dispatch = useDispatch()
    const sendPostHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if((e.currentTarget.elements[0] as HTMLInputElement).value != '') {
            const newComment = {
                content: (e.currentTarget.elements[0] as HTMLInputElement).value,
                createdAt: 'date',
                id: Math.random(),
                user: currentUser
            }
            dispatch(addNewComment(newComment))
            e.currentTarget.reset()
        } else {
            console.log('empty input')
        }

    }

    return (
        <CardContainer>
            <Form onSubmit={sendPostHandler}>
                <FormInput imageUrl={currentUser.image.png} buttonName={'send'}/>
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

export default NewComment;