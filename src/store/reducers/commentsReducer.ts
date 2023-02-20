import {ADD_COMMENTS, ADD_NEW_COMMENT, DELETE_COMMENT, GET_CURRENT_USER} from "./commentsActions";
import {
    CommentsActionTypes,
    CommentsState,
} from "../../types/comments";

const initialState: CommentsState = {
    comments: [],
    currentUser: {
        image: {
            png: '',
            webp: ''
        },
        username: ''
    }
}

export const commentsReducer = (state = initialState, action: CommentsActionTypes) => {
    switch (action.type) {
        case ADD_COMMENTS: {
            return {...state, comments: action.payload}
        }
        case GET_CURRENT_USER: {
            return {...state, currentUser: action.payload}
        }
        case ADD_NEW_COMMENT: {
            return {
                ...state, comments: [...state.comments,
                    {
                        content: action.payload.content,
                        createdAt: action.payload.createdAt,
                        id: action.payload.id,
                        score: 0,
                        user: action.payload.user
                    }
                ]
            }
        }
        case DELETE_COMMENT: {
            return {
                ...state, comments:
                    state.comments.filter((comment) => comment.content !== action.payload)
                }
        }

        default:
            return state
    }
}

