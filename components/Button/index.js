import styled from "styled-components";

export default styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }

  ${(props) =>
    props.$variant === "text" &&
    `
    background-color: transparent;
    color: var(--color-primary);
`}

  ${(props) =>
    props.$variant === "outlined" &&
    `
  background-color: transparent;
    color: var(--color-primary);
    border: solid 2px var(--color-primary);
  `}


  ${(props) =>
    props.$variant === "contained" &&
    `
    background-color: var(--color-primary);
    color: white;
  `}
`;
