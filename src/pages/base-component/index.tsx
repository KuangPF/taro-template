import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

class BaseComponent extends PureComponent {
  handleGetUserInfo = e => {
    console.log(e)
  }
  render() {
    return (
      <View>
        <Button open-type="getUserInfo" lang="zh_CN" onGetUserInfo={this.handleGetUserInfo}>
          获取用户信息
        </Button>
      </View>
    )
  }
}

export default BaseComponent
