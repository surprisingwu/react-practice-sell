import { get } from "../../utils/request"

//经过中间件处理的action所具有的标识
export const FETCH_DATA = 'FETCH_DATA'

export default store => next => action => {
  const callAPI = action[FETCH_DATA]
  if(typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint , types } = callAPI
  if(typeof endpoint !== 'string') {
    throw new Error('endpoint必须为字符串类型的URL')
  }
  if(!Array.isArray(types) && types.length !== 3) {
    throw new Error('需要指定一个包含了3个action type的数组')
  }
  if(!types.every(type => typeof type === 'string')) {
    throw new Error('action type必须为字符串类型')
  }

  const actionWith = data => {
    const finalAction = {...action, ...data}
    delete finalAction[FETCH_DATA]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({type: requestType}))
  return get(endpoint).then(
    response => next(actionWith({
      type: successType,
      response 
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || '获取数据失败'
    }))
  )
}



