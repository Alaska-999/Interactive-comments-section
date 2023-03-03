import React, {useEffect, useMemo, useState} from 'react';
import Modal from "./UI/Modal";
import RateCounter from "./UI/RateCounter";
import NewReply from "./NewReply";
import {
    Buttons,
    CommentInfo, CommentText, Delete, Edit,
    Line,
    PostDate, Reply,
    ReplyContainer, ReplyTo,
    UserAvatar,
    UserInfo,
    UserName,
    Wrapper
} from "./UI/CommentStyles";
import {CommentsItemReply, IUser} from "../types/comments";
import {updateReply} from "../store/reducers/commentsActions";
import {useDispatch} from "react-redux";



interface ICommentReplyProps {
    reply: CommentsItemReply;
    currentUser: IUser;
    setModal: (value: boolean) => void;
    commentId: number;
    isModal: boolean
}

const CommentReply: React.FC<ICommentReplyProps> = (props) => {
    const {
        reply,
        currentUser,
        setModal,
        commentId,
        isModal
    } = props;

    const [isEditableReply, setEditableReply] = useState<boolean>(false)
    const [isReplyToReply, setReplyToReply] = useState<boolean>(false)
    const [editableContentReply, setEditableContentReply] = useState<string>('')

    const toggleCommentReplyToReplyField = () => {
        setReplyToReply(!isReplyToReply)
    }

    const dispatch = useDispatch()
    const updateReplyHandler = () => {
        dispatch(updateReply(reply.id, commentId, editableContentReply))
        setEditableReply(false)

    }

    const onEditClick = () => {
        setEditableReply(true)
    }

    const isEditableContent = useMemo(() => {

        return isEditableReply ?
            <Edit onClick={updateReplyHandler}>Save</Edit>
            :
            <Edit onClick={onEditClick}>Edit</Edit>
            ;
    }, [isEditableReply, editableContentReply])


    const content = useMemo(() => {
        if (isEditableReply) {
            return <input value={editableContentReply}
                          onChange={(e) => {
                              setEditableContentReply(e.target.value)
                          }}/>
        } else {
            return <CommentText>{reply.content}</CommentText>
        }
    }, [isEditableReply, reply.content, editableContentReply])


    useEffect(() => {
        if (isEditableReply) {
            setEditableContentReply(reply.content)
        }
    }, [isEditableReply])

    return (
        <Wrapper key={Math.random()}>
            {isModal ? <Modal setModal={setModal} replyId={reply.id} /> : ''}

            <ReplyContainer>
                <RateCounter replyId={reply.id}>{reply.score}</RateCounter>
                <CommentInfo>
                    <Line>
                        <UserInfo>
                            <UserAvatar src={reply.user.image.png} />
                            <UserName>{reply.user.username}</UserName>
                            <PostDate>{reply.createdAt}</PostDate>
                        </UserInfo>
                        <Buttons>
                            {reply.user.username == currentUser.username ? (
                                <Buttons>
                                    <Delete onClick={() => setModal(true)}>Delete</Delete>
                                    {isEditableContent}
                                </Buttons>
                            ) : (
                                <Reply onClick={toggleCommentReplyToReplyField}>Reply</Reply>
                            )}
                        </Buttons>
                    </Line>
                    <CommentText>
                        <ReplyTo>@{reply.replyingTo} </ReplyTo>
                        {content}
                    </CommentText>
                </CommentInfo>
            </ReplyContainer>
            {isReplyToReply && currentUser.username !== reply.user.username ? (
                <NewReply
                    setReply={setReplyToReply}
                    commentId={commentId}
                    replyTo={reply.user.username}
                />
            ) : (
                ''
            )}
        </Wrapper>
    );
};

export default React.memo(CommentReply);