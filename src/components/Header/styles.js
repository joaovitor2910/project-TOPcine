import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.6s ease-in-out;

  img {
    width: 15%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 200px;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    img {
      width: 30%;
    }
  }
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 480px) {
    width: 100px;
    gap: 10px;
  }
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 24px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #f96d00;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`

export const Search = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  border-radius: 25px;
  background-color: #ffffff;

  img {
    width: 40px;
    padding: 10px;
    height: auto;
    border-left: 1px solid;
    cursor: pointer;
  }
  input {
    width: 100%;
    border: none;
    padding: 5px;
    margin-left: 20px;
  }
`
