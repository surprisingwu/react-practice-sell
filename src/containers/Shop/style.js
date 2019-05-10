import styled from 'styled-components'

export const ShopWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all .3s linear;
  .shop-fade-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .shop-fade-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  .shop-fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .shop-fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const ShopClose = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  font-size: 32px;
  z-index: 2;
`;
export const ShopBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(10px);
  background-color: rgba(7, 17, 27, 0.8);
`;
