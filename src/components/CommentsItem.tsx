import React, {FC, useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import RateCounter from "./UI/RateCounter";
import replySvg from '/images/icon-reply.svg'
import deleteSvg from '/images/icon-delete.svg'
import editSvg from '/images/icon-edit.svg'
import {ICommentsItem, IUser} from "../types/comments";
import {CardContainer} from "./UI/CardContainer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {updateComment} from "../store/reducers/commentsActions";
import NewReply from "./NewReply";
import Modal from "./UI/Modal";


const CommentsItem: FC<ICommentsItem> = (props: ICommentsItem) => {

    const currentUser: IUser = useTypedSelector(state => state.commentsReducer.currentUser)

    const [isEditable, setEditable] = useState<boolean>(false)
    const [isReply, setReply] = useState<boolean>(false)
    const [isReplyToReply, setReplyToReply] = useState<boolean>(false)
    const [editableContent, setEditableContent] = useState<string>('')
    const [isModal, setModal] = useState<boolean>(false)

    const dispatch = useDispatch()

    const toggleCommentReplyField = () => {
        setReply(!isReply)
    }

    const toggleCommentReplyToReplyField = () => {
        setReplyToReply(!isReplyToReply)
    }

    const updateCommentHandler = () => {
        dispatch(updateComment(props.id, editableContent))
        setEditable(false)
    }

    const onEditClick = () => {
        setEditable(true)
    }

    const isEditableContent = useMemo(() => {
        return isEditable ?
            <Edit onClick={updateCommentHandler}>Save</Edit>
            :
            <Edit onClick={onEditClick}>Edit</Edit>
            ;
    }, [isEditable, editableContent])


    const content = useMemo(() => {
        if (isEditable) {
            return <input value={editableContent}
                          onChange={(e) => {
                              setEditableContent(e.target.value)
                          }}/>
        } else {
            return <CommentText>{props.content}</CommentText>
        }
    }, [isEditable, props.content, editableContent])


    useEffect(() => {
        if (isEditable) {
            setEditableContent(props.content)
        }
    }, [isEditable])

    return (
        <>
            {isModal ? <Modal setModal={setModal} commentId={props.id}/> : ''}
            <CardContainer>
                <RateCounter commentId={props.id}>{props.score}</RateCounter>
                <CommentInfo>
                    <Line>
                        <UserInfo>
                            <UserAvatar src={props.user.image.png}/>
                            <UserName>{props.user.username}</UserName>
                            <PostDate>{props.createdAt}</PostDate>
                        </UserInfo>
                        {props.user == currentUser ?
                            <Buttons>
                                <Delete onClick={() => setModal(true)}>Delete</Delete>
                                {isEditableContent}
                            </Buttons>
                            :
                            <Reply onClick={toggleCommentReplyField}>Reply</Reply>
                        }
                    </Line>
                    {content}
                </CommentInfo>
            </CardContainer>
            {isReply && currentUser.username !== props.user.username ?
                <NewReply setReply={setReply} commentId={props.id} replyTo={props.user.username}/> : ''}
            {props.replies &&
                props.replies.map(reply => (

                    <Wrapper key={Math.random()}>
                        {isModal ? <Modal setModal={setModal} replyId={reply.id}/> : ''}

                        <ReplyContainer>
                            <RateCounter replyId={reply.id}>{reply.score}</RateCounter>
                            <CommentInfo>
                                <Line>
                                    <UserInfo>
                                        <UserAvatar src={reply.user.image.png}/>
                                        <UserName>{reply.user.username}</UserName>
                                        <PostDate>{reply.createdAt}</PostDate>
                                    </UserInfo>
                                    <Buttons>
                                        {reply.user.username == currentUser.username ?
                                            <Buttons>
                                                <Delete onClick={() => setModal(true)}>Delete</Delete>
                                                <Edit>Edit</Edit>
                                            </Buttons>
                                            :
                                            <Reply onClick={toggleCommentReplyToReplyField}>Reply</Reply>}
                                    </Buttons>

                                </Line>
                                <CommentText><ReplyTo>@{reply.replyingTo} </ReplyTo>{reply.content}</CommentText>
                            </CommentInfo>
                        </ReplyContainer>
                        {isReplyToReply
                            ?
                            currentUser.username !== reply.user.username ?
                                <NewReply setReply={setReplyToReply} commentId={props.id}
                                          replyTo={reply.user.username}/>
                                : ''
                            : ''}
                    </Wrapper>
                ))

            }
        </>
    );
};


const Wrapper = styled.div`

`
const CommentInfo = styled.div`
  margin-left: 15px;
  width: 100%;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 15px;
  }
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
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

const UserAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
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
  color: var(--soft-red);
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
    color: var(--pale-red);
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

  @media (max-width: 600px) {
   
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
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px;
    padding: 15px;
  }
`
const ReplyTo = styled.span`
  color: var(--moderate-blue);
  font-weight: 700;
`


export default CommentsItem;