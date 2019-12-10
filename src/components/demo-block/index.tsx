import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'

interface IProps {
  title: string
  padding: boolean
}
class DemoBlock extends PureComponent<IProps> {
  render() {
    const { title, children } = this.props
    return (
      <View className="custom-class demo-block van-clearfix demo-block--padding">
        {title && <View className="demo-block__title">{title}</View>}
        {children}
      </View>
    )
  }
}

export default DemoBlock
