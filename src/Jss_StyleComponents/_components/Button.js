import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.primary ?" blue" :" orange"};
  color: #fff;
  border:none;
  padding: 1rem;
  transition: all 0.5s;
  font-size: ${props => props.fontSize2x ? "2rem" : "1rem"};
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: ${(props) => props.theme.hoverBgColor};
    border: ${(props) => props.theme.borderButton};
  }
`;


export const SmallButton =styled(Button)`
  background-color: orange;
  font-size; 0.5rem;
  padding:0.5rem;
`
