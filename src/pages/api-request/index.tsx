import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import TrendingItem, { ITrending } from './trending-item'
import request from '@/utils/request'

interface IProps {}
interface IStates {
  apiLoading: boolean
  trendingList: Array<ITrending>
}

class ApiRequest extends Component<IProps, IStates> {
  constructor(props) {
    super(props)
    this.state = {
      apiLoading: false,
      trendingList: []
    }
  }

  handleGetGithubTrending = () => {
    this.setState({
      apiLoading: true
    })

    request({
      url: 'https://github-trending-api.now.sh/repositories?since=daily'
    }).then(res => {
      this.setState({
        apiLoading: false,
        trendingList: res
      })
    })
  }
  render() {
    const { apiLoading, trendingList } = this.state
    return (
      <View className="page-content">
        <Button onClick={this.handleGetGithubTrending} disabled={apiLoading} loading={apiLoading}>
          获取 Github Trending
        </Button>
        <View className="trending-wrap" />
        {trendingList.length > 0 &&
          trendingList.map((item, index) => {
            return <TrendingItem key={index + 1} data={item} index={index + 1} />
          })}
      </View>
    )
  }
}

export default ApiRequest
