import styled from "styled-components";

export const StyleLogin = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-4);

  .login__container {
    width: 90vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17.65px;

    form {
      width: 100%;
      margin-top: 10px;

      background-color: var(--grey-3);
      border-radius: 3.21px;
      box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px
        #00000040;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 19.42px;
      h1 {
        margin-top: 33.69px;

        font-family: "Inter";
        font-weight: 700;
        font-size: 1rem;
        color: var(--grey-0);
      }
      div {
        width: 90%;

        display: flex;
        flex-direction: column;
        gap: 17.92px;
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 0.7rem;
          color: var(--grey-0);
        }
        input {
          height: 38.5px;
          padding-left: 13.03px;

          background-color: var(--grey-2);
          border: 0.98px solid transparent;
          border-radius: 3.21px;
          outline: none;

          font-family: "Inter";
          font-weight: 400;
          font-size: 0.814rem;
          color: var(--grey-1);
        }
        input:focus {
          border: 0.98px solid var(--grey-0);

          color: var(--grey-0);
        }
        span {
          text-align: center;
          font-family: "Inter";
          font-weight: 600;
          font-size: 0.75rem;
          color: var(--grey-1);
        }
        a {
          text-align: center;
          text-decoration: none;
        }
        button {
          width: 100%;

          background-color: var(--grey-1);
          border: 1.22px solid var(--grey-1);
          border-radius: 4px;

          color: var(--grey-0);

          margin-bottom: 42px;
        }
        button:hover {
          background-color: var(--grey-2);
          border: 1.22px solid var(--grey-2);
        }
      }
      button {
        width: 90%;
        height: 38.5px;

        background-color: var(--color-primary);
        border: 1.22px solid var(--color-primary);
        border-radius: 4px;

        cursor: pointer;

        font-family: "Inter";
        font-weight: 500;
        font-size: 0.802rem;
        color: var(--white-neutral);
      }
      button:hover {
        background-color: var(--color-primary-focus);
        border: 1.22px solid var(--color-primary-focus);
      }
    }
  }
  @media (min-width: 480px) {
    .login__container {
      width: 70vw;
    }
  }
  @media (min-width: 768px) {
    .login__container {
      width: 50vw;
      img {
        width: 120px;
      }
      form {
        margin-top: 15px;
        h1 {
          font-size: 1.1rem;
        }
        div {
          label {
            font-size: 0.8rem;
          }
          input {
            font-size: 0.906rem;
          }
          span {
            font-size: 0.7.8rem;
          }
        }
        button {
          font-size: 0.906rem;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .login__container {
      width: 30vw;
      img {
        width: 140px;
      }
      form {
        margin-top: 20px;
        h1 {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
