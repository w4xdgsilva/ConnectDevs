import styled from 'styled-components';

export const StyledListLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #343a40;
  width: 100%;
  min-width: 355px;
  max-width: 400px;
  height: 250px;
  border-radius: 8px;
  margin-top: 10rem;

  ul {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      padding: 5px;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #495057;

        width: 250px;
        height: 45px;
        color: #ffff;
        border-radius: 8px;
        overflow: hidden;
        padding: 3px;
        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 1;
        }
      }
      button {
        font-size: 12px;
        width: 70px;
        height: 40px;
        border-radius: 8px;
        background-color: #7c92cc;
        color: #ffff;
        margin-left: 5px;
      }
      button:hover {
        color: #495057;
        background-color: #ffff;
      }
    }
  }
  @media (min-width: 800px) {
    margin-top: 0;
    position: sticky;
    top: 0;
  }
`;
