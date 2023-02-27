import { ICommentsItem, INewComment, INewReply, IUser} from "../../types/comments";

export const ADD_COMMENTS = 'ADD_COMMENTS'
export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_REPLY = 'DELETE_REPLY'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const INCREMENT_COUNTER_REPLY = 'INCREMENT_COUNTER_REPLY'
export const DECREMENT_COUNTER_REPLY = 'DECREMENT_COUNTER_REPLY'
export const ADD_NEW_REPLY = 'ADD_NEW_REPLY'



export const addComments = (comments: ICommentsItem[]) => ({
    type: ADD_COMMENTS, payload: comments
})

export const getCurrentUser = (user: IUser) => ({
    type: GET_CURRENT_USER, payload: user
})

export const addNewComment = (comment: INewComment) => ({
    type: ADD_NEW_COMMENT, payload: comment
})

export const updateComment = (id: number, newContent: string) => {
    return ({
        type: UPDATE_COMMENT, payload: {id, newContent}
    })
}

export const deleteComment = (id: number) => ({
    type: DELETE_COMMENT, payload: id
})

export const deleteReply = (id: number) => ({
    type: DELETE_REPLY, payload: id
})

export const incrementRate = (id: number) => ({
    type: INCREMENT_COUNTER,
    payload: id,
})

export const decrementRate = (id: number) => ({
    type: DECREMENT_COUNTER,
    payload: id,
})

export const incrementRateReply = (id: number) => ({
    type: INCREMENT_COUNTER_REPLY,
    payload: id,
})

export const decrementRateReply = (id: number) => ({
    type: DECREMENT_COUNTER_REPLY,
    payload: id,
})

export const addNewReply = (reply: INewReply, id: number) => ({
    type: ADD_NEW_REPLY, payload: {reply, id}
})
//
// export const addNewReplyToReply = (reply: INewReply, commentId: number, replyId: number) => ({
//     type: ADD_NEW_REPLY_TO_REPLY, payload: {reply, commentId, replyId}
// })



