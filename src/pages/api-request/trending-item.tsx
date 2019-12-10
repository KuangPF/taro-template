import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './trending-item.scss'

export interface ITrending {
  author: string
  language: string
  name: string
  stars: string
  languageColor: string
  description: string
}

interface IProps {
  data: ITrending
  index: number
}

class TrendingItem extends Taro.PureComponent<IProps> {
  render() {
    const { data, index } = this.props
    if(!data) {
      return null
    }
    return (
      <View className="info">
        <View className="rank">
          <Text className="bold">{index}.</Text>
          <Text className="title">{data.name}</Text>
        </View>
        <View className="sub-title followers">
          <View className="language">
            <View className="language-icon" style={{ backgroundColor: data.languageColor }} />
            <Text className="text">{data.language}</Text>
          </View>
          <View className="star">
            <View className="star-icon at-icon at-icon-star-2" />
            <Text className="text">{data.stars}</Text>
          </View>
        </View>
        <View className="details">{data.description}</View>
      </View>
    )
  }
}

export default TrendingItem
