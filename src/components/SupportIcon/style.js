import styled from 'styled-components'

const bgImage = name => `/images/${name}@2x.png`

export const SupportIcon = styled.span`
  display: inline-block;
  background-repeat: no-repeat;
  &.support-icon-1 {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-position: center;
    &.decrease {
      background-image: url(${bgImage('decrease_1')});
    }
    &.discount {
      background-image: url(${bgImage('discount_1')});
    }

    &.guarantee {
      background-image: url(${bgImage('guarantee_1')});
    }
    &.invoice {
      background-image: url(${bgImage('invoice_1')});
    }
    &.special {
      background-image: url(${bgImage('special_1')});
    }
  }
  &.support-icon-2 {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    &.decrease {
      background-image: url(${bgImage('decrease_2')});
    }
    &.discount {
      background-image: url(${bgImage('discount_2')});
    }

    &.guarantee {
      background-image: url(${bgImage('guarantee_2')});
    }
    &.invoice {
      background-image: url(${bgImage('invoice_2')});
    }
    &.special {
      background-image: url(${bgImage('special_2')});
    }
  }
  &.support-icon-3 {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    &.decrease {
      background-image: url(${bgImage('decrease_3')});
    }
    &.discount {
      background-image: url(${bgImage('discount_3')});
    }

    &.guarantee {
      background-image: url(${bgImage('guarantee_3')});
    }
    &.invoice {
      background-image: url(${bgImage('invoice_3')});
    }
    &.special {
      background-image: url(${bgImage('special_3')});
    }
  }
  &.support-icon-4 {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    &.decrease {
      background-image: url(${bgImage('decrease_4')});
    }
    &.discount {
      background-image: url(${bgImage('discount_4')});
    }

    &.guarantee {
      background-image: url(${bgImage('guarantee_4')});
    }
    &.invoice {
      background-image: url(${bgImage('invoice_4')});
    }
    &.special {
      background-image: url(${bgImage('special_4')});
    }
  }
`
