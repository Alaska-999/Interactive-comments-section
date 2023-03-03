import styled from "styled-components";
import replySvg from '/images/icon-reply.svg'
import deleteSvg from '/images/icon-delete.svg'
import editSvg from '/images/icon-edit.svg'

export const Wrapper = styled.div`

`

export const CommentInfo = styled.div`
  margin-left: 15px;
  width: 100%;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 15px;
  }
`

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fz);
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const UserAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-size: cover;
`

export const UserName = styled.div`
  margin: 0 9px;
  font-weight: 700;
`

export const PostDate = styled.div`
  margin-left: 5px;
  color: var(--blue-dark);
`
export const Buttons = styled.div`
  display: flex;

`

export const Delete = styled.div`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--soft-red);
  font-weight: 700;
  transition: all ease 0.1s;

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: url(${deleteSvg});
    position: relative;
    right: 5px;
    transition: all ease 0.1s;
  }

  :hover {
    color: var(--pale-red);
  }

  &:hover::before {
    filter: brightness(190%);
  }
`

export const Edit = styled.div`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--moderate-blue);
  font-weight: 700;
  transition: all ease 0.1s;
  margin-left: 20px;

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: url(${editSvg});
    position: relative;
    right: 5px;
    top: 1px;
    transition: all ease 0.1s;
  }

  :hover {
    color: var(--light-grayish-blue);
  }

  &:hover::before {
    filter: brightness(220%);
  }

`

export const Reply = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--moderate-blue);
  font-weight: 700;
  transition: all ease 0.1s;

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: url(${replySvg});
    position: relative;
    right: 5px;
    top: 1px;
    transition: all ease 0.1s;
  }

  :hover {
    color: var(--light-grayish-blue);
  }

  &:hover::before {
    filter: brightness(220%);
  }

  @media (max-width: 600px) {

  }
`

export const CommentText = styled.div`
  color: var(--blue-dark);
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
`

export const ReplyContainer = styled.div`
  background-color: var(--white);
  margin: 20px 20px 20px 100px;
  padding: 20px;
  border-radius: var(--radii);
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px;
    padding: 15px;
  }
`
export const ReplyTo = styled.span`
  color: var(--moderate-blue);
  font-weight: 700;
`