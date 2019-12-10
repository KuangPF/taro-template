import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'
interface IState {
  webviewSrc: string
}

export default class WebViewPage extends Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = {
      webviewSrc: ''
    } as IState
  }
  componentWillMount() {
    this.setState({
      webviewSrc: this.$router.params.webviewSrc
    })
  }
  render() {
    return <WebView src={this.state.webviewSrc} />
  }
}
