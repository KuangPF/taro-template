/*
 * @Author: KuangPF
 * @Date: 2019-12-11 00:11:48
 * @Description: 数据管理 dva
 */

import Taro, { PureComponent } from '@tarojs/taro'

import { namespace, IDvaState } from '@/models/data-dva/index'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'

import './index.scss'

interface IProps extends IDvaState {
  dispatch?: any
}

class DataDva extends PureComponent<IProps> {
  render() {
    const { count } = this.props
    return (
      <View className="page-content">
        <View className='count blod'>Count: {count}</View>
      </View>
    )
  }
}

const mapStateToProps = models => ({
  ...models[namespace]
})

export default connect(mapStateToProps)(DataDva)
