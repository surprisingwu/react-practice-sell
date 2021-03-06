import urls from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";

export const types = {
  // 请求
  FETCH_SHOP_REQUEST: "HOME/FETCH_SHOP_REQUEST",
  // 请求成功
  FETCH_SHOP_SUCCESS: "HOME/FETCH_SHOP_SUCCESS",
  // 请求失败
  FETCH_SHOP_FAILURE: "HOME/FETCH_SHOP_FAILURE",
};

const fetchShopData = endpoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE
    ],
    endpoint
  }
});
export const actions = {
  //加载猜你喜欢的数据
  loadShopData: () => {
    return (dispatch, getState) => {
      return dispatch(fetchShopData(urls.getShopPath('data')));
    };
  }
};

const initialState = {
  goods: [],
  seller: null,
  ratings: [],
  isFetching: false
};

// 为每个food加一个id

const filterData = (data) => {
  const { goods } = data;
  let count = 1;
  let navCount = 1;
  goods.forEach((item, i) => {
    const { foods } = item;
    item.id = `n-${navCount++}`
    foods.forEach((good, j) => {
      good.id = `g-${count++}`
    })
  })
  console.log(data);
  return data
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOP_SUCCESS:
      return {
        ...state,
        ...filterData(action.response),
        isFetching: false,
      };
    case types.FETCH_SHOP_FAILURE:
      return {...state, isFetching: false}
    default:
      return state;
  }
};


