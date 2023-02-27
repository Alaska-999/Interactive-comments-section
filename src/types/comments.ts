import React from "react";
import {
    ADD_COMMENTS,
    ADD_NEW_COMMENT, ADD_NEW_REPLY, DECREMENT_COUNTER, DECREMENT_COUNTER_REPLY,
    DELETE_COMMENT, DELETE_REPLY,
    GET_CURRENT_USER, INCREMENT_COUNTER, INCREMENT_COUNTER_REPLY,
    UPDATE_COMMENT
} from "../store/reducers/commentsActions";

export interface IUser {
    image: IAvatars,
    username: string
}

export interface CommentsItemReply {
    id: number
    content: string,
    createdAt: string,
    replyingTo: string,
    score: number,
    user: IUser
    replies?: CommentsItemReply[]
}

export interface ICommentsItem {
    content: string,
    createdAt: string,
    id: number,
    score: number,
    user: IUser,
    replies?: CommentsItemReply[],
    children?: React.ReactElement
}

export interface INewComment {
    content: string,
    createdAt: string,
    id: number,
    user: IUser
}
export interface INewReply {
    id: number
    content: string,
    createdAt: string,
    replyingTo: string,
    user: IUser
}

export interface IAvatars {
    png: string,
    webp: string
}

//redux
export interface CommentsState {
    comments: ICommentsItem[],
    currentUser: IUser,
    editingComment: string | null
}

interface IAddCommentsAction {
    type: typeof ADD_COMMENTS;
    payload: ICommentsItem[];
}

interface IGetCurrentUserAction {
    type: typeof GET_CURRENT_USER;
    payload: IUser;
}

interface IAddNewCommentAction {
    type: typeof ADD_NEW_COMMENT;
    payload: ICommentsItem;
}

interface IDeleteComment {
    type: typeof DELETE_COMMENT;
    payload: number;
}

interface IDeleteReply {
    type: typeof DELETE_REPLY;
    payload: number;
}

interface IUpdateComment {
    type: typeof UPDATE_COMMENT;
    payload: {
        id: number,
        newContent: string
    };
}

interface IIncrementCounter {
    type: typeof INCREMENT_COUNTER;
    payload: number
}

interface IDecrementCounter {
    type: typeof DECREMENT_COUNTER;
    payload: number
}

interface IIncrementCounterReply {
    type: typeof INCREMENT_COUNTER_REPLY;
    payload: number
}

interface IDecrementCounterReply {
    type: typeof DECREMENT_COUNTER_REPLY;
    payload: number
}

interface IAddNewReply {
    type: typeof ADD_NEW_REPLY;
    payload: {
        reply : INewReply,
        id: number
    }
}

// interface IAddNewReplyToReply {
//     type: typeof ADD_NEW_REPLY_TO_REPLY;
//     payload: {
//         reply : INewReply,
//         commentId: number
//         replyId: number
//     }
// }

export type CommentsActionTypes = IAddCommentsAction
    | IGetCurrentUserAction
    | IAddNewCommentAction
    | IDeleteComment
    | IUpdateComment
    | IIncrementCounter
    | IDecrementCounter
    | IIncrementCounterReply
    | IDecrementCounterReply
    | IAddNewReply
    | IDeleteReply;