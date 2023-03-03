import React, {FC, useEffect, useMemo, useState} from 'react';
import RateCounter from "./UI/RateCounter";
import {ICommentsItem, IUser} from "../types/comments";
import {CardContainer} from "./UI/CardContainer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {updateComment} from "../store/reducers/commentsActions";
import NewReply from "./NewReply";
import Modal from "./UI/Modal";
import CommentReply from "./CommentReply";
import {
    Buttons,
    CommentInfo,
    CommentText,
    Delete,
    Edit,
    Line, PostDate,
    Reply,
    UserAvatar,
    UserInfo,
    UserName
} from "./UI/CommentStyles";


const CommentsItem: FC<ICommentsItem> = (props: ICommentsItem) => {

    const currentUser: IUser = useTypedSelector(state => state.commentsReducer.currentUser)

    const [isEditable, setEditable] = useState<boolean>(false)
    const [isReply, setReply] = useState<boolean>(false)
    const [editableContent, setEditableContent] = useState<string>('')
    const [isModal, setModal] = useState<boolean>(false)

    const dispatch = useDispatch()

    const toggleCommentReplyField = () => {
        setReply(!isReply)
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
                props.replies.map((reply) => {
                    return (
                        <CommentReply
                            key={reply.id}
                            reply={reply}
                            currentUser={currentUser}
                            isModal={isModal}
                            setModal={setModal}
                            commentId={props.id}
                        />
                    );
                })}
        </>
    );
};





export default CommentsItem;