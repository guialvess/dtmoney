import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--gray7);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.85rem;
    border: none;
    color: white;
    background: var(--gray1);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray5);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: white;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

     &:hover {
      filter: brightness(0.9);
     }
  }
`