import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { routers } from '@/routes/index'

import './index.scss'

class Index extends Component {
  handleNavigateTo(url: string) {
    Taro.navigateTo({
      url
    })
  }
  render() {
    return (
      <View className="index-wrap">
        <Button
          onClick={() => {
            this.handleNavigateTo(routers.baseComponent)
          }}
          className='mt15'
        >
          基础组件
        </Button>
        <Button
          onClick={() => {
            this.handleNavigateTo(routers.apiRequest)
          }}
          className='mt15'
        >
          数据请求
        </Button>
        <Button
          onClick={() => {
            this.handleNavigateTo(routers.dataDva)
          }}
          className='mt15'
        >
          dva 数据流
        </Button>
        <Button
          onClick={() => {
            this.handleNavigateTo(routers.vantWeapp)
          }}
          className='mt15'
        >
          vant-weapp 第三方 UI 组件
        </Button>
      </View>
    )
  }
}

export default Index
