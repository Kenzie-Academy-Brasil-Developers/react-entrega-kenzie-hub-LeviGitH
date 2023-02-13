import styled from "styled-components";

export const StyleHome = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--grey-4);
  nav {
    width: 90vw;
    margin-top: 26px;
    padding-bottom: 30px;

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid var(--grey-3);
    button {
      padding: 1px 16px;

      background-color: var(--grey-3);
      border: none;
      border-radius: 4px;

      font-family: "Inter";
      font-weight: 600;
      color: var(--grey-0);

      cursor: pointer;
    }
  }
  header {
    width: 90vw;
    padding-top: 33.69px;
    padding-bottom: 34px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    border-bottom: 1px solid var(--grey-3);

    h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--grey-0);
    }
    h2 {
      font-family: "Inter";
      font-weight: 600;
      font-size: 0.75rem;
      color: var(--grey-1);
    }
  }
  @media (min-width: 768px) {
    header {
      h1 {
        font-size: 1.3rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 1024px) {
    header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.1rem;
      }
    }
  }
`;
