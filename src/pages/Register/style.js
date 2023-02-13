import styled from "styled-components";

export const StyleRegister = styled.main`
  width: 100vw;
  padding: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-4);

  .register__container {
    width: 90vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17.65px;

    header {
      width: 100%;

      display: flex;
      justify-content: space-between;
      button {
        padding: 4.48px 25.77px;

        background-color: var(--grey-3);
        border: none;
        border-radius: 4px;

        cursor: pointer;

        font-family: "Inter";
        font-weight: 600;
        font-size: 0.6rem;
        color: var(--grey-0);
      }
      button:hover {
        background-color: var(--grey-1);
      }
    }
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
      h2 {
        font-family: "Inter";
        font-weight: 400;
        font-size: 0.6rem;
        color: var(--grey-1);
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
        p {
          font-family: "Inter";
          font-weight: 400;
          font-size: 0.7rem;
          color: var(--grey-1);
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
        select {
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
        select:focus {
          border: 0.98px solid var(--grey-0);

          color: var(--grey-0);
        }
      }
      button {
        width: 90%;
        height: 38.5px;
        margin-bottom: 42px;

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
    .register__container {
      width: 70vw;
    }
  }
  @media (min-width: 768px) {
    .register__container {
      width: 50vw;
      header {
        img {
          width: 120px;
        }
        button {
          font-size: 0.8rem;
        }
      }
      form {
        margin-top: 15px;
        h1 {
          font-size: 1.1rem;
        }
        h2 {
          font-size: 0.75rem;
        }
        div {
          label {
            font-size: 0.8rem;
          }
          p {
            font-size: 0.8rem;
          }
          input {
            font-size: 0.906rem;
          }
        }
        button {
          font-size: 0.906rem;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .register__container {
      width: 30vw;
      header {
        img {
          width: 140px;
        }
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
