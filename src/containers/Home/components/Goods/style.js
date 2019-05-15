import styled from 'styled-components'

export const GoodsWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 174px;
  left: 0;
  width: 100%;
  bottom: 40px;
  overflow: hidden;
`
export const GoodsNav = styled.div`
  flex: 0 0 80px;
  width: 80px;
  height: 100%;
  .nav-container {
    position: relative;
    width: 80px;
    background-color: #f3f5f7;
    box-sizing: border-box;
    .nav-item {
      padding: 0 12px;
      height: 54px;
      box-sizing: border-box;
      &:last-child {
        .content {
          border-bottom: none;
        }
      }
      &.active {
        background-color: #fff;
        .content {
          border-bottom: none;
          .title {
            color: #000;
          }
        }
      }
      .content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .title {
          line-height: 12px;
          font-size: 12px;
          color: #333;
        }
      }
    }
  }
`
export const GoodsDetail = styled.div`
  flex: 1;
  height: 100%;
  .goods-container {
    position: relative;
    width: 100%;
  }
  .goods-list .list-title {
    padding-left: 12px;
    line-height: 26px;
    height: 26px;
    width: 100%;
    font-size: 12px;
    border-left: 2px solid #d9dde1;
    color: rgb(147, 153, 159);
    background-color: #f3f5f7;
  }
  .goods {
    padding: 0 18px;
  }
  .list {
    &:last-child{
      .list-item{
        margin-bottom: 0;
        border-bottom: 0;
      }
    }
    .list-item {
      position: relative;
      display: flex;
      padding-top: 18px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .img {
        flex: 0 0 57px;
        width: 57px;
        height: 57px;
      }
      .content {
        flex: 1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .title {
          margin-top: 2px;
          margin-bottom: 8px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .txt {
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          margin-bottom: 8px;
        }
        .sell-info {
          font-size: 0;
          .rating {
            margin-left: 12px;
          }
        }
        .cart_control_wrapper{
            position: absolute;
            right: 0;
            bottom: 12px;
          }
        .price {
          position: relative;
          font-size: 0;
          .now {
            line-height: 24px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            margin-left: 8px;
            line-height: 24px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
      }
    }
  }
`
