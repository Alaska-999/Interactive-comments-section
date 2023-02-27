import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import CommentsItem from "./CommentsItem";
import {ICommentsItem} from "../types/comments";
import Modal from "./UI/Modal";

const CommentsList: FC = () => {

    const commentsList: ICommentsItem[] = useTypedSelector(state => state.commentsReducer.comments)
    return (
        <div>

            {
                commentsList.map(item => (
                    <CommentsItem key={item.id} {...item}/>
                ))

            }
        </div>
    );
};

export default CommentsList;