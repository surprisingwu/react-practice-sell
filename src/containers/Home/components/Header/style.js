import styled from 'styled-components'

export const MyHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 134px;
  width: 100%;
  overflow: hidden;
  background-color: rgba(7, 17, 27, 0.5);
`

export const HeaderInfo = styled.div`
  position: relative;
  flex: 0 0 106px;
  width: 100%;
  height: 106px;
`
export const HeaderContent = styled.div`
  display: flex;
  padding: 24px 12px 0 24px;
`

export const HeaderImg = styled.div`
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  margin-right: 16px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`
export const HeaderDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const HeaderTitle = styled.div`
  margin-bottom: 8px;
  line-height: 18px;
  & .icon {
    display: inline-block;
    margin-right: 6px;
    width: 30px;
    height: 18px;
    background-image: url('/images/brand@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 18px;
    vertical-align: middle;
  }
  & .name {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    vertical-align: middle;
  }
`
export const HeaderSpecialty = styled.div`
  font-size: 12px;
  font-weight: 200;
  color: #fff;
`
export const HeaderActivity = styled.div`
  position: relative;
  padding-top: 10px;
  font-weight: 200;
  color: #fff;
  & div.desc span {
    vertical-align: middle;
  }
  & div.desc > span.text {
    margin-left: 4px;
    font-size: 12px;
  }
  & div.count {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 8px;
    line-height: 24px;
    height: 24px;
    font-size: 12px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  & div.count > i {
    display: inline-block;
    margin-left: 2px;
    margin-top: 5px;
    font-size: 14px;
  }
`
export const HeaderBulletin = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 0 12px;
  line-height: 28px;
  font-size: 10px;
  font-weight: 200;
  background-color: rgba(7, 17, 27, 0.2);
  color: #fff;

  & span.icon {
    flex: 0 0 22px;
    margin-right: 4px;
    margin-top: 8px;
    width: 22px;
    height: 12px;
    background: url('/images/bulletin@2x.png') no-repeat center;
    background-size: 22px 12px;
  }
  & span.desc {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & i.arrow {
    flex: 0 0 14px;
    width: 14px;
    font-size: 14px;
    margin-left: 4px;
    margin-top: 7px;
  }
`

export const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  filter: blur(10px);
`
