import styled from "styled-components";

export const Link = styled.a``;

export const List = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    &:first-child {
      margin-right: 15px;
    }
    &:last-child {
      margin-left: 15px;
    }
  }
`;
