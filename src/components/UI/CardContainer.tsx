import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--white);
  margin: 20px;
  padding: 24px;
  border-radius: 10px;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 15px;
    padding: 15px;
  }
  
`
