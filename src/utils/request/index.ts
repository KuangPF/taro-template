import Taro from '@tarojs/taro'

export default async function request(options) {
  const { url } = options
  const defaultOptions = {
    // 可以统一添加一些请求字段，例如 token
  }
  const newOptions: any = { ...defaultOptions, ...options }
  return Taro.request({
    url: url,
    ...newOptions
  })
    .then(response => {
      console.log(response)
      const { statusCode, data } = response
      if (statusCode >= 200 && statusCode < 300) {
        return data
      }
    })
    .catch(error => {
      throw error
    })
}
