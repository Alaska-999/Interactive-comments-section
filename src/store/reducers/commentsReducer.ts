import {
    ADD_COMMENTS,
    ADD_NEW_COMMENT, ADD_NEW_REPLY, DECREMENT_COUNTER, DECREMENT_COUNTER_REPLY,
    DELETE_COMMENT, DELETE_REPLY,
    GET_CURRENT_USER, INCREMENT_COUNTER, INCREMENT_COUNTER_REPLY,
    UPDATE_COMMENT, UPDATE_REPLY
} from "./commentsActions";
import {CommentsActionTypes, CommentsState} from "../../types/comments";


const initialState: CommentsState = {
    comments: [],
    currentUser: {
        image: {
            png: '',
            webp: ''
        },
        username: ''
    },
    editingComment: null
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

        case ADD_NEW_REPLY: {
            const updatedComments = state.comments.map((comment) => {
                if (comment.id === action.payload.id) {
                    return {
                        ...comment,
                        replies: [
                            ...(comment.replies || []),
                            {
                                id: action.payload.reply.id,
                                content: action.payload.reply.content,
                                createdAt: action.payload.reply.createdAt,
                                replyingTo: action.payload.reply.replyingTo,
                                score: 0,
                                user: action.payload.reply.user,
                                replies: []
                            },
                        ],
                    };
                } else {
                    return comment;
                }
            });

            return {
                ...state,
                comments: updatedComments,
            };
        }

        case DELETE_COMMENT: {
            return {
                ...state, comments:
                    state.comments.filter((comment) => comment.id !== action.payload)
            }
        }

        case DELETE_REPLY: {
            return {
                ...state, comments:
                    state.comments.map(comment => {
                            if (comment.replies) {
                                return {
                                    ...comment, replies: comment.replies.filter(reply => reply.id !== action.payload)
                                }
                            }
                            return comment
                        }
                    )
            }
        }

        case UPDATE_COMMENT: {
            return {
                ...state, comments:
                    state.comments.map(comment => comment.id === action.payload.id ?
                        {...comment, content: action.payload.newContent}
                        :
                        comment
                    )
            }
        }
        case UPDATE_REPLY: {
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.replies) {
                        const updatedReplies = comment.replies.map(reply =>
                            reply.id === action.payload.replyId ?
                                {...reply, content: action.payload.newContent}
                                :
                                reply
                        );
                        return {...comment, replies: updatedReplies};
                    } else {
                        return comment;
                    }
                })
            }
        }

        case INCREMENT_COUNTER: {
            return {
                ...state,
                comments:
                    state.comments.map(comment => comment.id === action.payload ?
                        {...comment, score: comment.score + 1}
                        :
                        comment
                    )
            };
        }

        case DECREMENT_COUNTER: {
            return {
                ...state,
                comments:
                    state.comments.map(comment => comment.id === action.payload ?
                        {...comment, score: comment.score - 1}
                        :
                        comment
                    )
            };
        }

        case INCREMENT_COUNTER_REPLY: {
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.replies) {
                        const updatedReplies = comment.replies.map(reply =>
                            reply.id === action.payload ? {...reply, score: reply.score + 1} : reply
                        );
                        return {...comment, replies: updatedReplies};
                    } else {
                        return comment;
                    }
                })
            };
        }

        case DECREMENT_COUNTER_REPLY: {
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.replies) {
                        const updatedReplies = comment.replies.map(reply =>
                            reply.id === action.payload ? {...reply, score: reply.score - 1} : reply
                        );
                        return {...comment, replies: updatedReplies};
                    } else {
                        return comment;
                    }
                })
            };
        }

        default:
            return state
    }
}

