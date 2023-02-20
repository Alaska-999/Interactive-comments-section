import {ICommentsItem, INewComment, IUser} from "../../types/comments";

export const ADD_COMMENTS = 'ADD_COMMENTS'
export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


export const addComments = (comments: ICommentsItem[]) => ({
    type: ADD_COMMENTS, payload: comments
})
export const getCurrentUser = (user: IUser) => ({
    type: GET_CURRENT_USER, payload: user
})
export const addNewComment = (comment: INewComment) => ({
    type: ADD_NEW_COMMENT, payload: comment
})

export const deleteComment = (content: string) => ({
    type: DELETE_COMMENT, payload: content
})



