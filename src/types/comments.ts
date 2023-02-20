import React from "react";
import {ADD_COMMENTS, ADD_NEW_COMMENT, DELETE_COMMENT, GET_CURRENT_USER} from "../store/reducers/commentsActions";

export interface IUser {
    image: IAvatars,
    username: string
}


export interface CommentsItemReplies {
    content: string,
    createdAt: string,
    replyingTo: string,
    score: number,
    user: IUser
}

export interface ICommentsItem {
    content: string,
    createdAt: string,
    id: number,
    score: number,
    user: IUser,
    replies?: CommentsItemReplies[],
    children?: React.ReactElement
}

export interface INewComment {
    content: string,
    createdAt: string,
    id: number,
    user: IUser
}

export interface IAvatars {
    png: string,
    webp: string
}

//redux
export interface CommentsState {
    comments: ICommentsItem[],
    currentUser: IUser
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
    payload: string;
}


export type CommentsActionTypes = IAddCommentsAction | IGetCurrentUserAction | IAddNewCommentAction | IDeleteComment;