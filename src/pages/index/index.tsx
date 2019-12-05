import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { routers } from '@/routes/index'

import './index.less'

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
        >
          基础组件
        </Button>
      </View>
    )
  }
}

export default Index
