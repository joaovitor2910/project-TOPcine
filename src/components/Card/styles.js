import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;

  &:hover {
    transform: scale(1.02);
  }
  img {
    cursor: pointer;
    border-radius: 30px;
    width: 250px;
    height: 100%;
    padding: 10px;
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
  }
`
