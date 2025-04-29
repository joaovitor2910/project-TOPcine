import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 80px;
  padding: 10px;
`

export const Card = styled.div`
  display: ${(props) => (props.image === null ? 'none' : 'block')};
  cursor: pointer;
  transition: 1s;
  &:hover {
    transform: scale(1.02);
  }
`
export const Poster = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    border-radius: 15px;
  }
  p {
    color: #ffffff;
    text-align: center;
  }
`
