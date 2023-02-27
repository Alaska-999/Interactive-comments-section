import React, {FC} from 'react';
import styled from "styled-components";
import {deleteComment, deleteReply} from "../../store/reducers/commentsActions";
import {useDispatch} from "react-redux";

interface IModalProps {
    setModal: (value: boolean) => void;
    commentId?: number;
    replyId?: number
}

const Modal: FC<IModalProps> = ({setModal, commentId, replyId}) => {

    const dispatch = useDispatch()

    const deleteCommentHandler = () => {
        if (commentId) {
            dispatch(deleteComment(commentId))
        } else if (replyId) {
            dispatch(deleteReply(replyId))
        }
        setModal(false)
    }

    return (
        <Wrapper>

            <Content>
                <Heading>Delete comment</Heading>
                <Text>
                    Are you sure you want to delete this comment?
                    This will remove the comment and can't be
                    undone.
                </Text>
                <Buttons>
                    <Cancel onClick={() => setModal(false)}>NO, CANCEL</Cancel>
                    <Delete onClick={deleteCommentHandler}>YES, DELETE</Delete>
                </Buttons>
            </Content>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--blue-dark);
  background-color: var(--white);
  margin: 20px;
  padding: 24px;
  border-radius: 10px;
`

const Heading = styled.h2`
`

const Text = styled.div`
  max-width: 350px;
  margin: 25px 0;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: var(--white);
    transition: all ease 0.2s;
    border-radius: var(--radii);
    padding: 10px;

  }

  button + button {
    margin-left: 10px;
  }
`

const Cancel = styled.button`
  background-color: var(--blue-dark);

  :hover {
    background-color: rgba(50, 65, 82, 0.62);
  }
`
const Delete = styled.button`
  background-color: var(--soft-red);

  :hover {
    background-color: var(--pale-red);
  }

`

export default Modal;