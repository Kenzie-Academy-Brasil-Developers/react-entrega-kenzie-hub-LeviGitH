import styled from "styled-components";

export const StyleHome = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;

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
  .content__container {
    margin-top: 25px;
    width: 90vw;

    .content__header {
      margin-bottom: 20px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-family: "Inter";
        font-weight: 600;
        font-size: 17px;
        color: var(--grey-0);
      }
      button {
        width: 100%;
        max-width: 34px;
        padding: 6px 0;

        background-color: var(--grey-3);
        border: none;
        border-radius: 4px;

        cursor: pointer;
      }
    }
    .content__main {
      height: 100%;
      max-height: 416px;
      padding: 20px 0;
      overflow-y: auto;

      background-color: var(--grey-3);
      border-radius: 4px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      button {
        width: 90%;
        height: 100%;
        min-height: 49px;
        padding: 5px 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--grey-4);
        border: none;
        border-radius: 4px;

        cursor: pointer;
        h1 {
          font-family: "Inter";
          font-weight: 700;
          font-size: 1rem;
          color: var(--grey-0);
        }
        h2 {
          font-family: "Inter";
          font-weight: 400;
          font-size: 0.75rem;
          color: var(--grey-1);
        }
      }
      button:hover {
        background-color: var(--grey-2);
      }
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
