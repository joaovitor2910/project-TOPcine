import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #000;
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 30px;
  max-width: 1200px;

  iframe {
    border: none;
  }
`
export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ffffff;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  position: fixed;
  top: 10px;
`

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #000;
  border-top: 4px solid #f96d00;
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`
