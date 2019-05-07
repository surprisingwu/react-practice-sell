export const ErrorToastWrapper = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000001;
  position: fixed; 
  display: flex;
  justify-content:center;
  align-items: center; 
`;

export const ErrorToastContent = styled.div`
  max-width: 300px;
  max-height: 300px;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  background-color: #000;
`;
