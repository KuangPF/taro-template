import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class VantWeapp extends PureComponent {
  config: Config = {
    usingComponents: {
      'van-button': '/components/vant-weapp/dist/button/index',
      'van-search': '/components/vant-weapp/dist/search/index',
      'van-icon': '/components/vant-weapp/dist/icon/index'
    }
  }
  render() {
    return (
      <View className="custom-class demo-block van-clearfix demo-block--padding">
        <View className="demo-block__title">按钮</View>
        <View>
          <van-button class="demo-margin-right">默认按钮</van-button>
          <van-button type="primary" class="demo-margin-right">
            主要按钮
          </van-button>
          <van-button type="info" class="demo-margin-right">
            信息按钮
          </van-button>
        </View>
        <View className="row">
          <van-button type="danger" class="demo-margin-right">
            危险按钮
          </van-button>
          <van-button type="warning">警告按钮</van-button>
        </View>
        <View className="demo-block__title">搜索</View>
        <van-search placeholder="请输入搜索关键词" />
        <View className="demo-block__title">图标</View>
        <van-icon name="close" />
        <van-icon name="star" />
        <van-icon name="star-o" />
      </View>
    )
  }
}

export default VantWeapp
