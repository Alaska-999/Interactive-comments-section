import styled from "styled-components";
import React, {FC} from 'react';

interface IFormProps {
    imageUrl: string,
    buttonName: string
}

const CommentForm: FC<IFormProps> = ({imageUrl, buttonName}) => {
    return (
        <>
            <Div>
                <UserAvatar imageUrl={imageUrl}/>
                <CommentInput name='comment' placeholder='Add a comment...'/>
            </Div>
            <SendBtn type='submit'>{buttonName}</SendBtn>
        </>
    );
};

export const Div = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`

const UserAvatar = styled.div<{ imageUrl?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`

const CommentInput = styled.input.attrs({as: 'textarea'})`
  margin: 0 20px;
  padding: 5px 10px;
  width: 90%;
  border: 1px solid var(--light-gray);
  border-radius: var(--radii);
  min-height: 100px;
  white-space: pre-wrap;
  word-break: break-word;

  :focus {
    border: 1px solid var(--moderate-blue);
  }

  @media (max-width: 400px) {
    margin: 0 10px;
    width: 75%;
  }

`
const SendBtn = styled.button`
  background-color: var(--moderate-blue);
  padding: 10px 25px;
  border: none;
  outline: none;
  border-radius: var(--radii);
  text-transform: uppercase;
  color: var(--white);
  max-height: 40px;
  cursor: pointer;
  transition: all ease 0.1s;

  :hover {
    background-color: var(--light-grayish-blue);
  }
`


export default CommentForm;

