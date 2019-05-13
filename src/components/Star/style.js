import styled from 'styled-components'

const bgImage = name => `/images/${name}@2x.png`;
export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-repeat: no-repeat;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url(${bgImage('star48_on')});
      }
      &.half {
        background-image: url(${bgImage('star48_half')});
      }
      &.off {
        background-image: url(${bgImage('star48_off')});
      }
    }
  };
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-repeat: no-repeat;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url(${bgImage('star36_on')});
      }
      &.half {
        background-image: url(${bgImage('star36_half')});
      }
      &.off {
        background-image: url(${bgImage('star36_off')});
      }
    }
  };
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-repeat: no-repeat;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url(${bgImage('star24_on')});
      }
      &.half {
        background-image: url(${bgImage('star24_half')});
      }
      &.off {
        background-image: url(${bgImage('star24_off')});
      }
    }
  }
`
