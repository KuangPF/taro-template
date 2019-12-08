import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Picker, Image } from '@tarojs/components'

interface IProps {}
interface IStates {
  timeValue: string
  userInfo: {
    avatarUrl: string
    nickName: string
  }
}

class BaseComponent extends PureComponent<IProps, IStates> {
  constructor(props) {
    super(props)
    this.state = {
      timeValue: '2019-12-08',
      userInfo: {
        avatarUrl: '',
        nickName: ''
      }
    }
  }
  handleGetUserInfo = e => {
    const {
      detail: { userInfo }
    } = e
    this.setState({
      userInfo
    })
    console.log(e)
  }

  handleDateChange = e => {
    const {
      detail: { value }
    } = e
    Taro.showToast({
      title: `已选中: ${value}`,
      icon: 'none'
    })
    console.log(e)
  }
  render() {
    const { timeValue, userInfo } = this.state
    return (
      <View className="page-content">
        <Button className="mt15" open-type="getUserInfo" lang="zh_CN" onGetUserInfo={this.handleGetUserInfo}>
          获取用户信息
        </Button>
        <Button type="primary" className="mt15" loading>
          Loading...
        </Button>
        <Picker className="mt15" mode="date" value={timeValue} onChange={this.handleDateChange}>
          <Button>时间选择器</Button>
        </Picker>
        {userInfo.avatarUrl && (
          <View className="mt15">
            <View>nickName: {userInfo.nickName}</View>
            <Image style={{ width: '100px', height: '100px' }} src={userInfo.avatarUrl} />
          </View>
        )}
      </View>
    )
  }
}

export default BaseComponent
