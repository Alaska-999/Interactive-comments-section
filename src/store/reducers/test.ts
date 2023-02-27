import react from "@vitejs/plugin-react";
// import {ADD_NEW_REPLY_TO_REPLY} from "./commentsActions";
//
// case ADD_NEW_REPLY_TO_REPLY: {
//     const updatedComments = state.comments.map((comment) => {
//         if (comment.id === action.payload.commentId) {
//             return {
//                 ...comment,
//                 replies: comment.replies?.map(reply =>
//                     reply.id === action.payload.replyId ?
//                         {
//                             ...reply, replies: [
//                                 ...(reply.replies || []),
//                                 {
//                                     id: action.payload.reply.id,
//                                     content: action.payload.reply.content,
//                                     createdAt: action.payload.reply.createdAt,
//                                     replyingTo: action.payload.reply.replyingTo,
//                                     score: 0,
//                                     user: action.payload.reply.user,
//                                     replies: []
//                                 }
//                             ]
//                         }
//                         :
//                         reply
//                 )
//             };
//         } else {
//             return comment;
//         }
//     });
//
//     return {
//         ...state,
//         comments: updatedComments,
//     };
// }