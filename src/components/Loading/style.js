import styled,{keyframes} from 'styled-components';

const loading = keyframes`
  0% {
    -webkit-transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
`;
export const LoadingWrapper = styled.div`
  background-image: linear-gradient(0, #e1e1e1, #e1e1e1 50%, transparent 50%);
  background-position: 100% 100%;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  text-align: center;
  height: 45px;
  color: #666;
  font-size: 14px;
`;

export const LoadingImg = styled.div`
  vertical-align: middle;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA6CAMAAADbe8pdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRTRFRThFNTE4NDgxMUU4OENDOTlEMjdCMTVENzhDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRTRFRThFNjE4NDgxMUU4OENDOTlEMjdCMTVENzhDMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFNEVFOEUzMTg0ODExRTg4Q0M5OUQyN0IxNUQ3OEMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFNEVFOEU0MTg0ODExRTg4Q0M5OUQyN0IxNUQ3OEMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7Ss/ewAAAFdQTFRF//Pm//jx/4QA/+7b/9mx/9Cd/9Wo/967/+nS/7x1/7Bb/+bL/8aJ/6tQ/6I//+LD/4sP/7hr/48W/8uU/8F+/4gI/5Mf/583/6dI/7Rj/5sv/5co////ZVMkcwAAAB10Uk5T/////////////////////////////////////wBZhudqAAABpUlEQVR42uzW6W7kIAwAYBPuG3JMkpm8/3OWtlLVLZC4s9JqK5Wfo/lkQ4wxHH+x4Bf/L5je0231M4NnMB/e12jY9zHJITzSm1/ZU3sGqe+v3AMGk/on6YtO4gqTln3l67AM7ioy6aWvi55PMSH9zYvla2xA25L6kgbZxeQcH2xII3TwlT0ONyymg+ESHyEtsYkJXFeMSsk3MQC5vkg5JdvAmMAl9Jh0AwMKH34MTUwweBpvscKE4pqKvY1ThQGJSRj10/gwo3ke55uvMMVi3cLqn+CHaWCKw/sj1weGxMQ/5hpbhaowFe68rjBrUZvm99XWta0sKu+8msbFoDEiLA2ra93nGBGhXQiq1UlUjJdHRreg2z1MSntZIdunwH90TyXlReJi21yv6UvJTj+X9d6QHgZ2qpUxm+2/VZSxvrbGeHb2SlLBhOrs1+xenL/PVAghG8GpM3s11lT/AyYEj18T4nk32SJmksjLYh/XhFA56Zz3iaCmIWBFTxMX5fgEd7Mu1in0KAVRTK6seS5Sayfo94Y4sFLwtw30y+533v4x+EWAAQD1Ql+vGKabYgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-position: -1px 0;
  background-size: contain;
  transform-origin: center center;
  animation-name: ${loading};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

