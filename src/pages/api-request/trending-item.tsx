import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { routers } from '@/routes/index'

import './trending-item.scss'

export interface ITrending {
  author: string
  language: string
  name: string
  stars: string
  languageColor: string
  description: string
  url: string
}

interface IProps {
  data: ITrending
  index: number
}

class TrendingItem extends Taro.PureComponent<IProps> {
  handleViewDetail = (data: ITrending) => {
    Taro.navigateTo({
      url: `${routers.webview}?webviewSrc=${data.url}`
    })
  }

  render() {
    const { data, index } = this.props
    if (!data) {
      return null
    }
    return (
      <View className="info">
        <View
          className="rank"
          onClick={() => {
            this.handleViewDetail(data)
          }}
        >
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
