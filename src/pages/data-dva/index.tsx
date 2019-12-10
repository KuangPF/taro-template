/*
 * @Author: KuangPF
 * @Date: 2019-12-11 00:11:48
 * @Description: 数据管理 dva
 */

import Taro, { PureComponent, Config } from '@tarojs/taro'

import { namespace, IDvaState, actionType } from '@/models/data-dva/index'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'

import './index.scss'

interface IProps extends IDvaState {
  dispatch?: any
}

class DataDva extends PureComponent<IProps> {
  config: Config = {
    usingComponents: {
      'van-button': '/components/vant-weapp/dist/button/index'
    }
  }
  handleCountOperate(operateType) {
    this.props.dispatch({
      type: `${namespace}/opeateDecrease`,
      payload: {
        operateType
      }
    })
  }
  handleSetZero() {
    this.props.dispatch({
      type: `${namespace}/setState`,
      payload: {
        count: 0
      }
    })
  }
  render() {
    const { count } = this.props
    return (
      <View className="page-content">
        <View className="count blod">Count: {count}</View>
        <View className="operate">
          <van-button
            size="small"
            onClick={() => {
              this.handleCountOperate(actionType.Decrease)
            }}
          >
            减少
          </van-button>
          <van-button
            size="small"
            class="ml15"
            onClick={() => {
              this.handleCountOperate(actionType.Increase)
            }}
          >
            增加
          </van-button>
          <van-button size="small" class="ml15" type='primary' onClick={this.handleSetZero}>
            置为0
          </van-button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = models => ({
  ...models[namespace]
})

export default connect(mapStateToProps)(DataDva)
