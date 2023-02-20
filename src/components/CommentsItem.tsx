import React, {FC} from 'react';
import styled from "styled-components";
import RateCounter from "./UI/RateCounter";
import replySvg from '../images/icon-reply.svg'
import deleteSvg from '../images/icon-delete.svg'
import editSvg from '../images/icon-edit.svg'
import {ICommentsItem, IUser} from "../types/comments";
import {CardContainer} from "./UI/CardContainer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {deleteComment} from "../store/reducers/commentsActions";


const CommentsItem: FC<ICommentsItem> = (props: ICommentsItem) => {

    const currentUser: IUser = useTypedSelector(state => state.commentsReducer.currentUser)

    const dispatch = useDispatch()
    const deleteCommentHandler = () => {
        dispatch(deleteComment(props.content))
    }

    return (
        <Wrapper>
            <CardContainer>
                <RateCounter>{props.score}</RateCounter>
                <CommentInfo>
                    <Line>
                        <UserInfo>
                            <UserAvatar imageUrl={props.user.image.png}/>
                            <UserName>{props.user.username}</UserName>
                            <PostDate>{props.createdAt}</PostDate>
                        </UserInfo>
                        {props.user == currentUser ?
                            <Buttons>
                                <Delete onClick={deleteCommentHandler}>Delete</Delete>
                                <Edit>Edit</Edit>
                            </Buttons>

                            :
                            <Reply>Reply</Reply>
                        }
                    </Line>
                    <CommentText>{props.content}</CommentText>
                </CommentInfo>
            </CardContainer>
            {props.replies &&
                props.replies.map(reply => (
                    <ReplyContainer key={Math.random()}>
                        <RateCounter>{reply.score}</RateCounter>
                        <CommentInfo>
                            <Line>
                                <UserInfo>
                                    <UserAvatar/>
                                    <UserName>{reply.user.username}</UserName>
                                    <PostDate>{reply.createdAt}</PostDate>
                                </UserInfo>
                                <Reply>Reply</Reply>
                            </Line>
                            <CommentText><ReplyTo>@{reply.replyingTo} </ReplyTo>{reply.content}</CommentText>
                        </CommentInfo>
                    </ReplyContainer>
                ))

            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
`

const CommentInfo = styled.div`
  margin-left: 15px;
  width: 100%;
`

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fz);
`

const UserAvatar = styled.div<{ imageUrl?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: blue;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`

const UserName = styled.div`
  margin: 0 9px;
  font-weight: 700;
`

const PostDate = styled.div`
  margin-left: 5px;
  color: var(--blue-dark);
`
const Buttons = styled.div`
  display: flex;
`

const Delete = styled.div`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #ED6368;
  font-weight: 700;
  transition: all ease 0.1s;

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: url(${deleteSvg});
    position: relative;
    right: 5px;
    transition: all ease 0.1s;
  }

  :hover {
    color: #ecb7b9;
  }

  &:hover::before {
    filter: brightness(190%);
  }
`

const Edit = styled.div`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--moderate-blue);
  font-weight: 700;
  transition: all ease 0.1s;
  margin-left: 20px;

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: url(${editSvg});
    position: relative;
    right: 5px;
    top: 1px;
    transition: all ease 0.1s;
  }

  :hover {
    color: var(--light-grayish-blue);
  }

  &:hover::before {
    filter: brightness(220%);
  }

`

const Reply = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--moderate-blue);
  font-weight: 700;
  transition: all ease 0.1s;

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: url(${replySvg});
    position: relative;
    right: 5px;
    top: 1px;
    transition: all ease 0.1s;
  }

  :hover {
    color: var(--light-grayish-blue);
  }

  &:hover::before {
    filter: brightness(220%);
  }
`

const CommentText = styled.div`
  color: var(--blue-dark);
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
`

const ReplyContainer = styled.div`
  background-color: var(--white);
  margin: 20px 20px 20px 100px;
  padding: 20px;
  border-radius: var(--radii);
  display: flex;

  //&::before {
  //  content: '';
  //  width: 2px;
  //  height: 100%;
  //  min-height: 200px;
  //  background-color: red;
  //}

`
const ReplyTo = styled.span`
  color: var(--moderate-blue);
  font-weight: 700;
`


export default CommentsItem;