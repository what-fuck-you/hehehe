import React from 'react';
import Axios from 'axios'
import 'antd-mobile/dist/antd-mobile.css';
import { Carousel, WingBlank } from 'antd-mobile';
import "../../node_modules/swiper/css/swiper.min.css"
import tsIcon from '../img/images/day03_01.jpg'; //引入的图片
import "../css/Index.css"
import "../font/iconfont.css"
import sd from '../font/iconfont.svg'
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 1080) deviceWidth = 1080;
document.documentElement.style.fontSize = deviceWidth/10.8 + 'px';



class Index extends React.Component {
    state = {
        data: ['1', '2', '3', '4'],
        imgHeight: 176,
        slideIndex: 2,
    }

    componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.state.data.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }
    render() {
        return(
            <div className="odiv">
                <img src={tsIcon} className="day03"/>
                <div className="odvi8" >
                    {/*<Icon type="unordered-list" />*/}
                    <div className="inde">
                        <span className="iconfont icon-caidan cai"></span>

                    </div>
                    <div className="indea">
                        首页
                    </div>
                    <div className="div234">
                        <span className="iconfont icon-lingdang cai"></span>
                        <span className="iconfont icon-gengduo cai lis"></span>
                    </div>
                </div>
                {/*轮播图*/}
                <div className="div675">
                    <WingBlank style={{margin: 0 }}>
                        <Carousel className="dsaw"
                                  autoplay={false}
                                  infinite
                                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                  afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href=""
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight,margin: 0 }}
                                >
                                    <img  className="dsaw"
                                          src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                          alt=""
                                          style={{ width: '100%', verticalAlign: 'top' }}
                                          onLoad={() => {
                                              // fire window resize event to change height
                                              window.dispatchEvent(new Event('resize'));
                                              this.setState({ imgHeight: 'auto' });
                                          }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
            </div>
        )
    }
    componentDidMount() {
        Axios.get('/api/4/news/latest').then((res)=>{
            console.log(res.data);

        })

        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','aaaaaa'],
            });
        }, 100);
    }

}

// ReactDOM.render(<Index />, mountNode);
export default Index
