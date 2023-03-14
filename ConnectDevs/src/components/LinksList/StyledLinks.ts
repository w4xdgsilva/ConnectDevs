import styled from 'styled-components';

export const StyledListLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #343a40;
  width: 400px;
  height: 250px;
  border-radius: 8px;
  overflow-y: auto;

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
        height: 40px;
        color: #ffff;
        border-radius: 8px;
        h2 {
          font-size: 12px;
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
`;
