import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import CommentsList from "./CommentsList";
import NewComment from "./NewComment";
import {useDispatch} from "react-redux";
import {addComments, getCurrentUser} from "../store/reducers/commentsActions";
import data from "../data/data.json";

const Comments: FC = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addComments(data.comments))
        dispatch(getCurrentUser(data.currentUser))
    }, [])
    return (

        <CommentsWrapper>
            <CommentsList/>
            <NewComment/>
        </CommentsWrapper>

    );
};

export default Comments;

const CommentsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`