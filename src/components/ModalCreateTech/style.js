import styled from "styled-components";

export const StyleModalHome = styled.dialog`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(18, 18, 20, 0.5);
  .modal__container {
    width: 100%;
    height: 100%;
    max-width: 369px;
    max-height: 342px;
    padding: 5px;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    .modal__header {
      padding: 10px;

      background-color: var(--grey-2);
      border-radius: 4px 4px 0 0;

      display: flex;
      justify-content: space-between;
      h1 {
        font-family: "Inter";
        font-weight: 700;
        font-size: 0.875rem;
        color: var(--grey-0);
      }
      button {
        background-color: transparent;
        border: none;

        cursor: pointer;
      }
    }
    .modal__main {
      padding: 10px;

      background-color: var(--grey-3);
      border-radius: 0 0 4px 4px;
      div {
        margin-bottom: 15px;

        display: flex;
        flex-direction: column;
        gap: 12px;
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 0.7rem;
          color: var(--grey-0);
        }
        input,
        select {
          height: 38.5px;
          padding-left: 13.03px;

          outline: none;
          background-color: var(--grey-2);
          border: 1px solid var(--grey-2);
          border-radius: 4px;

          font-family: "Inter";
          font-weight: 400;
          font-size: 0.814rem;
          color: var(--grey-0);
        }
        input:focus {
          border: 1px solid var(--grey-0);
        }
        select:focus {
          border: 1px solid var(--grey-0);
        }
        p {
          font-family: "Inter";
          font-weight: 400;
          font-size: 0.7rem;
          color: var(--grey-1);
        }
      }
      button {
        width: 100%;
        height: 38.5px;

        background-color: var(--color-primary);
        border: none;
        border-radius: 4px;

        font-family: "Inter";
        font-weight: 500;
        font-size: 12.8347px;
        color: var(--white-neutral);

        cursor: pointer;
      }
      button:hover {
        background-color: var(--color-primary-focus);
      }
      .modal__button--update {
        display: flex;
        flex-direction: row;
        gap: 20px;
        #button__delete {
          width: 40%;

          background-color: var(--grey-1);
        }
        #button__delete:hover {
          background-color: var(--grey-2);
        }
      }
    }
  }
`;
