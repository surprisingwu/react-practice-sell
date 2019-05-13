import styled from 'styled-components'

export const ShopWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.3s linear;
  &.shop-fade-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  &.shop-fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.3s linear;
  }
  &.shop-fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.shop-fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s linear;
  }
`
export const ShopContainer = styled.div`
  position: relative;
  padding: 64px 36px 0;
  color: #fff;
`
export const ShopTittle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`
export const ShopSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  & .line {
    flex: 1;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  & .title {
    flex-grow: 79px;
    width: 79px;
    text-align: center;
  }
`
export const ShopSupports = styled.ul`
  margin: 24px 0 28px;
  font-size: 0;
`
export const ShopSupport = styled.li`
  display: flex;
  margin-bottom: 12px;
  padding-left: 12px;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  & .desc {
    margin-left: 6px;
    font-size: 12px;
  }
`
export const ShopBulletin = styled.p`
  padding: 0 12px;
  margin-top: 24px;
  line-height: 24px;
  text-align: justify; 
  word-break: break-all;
  font-size: 12px;
`
export const ShopClose = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  font-size: 32px;
  z-index: 2;
`
export const ShopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
  background-color: rgba(7, 17, 27, 0.8);
`
