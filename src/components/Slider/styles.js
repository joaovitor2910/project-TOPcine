import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  padding: 0 20px;

  h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .swiper-wrapper {
  }

  .swiper-button-prev {
    width: 40px;
    height: 60px;
    color: #f96d00;
    background-color: #000;
    cursor: pointer;
    border-radius: 8px;
  }

  .swiper-button-next {
    width: 40px;
    height: 60px;
    color: #f96d00;
    background-color: #000;
    cursor: pointer;
    border-radius: 8px;
  }
`
