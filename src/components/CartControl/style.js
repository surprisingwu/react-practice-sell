import styled from 'styled-components'

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  .cart-decrease {
    display: inline-block;
    padding: 6px;
    opacity: 1;
    .inner {
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      transition: all 0.4s linear;
      transform: rotate(0);
    }
    &.move-enter-active,&.move-exit-active {
      transition: all 0.4s linear;
    }
    &.move-enter{
      opacity: 0;
      .inner{
        transform: translate3d(24px, 0, 0) rotate(-180deg);
      }
    }
    &.move-exit-active {
      opacity: 0;
      transform: translate3d(24px, 0, 0);
      .inner {
        transform: rotate(180deg);
      }
    }
  }
  .cart-count {
    width: 12px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
`
